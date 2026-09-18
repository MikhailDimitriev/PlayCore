import type { Screenshot } from "~/entities/game";

type GameScreenshotsProps = {
  screenshots: Screenshot[];
  title: string;
};

const GameScreenshots = ({ screenshots, title }: GameScreenshotsProps) => {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-frost">
        Screenshots
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt={`${title} — screenshot ${screenshot.id}`}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-edge bg-surface-raised object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export { GameScreenshots };