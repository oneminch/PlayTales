import { useEffect, useState } from "react";
import { Image, Link } from "@nextui-org/react";
import { GameItem } from "@/types";

const getMultipleRandom = (arr: string[], num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

const Hero = ({
  className,
  textLabel,
  actionLink
}: {
  className: string;
  textLabel: string;
  actionLink: Record<string, string>;
}) => {
  const [posters, setPosters] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/data.json");
      const jsonData = await data.json();

      const allPosters = jsonData.map((game: GameItem) => game.posterImage);
      setPosters(getMultipleRandom(allPosters, 3));
    };
    getData();
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-center rounded-lg space-y-8 w-full ${className}`}
    >
      <div className="relative w-20 h-28 sm:w-24 sm:h-32">
        {posters.map((poster) => (
          <Image
            key={poster}
            width={96}
            height={128}
            removeWrapper
            className="absolute top-2 bottom-0 left-0 right-0 rounded-md origin-bottom shadow-md ring-1 ring-gray-200/50 bg-gray-200 first:rotate-12 first:translate-x-12 even:-rotate-12 even:-translate-x-12 last:inset-0 last:scale-110 last:ring-0 last:-translate-y-0"
            src={poster}
          />
        ))}
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-600">
        {textLabel}
      </h2>
      <Link
        href={actionLink.url}
        className="px-4 py-1.5 rounded-lg font-medium bg-gray-900 text-gray-50"
      >
        {actionLink.label}
      </Link>
    </section>
  );
};

Hero.defaultProps = {
  className: ""
};

export default Hero;
