import type { GameDetail } from "~/entities/game";
import { GameItemPage } from "./ui";

type GameItemProps = {
  game: GameDetail;
};

const GameItem = ({ game }: GameItemProps) => <GameItemPage game={game} />;

export default GameItem;
