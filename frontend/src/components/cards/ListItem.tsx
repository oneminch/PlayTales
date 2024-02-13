import { Icon } from "@iconify/react";
import { Button, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import type { GameItem } from "@/types";
import GamePriceText from "../GamePriceText";

const ListItem = ({ game }: { game: GameItem }) => {
  return (
    <Link
      href={`/games/${game.id}`}
      className="relative p-1 pb-2 rounded-xl flex flex-col gap-y-1 items-start group no-underline"
    >
      <Image
        className="w-full rounded-xl shadow opacity-100"
        alt={`Poster Image for ${game.title}`}
        src={game.posterImage}
        removeWrapper={true}
      />
      <p className="font-bold text-sm text-left">{game.title}</p>
      <GamePriceText price={game.price} discount={game.discount} />
      <Button
        isIconOnly
        className="flex items-center justify-center text-lg absolute top-3 right-3 bg-white border border-gray-200 rounded-full w-8 h-8 invisible scale-85 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 transition duration-150 z-20"
        aria-label="Add to Wishlist"
        size="sm"
      >
        <Icon icon="heroicons:heart" />
      </Button>
    </Link>
  );
};

export default ListItem;
