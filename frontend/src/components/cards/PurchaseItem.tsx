import { Icon } from "@iconify/react";
import { Button, Image } from "@nextui-org/react";
import type { GameItem } from "@/types";

const PurchaseItem = ({ game }: { game: GameItem }) => {
  return (
    <div className="h-full rounded-xl flex gap-x-6 items-start py-4">
      <Image
        className="h-full rounded-lg shadow opacity-100"
        alt={`Poster Image for ${game.title}`}
        src={game.posterImage}
        removeWrapper
      />
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-left">{game.title} & 2 More Games</p>
        <p className="text-sm">
          <span className="text-gray-500 font-medium">Date: </span>
          <span>Oct 23, 2023</span>
        </p>
        <p className="text-sm">
          <span className="text-gray-500 font-medium">Total: </span>
          <span>$107.99</span>
        </p>
        <p className="text-sm">
          <span className="text-gray-500 font-medium">Order No: </span>
          <span>PLTLS54AEF69FF23</span>
        </p>
      </div>
      <Button
        startContent={
          <Icon className="text-lg" icon="heroicons:currency-dollar-20-solid" />
        }
        className="flex items-center justify-center ml-auto rounded-xl bg-amber-400 text-gray-700"
        aria-label="Refund Purchase"
      >
        Refund
      </Button>
    </div>
  );
};

export default PurchaseItem;
