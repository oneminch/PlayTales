import { Icon } from "@iconify/react";
import { Button, Chip, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import type { GameItem } from "@/types";
import GamePriceText from "./GamePriceText";

const GameItemAltCard = ({ game }: { game: GameItem }) => {
  return (
    <div className="h-full rounded-xl flex gap-x-6 items-start py-4">
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
        <div className="flex items-center gap-x-2">
          {["Steam", "Windows"].map((item) => (
            <Chip
              key={item}
              className="px-2 rounded-md"
              size="sm"
              classNames={{
                content: "px-1.5"
              }}
              startContent={
                <Icon
                  className="text-sm"
                  icon={`simple-icons:${item.toLowerCase()}`}
                />
              }
            >
              {item}
            </Chip>
          ))}
        </div>
        <GamePriceText price={game.price} discount={game.discount} />
      </div>
      <Button
        isIconOnly
        className="flex items-center justify-center text-lg bg-white border border-gray-200 rounded-full w-8 h-8 ml-auto text-gray-700"
        aria-label="Add to Wishlist"
        size="sm"
      >
        <Icon icon="heroicons:trash-20-solid" />
      </Button>
    </div>
  );
};

export default GameItemAltCard;
