import { useEffect, useState } from "react";
import Filter from "@/components/partials/Filter";
import ListItem from "@/components/cards/ListItem";
import { GameItem } from "@/types";

const Wishlist = () => {
  const [games, setGames] = useState<GameItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/data.json");
      const jsonData = await data.json();

      setGames(jsonData);
    };
    getData();
  }, []);

  return (
    <div className="space-y-4 pt-6 pb-4">
      <h1 className="text-2xl font-bold">Your Wishlist</h1>
      <Filter
        label="Sort"
        options={[
          { label: "Title: A-Z", value: "title-asc" },
          { label: "Title: Z-A", value: "title-desc" },
          { label: "Price: Low to High", value: "price-asc" },
          { label: "Price: High to Low", value: "price-desc" }
        ]}
      />
      <article className="w-full min-h-96 pb-8">
        <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {games!.map((game) => (
            <li className="mx-auto mb-2" key={game.title}>
              <ListItem game={game} />
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Wishlist;
