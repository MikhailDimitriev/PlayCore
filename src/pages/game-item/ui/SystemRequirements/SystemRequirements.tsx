import type { SystemRequirements as SystemRequirementsType } from "~/entities/game";

type SystemRequirementsProps = {
  requirements: SystemRequirementsType;
};

const SystemRequirements = ({ requirements }: SystemRequirementsProps) => {
  const items = [
    { label: "OS", value: requirements.os },
    { label: "Processor", value: requirements.processor },
    { label: "Memory", value: requirements.memory },
    { label: "Graphics", value: requirements.graphics },
    { label: "Storage", value: requirements.storage },
  ];

  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-tight text-frost">
        System requirements
      </h2>
      <dl className="mt-4 border-t border-edge">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-6 border-b border-edge py-3"
          >
            <dt className="text-sm text-mist">{item.label}</dt>
            <dd className="text-right text-sm font-medium text-frost">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export { SystemRequirements };