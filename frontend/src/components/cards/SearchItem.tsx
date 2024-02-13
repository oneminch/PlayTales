import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import type { GameItem } from "@/types";
import GamePriceText from "../GamePriceText";

const GameSearchItem = ({ game }: { game: GameItem }) => {
  return (
    <div className="h-full rounded-xl flex gap-x-2 items-start py-1">
      <Image
        className="h-full rounded-lg shadow opacity-100"
        alt={`Poster Image for ${game.title}`}
        src={game.posterImage}
        removeWrapper
      />
      <div className="flex flex-col gap-y-2">
        <Link
          href={`/games/${game.id}`}
          className="font-bold text-sm text-left"
        >
          {game.title}
        </Link>
        <GamePriceText
          className="text-xs"
          price={game.price}
          discount={game.discount}
        />
      </div>
    </div>
  );
};

export default GameSearchItem;
