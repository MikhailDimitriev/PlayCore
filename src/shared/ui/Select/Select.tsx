type SelectOption<T extends string> = {
  value: T;
  label: string;
};

type SelectProps<T extends string> = {
  id: string;
  label: string;
  value: T;
  options: ReadonlyArray<SelectOption<T>>;
  onChange: (value: T) => void;
};

const Select = <T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: SelectProps<T>) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-sm text-mist">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="rounded-lg border border-edge bg-surface-raised px-3 py-2 text-sm text-frost transition-colors hover:border-phosphor/70 focus:border-phosphor/70 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };