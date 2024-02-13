import ListItem from "@/components/cards/ListItem";
import Filter from "@/components/Filter";
import { GameItem } from "@/types";
import useFetch from "@/hooks/useFetch";
import Pagination from "@/components/partials/Pagination";
import { Link } from "@nextui-org/react";

const ItemList = () => {
  const {
    data: games,
    loading: isLoading,
    error: isError
  } = useFetch("/data.json", []);

  return (
    <div className="flex flex-col items-start gap-y-4" id="browse">
      <Link href="/">Reset</Link>
      <div className="flex flex-col sm:flex-row items-center w-full gap-y-4 sm:gap-y-0 sm:gap-x-4">
        <Filter
          label="Genre"
          options={[
            { label: "Action", value: "action" },
            { label: "Adventure", value: "adventure" },
            { label: "Indie", value: "indie" },
            { label: "Puzzle", value: "puzzle" },
            { label: "RPG", value: "rpg" },
            { label: "Shooter", value: "shooter" },
            { label: "Sports", value: "sports" },
            { label: "Strategy", value: "strategy" }
          ]}
        />
        <Filter
          label="Sort"
          options={[
            { label: "Title: A-Z", value: "title-asc" },
            { label: "Title: Z-A", value: "title-desc" },
            { label: "Price: Low to High", value: "price-asc" },
            { label: "Price: High to Low", value: "price-desc" }
          ]}
        />
      </div>
      <article className="w-full min-h-96">
        {isLoading && <p>Loading...</p>}
        {isError && <p>An Error Occured...</p>}
        {games && (
          <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {games.map((game: GameItem) => (
              <li className="w-full mb-2" key={game.title}>
                <ListItem game={game} />
              </li>
            ))}
          </ul>
        )}
      </article>
      {games && <Pagination total={64} />}
      {/* {games && <Pagination total={games.length} />} */}
    </div>
  );
};

export default ItemList;
