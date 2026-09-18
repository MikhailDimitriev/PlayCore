import type { GameHeroData } from "../../model/gamePresentation";
import {Link} from "react-router";

type GameHeroProps = {
  hero: GameHeroData;
};

const GameHero = ({ hero }: GameHeroProps) => {
  const { image, title, genre, platform, description, url } = hero;

  return (
    <section className="overflow-hidden rounded-xl border border-edge bg-surface-raised">
      <div className="relative">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="aspect-[16/7] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
      </div>

      <div className="relative -mt-20 px-6 pb-8 sm:-mt-24 sm:px-10 sm:pb-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-frost sm:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-mist">
              {genre} · {platform}
            </p>
          </div>

          <Link
            to={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-phosphor px-6 py-3 font-display text-base font-semibold text-surface transition-opacity hover:opacity-90"
          >
            Play now
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist">
          {description}
        </p>
      </div>
    </section>
  );
};

export { GameHero };