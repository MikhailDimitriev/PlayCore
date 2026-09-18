import type { Route } from "./+types/HomePage";
import { useGamesCatalog } from "./model/hooks/useGamesCatalog";
import { CatalogContent } from "./ui/CatalogContent";
import { HomeHero } from "./ui/HomeHero";

export const meta: Route.MetaFunction = () => [
  { title: "GamePlay — Free-to-play game catalog" },
  {
    name: "description",
    content: "Explore free-to-play games for PC and browser.",
  },
];

const HomePage = () => {
  const {
    currentPage,
    visibleGames,
    totalCount,
    pagesCount,
    isLoading,
    errorMessage,
    listRef,
    handlePageChange,
  } = useGamesCatalog();

  return (
    <div className="py-10 inline-padding">
      <HomeHero totalCount={totalCount} />

      <CatalogContent
        currentPage={currentPage}
        visibleGames={visibleGames}
        pagesCount={pagesCount}
        isLoading={isLoading}
        errorMessage={errorMessage}
        listRef={listRef}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;