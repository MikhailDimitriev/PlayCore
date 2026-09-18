import type { GameFact } from "../../model/gamePresentation";

type GameFactsProps = {
  facts: GameFact[];
};

const GameFacts = ({ facts }: GameFactsProps) => {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-frost">
        The essentials
      </h2>
      <dl className="mt-4 border-t border-edge">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-baseline justify-between gap-6 border-b border-edge py-3"
          >
            <dt className="text-sm text-mist">{fact.label}</dt>
            <dd className="text-sm font-medium text-frost">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export { GameFacts };