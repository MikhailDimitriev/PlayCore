type StarIconProps = {
  active: boolean;
};

const StarIcon = ({ active }: StarIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M12 2.5l3.09 6.26L22 9.85l-5 4.87 1.18 6.88L12 18.5l-6.18 3.1L7 14.72 2 9.85l6.91-1.09L12 2.5z" />
    </svg>
  );
};

export { StarIcon };