import { Icon } from "@iconify/react";
import { Button, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import type { GameTitle } from "@/types";

const GameTitleCard = ({ game }: { game: GameTitle }) => {
  let priceText = null;

  if (game.discount > 0) {
    priceText = (
      <>
        <span className="bg-amber-400 text-gray-800 rounded-md text-xs py-0.5 px-1">
          -{game.discount}%
        </span>
        <span className="text-gray-500">
          <s>${game.price}</s>
        </span>
        <span className="font-medium text-gray-700">
          ${((1 - game.discount / 100) * game.price).toFixed(2)}
        </span>
      </>
    );
  } else {
    priceText = (
      <span className="font-medium text-gray-700">${game.price}</span>
    );
  }

  return (
    <Link
      href={`/games/${game.id}`}
      className="focus:global-focus relative p-1 pb-2 rounded-xl flex flex-col gap-y-1 items-start w-36 xs:w-44 group no-underline"
    >
      <Image
        className="w-full rounded-lg shadow opacity-100"
        alt={`Poster Image for ${game.title}`}
        src={game.posterImage}
        removeWrapper={true}
      />
      <p className="font-bold text-sm text-left">{game.title}</p>
      <p className="w-full text-sm space-x-2">{priceText}</p>
      <Button
        isIconOnly
        className="focus:global-focus flex items-center justify-center text-lg absolute top-3 right-3 bg-white border border-gray-200 rounded-full w-8 h-8 invisible scale-85 opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 transition duration-150 z-20"
        aria-label="Add to Wishlist"
        size="sm"
      >
        <Icon icon="heroicons:heart" />
      </Button>
    </Link>
  );
};

export default GameTitleCard;
