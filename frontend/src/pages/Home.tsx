import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import GameItemCard from "@/components/GameItemCard";
import Filter from "@/components/partials/Filter";
import Hero from "@/components/partials/Hero";
import { GameItem } from "@/types";
import Banner from "@/components/partials/Banner";

const Home = () => {
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
    <>
      <Hero
        className="bg-white border border-gray-200 pt-10 pb-6"
        textLabel="Play Your Next Story."
        actionLink={{ label: "Browse", url: "#browse" }}
      />
      <div className="flex flex-col items-start gap-y-4" id="browse">
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
        <article className="w-full min-h-96 rounded-lg">
          {!games && <p>Loading...</p>}
          <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {games!.map((game) => (
              <li className="w-full mb-2" key={game.title}>
                <GameItemCard game={game} />
              </li>
            ))}
          </ul>
        </article>
        <Pagination
          className="mx-auto my-6"
          total={Math.ceil(games!.length / 8)}
          initialPage={1}
        />
      </div>
      <Banner
        className="bg-white border border-gray-200"
        textLabel="Become a Member & Save More."
        actionLink={{ label: "Join Now", url: "/signup" }}
      />
    </>
  );
};

export default Home;
