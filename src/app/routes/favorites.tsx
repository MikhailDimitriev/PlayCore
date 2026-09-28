import { FavoritesPage, toFavoritesMeta } from "~/pages/favorites";
import type { Route } from "./+types/favorites";

export const meta: Route.MetaFunction = () => toFavoritesMeta();

export default FavoritesPage;
