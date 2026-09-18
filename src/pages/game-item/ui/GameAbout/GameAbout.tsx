type GameAboutProps = {
  paragraphs: string[];
};

const GameAbout = ({ paragraphs }: GameAboutProps) => {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-frost">
        About this game
      </h2>
      <div className="mt-4 max-w-3xl space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-mist">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export { GameAbout };