import { Link } from "react-router";

type GameCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
};

const GameCard = ({ id, title, thumbnail, genre, platform }: GameCardProps) => {
  return (
    <Link
      to={`/game/${id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-edge bg-surface-raised transition-colors hover:border-phosphor/70"
    >
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-frost">
          {title}
        </h3>
        <p className="mt-auto text-sm text-mist">
          {genre} · {platform}
        </p>
      </div>
    </Link>
  );
};

export { GameCard };