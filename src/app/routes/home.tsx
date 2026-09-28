import { HomePage } from "~/pages/home";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [
  { title: "PlayCore — Free-to-play game catalog" },
  {
    name: "description",
    content: "Explore free-to-play games for PC and browser.",
  },
];

export default HomePage;
