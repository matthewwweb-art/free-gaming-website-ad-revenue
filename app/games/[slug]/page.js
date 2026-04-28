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
    title: `${game.title} | Free Browser Game`,
    description: game.description,
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