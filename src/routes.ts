import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/home/HomePage.tsx"),
  route("game/:gameId", "./pages/game-item/GameItem.tsx"),
  route("favorites", "./pages/favorites/FavoritesPage.tsx"),
] satisfies RouteConfig;