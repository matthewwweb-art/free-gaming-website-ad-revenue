"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { communityClient as client, communityEnabled } from "../lib/communityClient";
import styles from "./CommunityChat.module.css";

// One room for the whole site. No messages are saved in the browser.
export default function CommunityChat() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [messages, setMessages] = useState([]);
  const [reports, setReports] = useState([]);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [body, setBody] = useState("");
  const [adult, setAdult] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const scrollRef = useRef(null);

  const refreshMessages = useCallback(async () => {
    if (!client) return;
    const { data, error: readError } = await client
      .from("community_messages")
      .select("id,user_id,display_name,body,is_admin,created_at")
      .order("created_at", { ascending: false })
      .limit(70);
    if (readError) {
      setError(`Chat unavailable: ${readError.message}`);
      return;
    }
    setMessages((data || []).reverse());
  }, []);

  const refreshReports = useCallback(async () => {
    if (!client || !isAdmin) return;
    const { data } = await client
      .from("community_reports")
      .select("message_id")
      .order("created_at", { ascending: false })
      .limit(100);
    setReports(data || []);
  }, [isAdmin]);

  useEffect(() => {
    if (!client) return;
    let active = true;
    client.auth.getSession().then(({ data }) => {
      if (active) setUser(data.session?.user || null);
    });
    const { data: subscription } = client.auth.onAuthStateChange((_event, session) => {
      if (_event === "SIGNED_OUT") {
        setProfile(null);
        setIsAdmin(false);
        setReports([]);
      }
      setUser(session?.user || null);
    });
    return () => { active = false; subscription.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    if (!client || !user) {
      return;
    }
    let active = true;
    async function loadIdentity() {
      const [{ data: identity }, { data: adminFlag }] = await Promise.all([
        client.from("community_profiles").select("display_name").eq("user_id", user.id).maybeSingle(),
        client.rpc("community_is_admin"),
      ]);
      if (active) {
        setProfile(identity || null);
        setIsAdmin(adminFlag === true);
      }
    }
    loadIdentity();
    return () => { active = false; };
  }, [user]);


  useEffect(() => {
    if (!client || !open) return;
    const initialLoad = setTimeout(() => { void refreshMessages(); }, 0);
    const channel = client
      .channel("community-global-postgres")
      .on("postgres_changes", { event: "*", schema: "public", table: "community_messages" },
        () => refreshMessages())
      .subscribe();
    // Polling is a backup if a websocket is blocked, and ensures deletions eventually disappear.
    const poll = setInterval(refreshMessages, 20000);
    return () => { clearTimeout(initialLoad); clearInterval(poll); client.removeChannel(channel); };
  }, [open, refreshMessages]);

  useEffect(() => {
    if (!client || !open || !isAdmin) return;
    const initialLoad = setTimeout(() => { void refreshReports(); }, 0);
    return () => clearTimeout(initialLoad);
  }, [open, isAdmin, refreshReports]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event) { if (event.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  async function emailSignIn(event) {
    event.preventDefault();
    setError(""); setNotice("");
    if (!adult) { setError("Confirm you are at least 18 and agree to the chat rules."); return; }
    setBusy(true);
    const { error: signInError } = await client.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin + window.location.pathname },
    });
    setBusy(false);
    if (signInError) setError(signInError.message);
    else setNotice("Check your email for the secure sign-in link.");
  }

  async function saveProfile(event) {
    event.preventDefault();
    setError(""); setNotice("");
    if (!adult) { setError("You must confirm you are 18+ and accept the rules."); return; }
    setBusy(true);
    const { error: saveError } = await client.from("community_profiles").insert({
      user_id: user.id, display_name: displayName.trim(), adult_attested: true,
    });
    setBusy(false);
    if (saveError) setError(saveError.message);
    else setProfile({ display_name: displayName.trim() });
  }

  async function sendMessage(event) {
    event.preventDefault();
    const message = body.trim();
    if (!message || busy) return;
    setBusy(true); setError("");
    const { error: postError } = await client.from("community_messages").insert({ body: message });
    setBusy(false);
    if (postError) setError(postError.message);
    else { setBody(""); refreshMessages(); }
  }

  async function reportMessage(id) {
    if (!user) { setError("Sign in to report a message."); return; }
    setError(""); setNotice("");
    const { error: reportError } = await client.from("community_reports")
      .insert({ message_id: id, reason: "Reported by community member" });
    if (reportError) setError(reportError.message);
    else setNotice("Report sent for moderator review.");
  }

  async function removeMessage(id) {
    if (!isAdmin || !window.confirm("Remove this message?")) return;
    const { error: deleteError } = await client.from("community_messages").delete().eq("id", id);
    if (deleteError) setError(deleteError.message);
    else { refreshMessages(); refreshReports(); }
  }

  async function banUser(id) {
    if (!isAdmin || !id || !window.confirm("Ban this account from chat?")) return;
    const { error: banError } = await client.from("community_bans").insert({ user_id: id });
    if (banError) setError(banError.message);
    else setNotice("Account banned from posting. Remove existing messages separately.");
  }

  async function signOut() {
    await client.auth.signOut();
    setProfile(null); setIsAdmin(false); setAdult(false); setReports([]);
  }

  if (!communityEnabled) return null;

  return (
    <>
      <button type="button" className={styles.launcher} onClick={() => setOpen((v) => !v)}
        aria-expanded={open} aria-controls="mwh-community-panel">
        {open ? "Close Chat" : "Community Chat"}
      </button>
      {open && (
        <section className={styles.panel} id="mwh-community-panel" aria-label="Free Game Hub community chat">
          <header className={styles.header}>
            <div>
              <h2 className={styles.headerTitle}>Free Game Hub Chat</h2>
              <div className={styles.headerSubtitle}>Global community · moderated · 18+ to post</div>
            </div>
            <button type="button" className={styles.iconButton} onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </header>
          <div className={styles.messages} ref={scrollRef} aria-live="polite" aria-relevant="additions text">
            {messages.length === 0 && <p className={styles.note}>No messages yet. Say hello when chat opens!</p>}
            {messages.map((m) => (
              <article className={styles.message} key={m.id}>
                <div className={styles.messageHead}>
                  <span className={m.is_admin ? styles.adminName : styles.name}>
                    {m.display_name}{m.is_admin ? " · ADMIN" : ""}
                    {isAdmin && reports.some((r) => r.message_id === m.id) ? " ⚑ Reported" : ""}
                  </span>
                  <time className={styles.timestamp} dateTime={m.created_at}>
                    {new Date(m.created_at).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                  </time>
                </div>
                <p className={styles.body}>{m.body}</p>
                <div className={styles.smallActions}>
                  {user && m.user_id !== user.id && (
                    <button type="button" className={styles.textButton} onClick={() => reportMessage(m.id)}>Report</button>
                  )}
                  {isAdmin && (
                    <>
                      <button type="button" className={`${styles.textButton} ${styles.warningButton}`} onClick={() => removeMessage(m.id)}>Delete</button>
                      {m.user_id !== user?.id && (
                        <button type="button" className={`${styles.textButton} ${styles.warningButton}`} onClick={() => banUser(m.user_id)}>Ban</button>
                      )}
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.footer}>
            {error && <p role="alert" className={styles.error}>{error}</p>}
            {notice && <p role="status" className={styles.ok}>{notice}</p>}
            {!user ? (
              <form className={styles.form} onSubmit={emailSignIn}>
                <p className={styles.note}>Read messages freely. Sign in by email to participate. Your email is never displayed.</p>
                <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Your email" aria-label="Email for chat sign-in" />
                <label className={styles.checkboxRow}><input type="checkbox" checked={adult} onChange={(e) => setAdult(e.target.checked)} />I am 18 or older. I agree: no personal details, links, bullying, or spam.</label>
                <button type="submit" disabled={busy || !adult} className={styles.button}>Email me a sign-in link</button>
              </form>
            ) : !profile ? (
              <form className={styles.form} onSubmit={saveProfile}>
                <p className={styles.note}>Choose a public nickname (2–24 letters, numbers, spaces, _ or -).</p>
                <input className={styles.input} value={displayName} onChange={(e) => setDisplayName(e.target.value)} required minLength={2} maxLength={24} placeholder="Nickname" aria-label="Public nickname" />
                <label className={styles.checkboxRow}><input type="checkbox" checked={adult} onChange={(e) => setAdult(e.target.checked)} />I am 18+ and accept the community chat rules.</label>
                <button type="submit" disabled={busy || !adult} className={styles.button}>Join community</button>
                <button type="button" className={styles.textButton} onClick={signOut}>Sign out</button>
              </form>
            ) : (
              <form className={styles.form} onSubmit={sendMessage}>
                <div className={styles.row}>
                  <span className={styles.note}>Posting as <b>{profile.display_name}</b>{isAdmin ? " · Admin" : ""}</span>
                  <button type="button" className={styles.textButton} onClick={signOut}>Sign out</button>
                </div>
                <textarea className={styles.input} value={body} onChange={(e) => setBody(e.target.value)} maxLength={350} rows={2} placeholder="Write a public message..." aria-label="Chat message" />
                <button type="submit" disabled={busy || !body.trim()} className={styles.button}>Send message</button>
                <p className={styles.note}>Public room. No personal information or links. Messages may be removed by moderators. One post every 12 seconds.</p>
              </form>
            )}
          </div>
        </section>
      )}
    </>
  );
}
