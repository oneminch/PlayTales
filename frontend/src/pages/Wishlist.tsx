import { Select, SelectItem } from "@nextui-org/react";
import GameTitleCard from "@/components/GameTitleCard";
import games from "@/data";

const SORT_OPTIONS = [
  { label: "Title - Asc", value: "title-asc" },
  { label: "Title - Desc", value: "title-desc" },
  { label: "Price - Asc", value: "price-asc" },
  { label: "Price - Desc", value: "price-desc" }
];

const Wishlist = () => {
  return (
    <div className="space-y-8 py-10">
      <h1 className="text-3xl font-bold">Your Wishlist</h1>
      <Select
        disableAnimation={true}
        label="Sort By"
        size="sm"
        placeholder="Select Option"
        className="max-w-xs"
        items={SORT_OPTIONS}
      >
        {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
      </Select>
      <article className="w-full min-h-96 rounded-lg pb-8">
        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
          {games.map((game) => (
            <li className="mx-auto mb-2" key={game.title}>
              <GameTitleCard game={game} />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Wishlist;
