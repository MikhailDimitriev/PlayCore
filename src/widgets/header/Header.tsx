import { Link } from "react-router";
import { FavoritesNavItem } from "./ui";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-surface/90 backdrop-blur-sm">
      <div className="flex h-16 w-full items-center justify-between gap-6 inline-padding">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-3xl font-semibold tracking-tight text-frost transition-colors hover:text-phosphor"
        >
          PlayCore
        </Link>

        <FavoritesNavItem />
      </div>
    </header>
  );
};

export { Header };