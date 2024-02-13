import { Image } from "@nextui-org/react";
import type { GameItem } from "@/types";
import GamePriceText from "../GamePriceText";

const SearchItem = ({ game }: { game: GameItem }) => {
  return (
    <div className="h-full rounded-xl flex gap-x-2 items-start py-1">
      <Image
        className="h-full rounded-lg shadow opacity-100"
        alt={`Poster Image for ${game.title}`}
        src={game.posterImage}
        removeWrapper
      />
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-sm text-left">{game.title}</p>
        <GamePriceText
          className="text-xs"
          price={game.price}
          discount={game.discount}
        />
      </div>
    </div>
  );
};

export default SearchItem;
