import { notFound } from "next/navigation";
import { games } from "../gamesData";
import GamePlayClient from "./GamePlayClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const game = games.find((item) => item.slug === resolvedParams.slug);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: `${game.title} - Free Browser Game`,
    description: `${game.description} Play ${game.title} online for free on FreeGameHub with no download required.`,
    alternates: {
      canonical: `/games/${game.slug}`,
    },
    openGraph: {
      title: `${game.title} | FreeGameHub`,
      description: game.description,
      url: `/games/${game.slug}`,
      type: "website",
      images: [
        {
          url: game.thumbnail,
          width: 512,
          height: 384,
          alt: `${game.title} game thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} | FreeGameHub`,
      description: game.description,
      images: [game.thumbnail],
    },
  };
}

export default async function GamePage({ params }) {
  const resolvedParams = await params;
  const game = games.find((item) => item.slug === resolvedParams.slug);

  if (!game) {
    notFound();
  }

  return <GamePlayClient game={game} games={games} />;
}