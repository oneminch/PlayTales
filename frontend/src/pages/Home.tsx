import GameTitleCard from "@/components/GameTitleCard";
import Filter from "@/components/partials/Filter";
import Hero from "@/components/partials/Hero";
import games from "@/data";

const Home = () => {
  return (
    <>
      <Hero
        className="bg-white border border-gray-200 mt-4 mb-2 pt-10 pb-6"
        textLabel="Play Your Next Favorite Story."
        actionLink={{ label: "Browse", url: "#browse" }}
      />
      <div
        className="flex flex-col md:flex-row items-start gap-y-4 md:gap-y-0 md:gap-x-4 py-4"
        id="browse"
      >
        <Filter />
        <article className="w-full min-h-96 rounded-lg">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {games.map((game) => (
              <li className="mx-auto mb-2" key={game.title}>
                <GameTitleCard game={game} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
};

export default Home;
