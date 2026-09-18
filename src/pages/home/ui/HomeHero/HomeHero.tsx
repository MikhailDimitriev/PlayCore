type HomeHeroProps = {
  totalCount: number;
};

const HomeHero = ({ totalCount }: HomeHeroProps) => {
  return (
    <section className="mb-10 max-w-2xl">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-frost sm:text-5xl">
        Play now, pay nothing.
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-mist">
        {totalCount} free-to-play games for PC and browser, all in one
        catalog. Pick one and jump in.
      </p>
    </section>
  );
};

export { HomeHero };