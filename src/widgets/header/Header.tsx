import { Link } from "react-router";
import { FavoritesNavItem } from "./ui";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-surface/90 backdrop-blur-sm">
      <div className="flex h-20 w-full items-center justify-between gap-6 inline-padding">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-4xl sm:text-5xl font-semibold
          tracking-tight bg-linear-to-r from-frost to-phosphor bg-clip-text text-transparent transition-[filter]
          duration-300 drop-shadow-[0_1px_2px_rgba(3,7,12,0.9),0_0_16px_rgba(83,227,255,0.35)]
          hover:drop-shadow-[0_1px_2px_rgba(3,7,12,0.9),0_0_28px_rgba(83,227,255,0.55)]"
        >
          PlayCore
        </Link>

        <FavoritesNavItem />
      </div>
    </header>
  );
};

export { Header };