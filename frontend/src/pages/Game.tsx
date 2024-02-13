import { useParams } from "react-router-dom";
import { Button, Chip, CircularProgress, Image } from "@nextui-org/react";
import { SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import Carousel from "@/components/partials/Carousel";
import type { GameItem } from "@/types";
import { useEffect, useState } from "react";
import GamePriceText from "@/components/GamePriceText";

const Game = () => {
  const { gameId } = useParams();
  const [currentGame, setCurrentGame] = useState<GameItem>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/data.json");
      const jsonData = await data.json();

      const currGame = jsonData.find(
        (game: GameItem) => game.id === gameId
      ) as GameItem;
      setCurrentGame(currGame);
    };
    getData();
  }, [gameId]);

  if (!currentGame) {
    return <p>Loading...</p>;
  }

  return (
    <article className="flex flex-col gap-y-4 my-8">
      <div className="flex flex-col-reverse md:flex-row items-start gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-4">
        <section className="w-full md:w-2/3 flex flex-col gap-y-4 border border-gray-300 bg-white/25 rounded-xl">
          <Carousel>
            {currentGame!.screenshots.map((screenshot) => (
              <SwiperSlide
                key={screenshot}
                className="text-center flex justify-center items-center"
              >
                <Image
                  alt={`Poster Image for ${currentGame!.title}`}
                  src={screenshot}
                  className="w-full h-full rounded-none object-cover opacity-100"
                  removeWrapper={true}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </section>
        <section className="w-full md:w-1/3 pt-4 pb-8 px-8 flex flex-col gap-y-12 border border-gray-200 bg-white rounded-xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{currentGame!.title}</h1>
            <div className="flex items-center gap-x-2">
              <Chip
                className="px-2 rounded-md"
                size="sm"
                classNames={{
                  content: "px-1.5"
                }}
                startContent={
                  <Icon className="text-sm" icon="simple-icons:steam" />
                }
              >
                Steam
              </Chip>
              <Chip
                className="px-2 rounded-md"
                size="sm"
                classNames={{
                  content: "px-1.5"
                }}
                startContent={
                  <Icon className="text-sm" icon="simple-icons:windows" />
                }
              >
                Windows
              </Chip>
            </div>
            <p>95 - Metacritic</p>
            <GamePriceText
              price={currentGame!.price}
              discount={currentGame!.discount}
            />
          </div>
          <div className="space-y-4">
            <Button
              className="w-full flex items-center gap-x-2 font-medium space-x-1 bg-gray-900 text-gray-50 py-1 rounded-xl"
              endContent={
                <Icon className="text-lg" icon="heroicons:shopping-cart" />
              }
            >
              Add to Cart
            </Button>
            <Button
              className="w-full flex items-center gap-x-2 font-medium space-x-1 bg-gray-200 text-gray-900 py-1 rounded-xl"
              endContent={<Icon className="text-lg" icon="heroicons:heart" />}
            >
              Add to Wishlist
            </Button>
          </div>
        </section>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-4 border border-gray-200 bg-white rounded-xl">
        <section className="w-full md:w-2/3 p-8 space-y-4">
          <h2 className="text-xl font-bold">About {currentGame!.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur atque neque repellat quia vel aliquam officia minus
            repellendus dignissimos maxime, ea, incidunt corporis consectetur.
            Error rerum provident molestiae ipsa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque, cupiditate optio nesciunt
            voluptatum reprehenderit nobis aliquid, cum sunt quia aspernatur quo
            fuga officiis? Obcaecati laborum eaque eius! Molestiae, maiores
            ipsa.
          </p>
          <div className="flex items-center justify-evenly gap-10 py-10">
            {[
              { label: "Metacritic", value: 90 },
              { label: "OpenCritic", value: 88 },
              { label: "AnotherCritic", value: 91 }
            ].map((rating) => (
              <CircularProgress
                key={rating.label}
                label={rating.label}
                aria-label={rating.label}
                size="lg"
                value={rating.value}
                color="default"
                classNames={{
                  svg: "w-24 h-24 drop-shadow-md",
                  indicator: "stroke-green-500",
                  track: "stroke-green-500/10",
                  value: "text-xl font-semibold text-gray-900"
                }}
                strokeWidth={4}
                showValueLabel={true}
              />
            ))}
          </div>
        </section>
        <section className="w-full md:w-1/3 p-8 space-y-4">
          <h2 className="text-xl font-bold">Game Details</h2>
          <p>
            <span className="text-gray-500 font-medium">Platform:</span>
            <br />
            <span>Steam</span>
          </p>
          <p>
            <span className="text-gray-500 font-medium">Release Date:</span>
            <br />
            <span>May 13, 2019</span>
          </p>
          <p>
            <span className="text-gray-500 font-medium">Developer:</span>
            <br />
            <span>Avalanche Studios</span>
          </p>
          <p>
            <span className="text-gray-500 font-medium">Publisher:</span>
            <br />
            <span>Bethesda Softworks</span>
          </p>
          <p>
            <span className="text-gray-500 font-medium">Rating:</span>
            <br />
            <span>PEGI rating of 18</span>
          </p>
          <p>
            <span className="text-gray-500 font-medium">Franchise:</span>
            <br />
            <span>RAGE</span>
          </p>
        </section>
      </div>
    </article>
  );
};

export default Game;
