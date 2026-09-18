import {Link} from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-edge bg-surface-raised">
      <div className="w-full py-10 inline-padding">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-frost">
              PlayCore
            </p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-mist">
              A catalogue of free-to-play games for PC and browser.
            </p>
          </div>
          <Link
            to="https://www.freetogame.com/api-doc"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-mist transition-colors hover:text-phosphor"
          >
            Game data: FreeToGame API
          </Link>
        </div>
        <div className="mt-8 border-t border-edge pt-4 text-xs text-mist">
          © 2026 PlayCore
        </div>
      </div>
    </footer>
  );
};

export { Footer };