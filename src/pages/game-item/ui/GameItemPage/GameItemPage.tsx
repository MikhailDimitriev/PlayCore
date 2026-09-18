import { Link } from "react-router";
import type { GameDetail } from "~/entities/game";
import {
  toGameFacts,
  toGameHeroData,
  toGalleryScreenshots,
  toParagraphs,
} from "../../model/gamePresentation";
import { GameAbout } from "../GameAbout";
import { GameFacts } from "../GameFacts";
import { GameHero } from "../GameHero";
import { GameScreenshots } from "../GameScreenshots";
import { SystemRequirements } from "../SystemRequirements";

type GameItemPageProps = {
  game: GameDetail;
};

const GameItemPage = ({ game }: GameItemPageProps) => {
  const galleryScreenshots = toGalleryScreenshots(game.screenshots);
  const hero = toGameHeroData(game);

  return (
    <article className="py-10 inline-padding">
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-medium text-mist transition-colors hover:text-phosphor"
        >
          ← Back to catalog
        </Link>
      </div>

      <GameHero hero={hero} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-12">
          <GameAbout paragraphs={toParagraphs(game.description)} />
          {galleryScreenshots.length > 0 && (
            <GameScreenshots screenshots={galleryScreenshots} title={game.title} />
          )}
        </div>

        <aside className="space-y-12">
          <GameFacts facts={toGameFacts(game)} />
          {game.minimumSystemRequirements && (
            <SystemRequirements requirements={game.minimumSystemRequirements} />
          )}
        </aside>
      </div>
    </article>
  );
};

export { GameItemPage };