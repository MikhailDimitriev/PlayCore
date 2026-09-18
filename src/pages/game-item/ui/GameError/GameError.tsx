import { Link, isRouteErrorResponse } from "react-router";

type GameErrorProps = {
  error: unknown;
};

const GameError = ({ error }: GameErrorProps) => {
  let message = "Game not found";
  let details = "The requested game could not be loaded.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Game not found" : "Something went wrong";
    details =
      error.status === 404
        ? "The requested game could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <section className="py-10 inline-padding">
      <Link
        to="/"
        className="text-sm font-medium text-mist transition-colors hover:text-phosphor"
      >
        ← Back to catalog
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-frost">
        {message}
      </h1>
      <p className="mt-2 text-mist">{details}</p>
    </section>
  );
};

export { GameError };