import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx", { id: "home" }),
  route("game/:gameId", "./routes/game-item.tsx", { id: "game-item" }),
  route("favorites", "./routes/favorites.tsx", { id: "favorites" }),
] satisfies RouteConfig;
