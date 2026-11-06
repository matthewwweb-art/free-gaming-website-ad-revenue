# Run from project root AFTER extracting this ZIP over the project root.
$ErrorActionPreference = "Stop"
if (-not (Test-Path -LiteralPath "app\layout.js")) { throw "Run from the Free Game Hub project root." }
if (-not (Test-Path -LiteralPath "components\CommunityChat.js")) { throw "Extract chat package to project root first." }
if (-not (Test-Path -LiteralPath "package-lock.json")) { throw "Missing package-lock.json" }
$layoutPath = (Resolve-Path -LiteralPath "app\layout.js").Path
$layout = [System.IO.File]::ReadAllText($layoutPath)
$importAnchor = 'import { Analytics } from "@vercel/analytics/next";'
$renderAnchor = '<Analytics />'
if ($layout.Contains('import CommunityChat from "../components/CommunityChat";')) {
  Write-Host "Chat is already imported; skipping layout change." -ForegroundColor Yellow
} else {
  if (-not $layout.Contains($importAnchor)) { throw "Cannot locate Analytics import. No layout edits made." }
  if (-not $layout.Contains($renderAnchor)) { throw "Cannot locate Analytics component. No layout edits made." }
  $layout = $layout.Replace($importAnchor, $importAnchor + "`n" + 'import CommunityChat from "../components/CommunityChat";')
  $layout = $layout.Replace($renderAnchor, '<CommunityChat />' + "`n        " + $renderAnchor)
  Copy-Item -LiteralPath $layoutPath -Destination "$layoutPath.bak-before-community-chat" -Force
  [System.IO.File]::WriteAllText($layoutPath, $layout, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Chat wired into app/layout.js (disabled until environment variables are set)." -ForegroundColor Green
}
Write-Host "Installing Supabase client dependency..." -ForegroundColor Cyan
npm install '@supabase/supabase-js@^2' --no-audit --no-fund
if ($LASTEXITCODE -ne 0) { throw "npm install failed. Check output; do not commit." }
Write-Host "Checking lint and build..." -ForegroundColor Cyan
npm run lint
if ($LASTEXITCODE -ne 0) { throw "Lint failed. No commit made." }
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed. No commit made." }
git diff --check
if ($LASTEXITCODE -ne 0) { throw "git diff --check failed." }
Write-Host "Chat code installed, build passed. Backend still requires setup; chat is not live." -ForegroundColor Green
git status --short
