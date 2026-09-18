import type { Route } from "./+types/HomePage";
import { useGameStore } from "~/entities/game";
import { GameCatalog } from "~/widgets/game-catalog";
import { HomeHero } from "./ui/HomeHero";

export const meta: Route.MetaFunction = () => [
  { title: "PlayCore — Free-to-play game catalog" },
  {
    name: "description",
    content: "Explore free-to-play games for PC and browser.",
  },
];

const HomePage = () => {
  const totalCount = useGameStore((state) => state.games.length);

  return (
    <div className="py-10 inline-padding">
      <HomeHero totalCount={totalCount} />

      <GameCatalog />
    </div>
  );
};

export default HomePage;