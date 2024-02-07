import { useState } from "react";
import { Link } from "@nextui-org/react";
import games from "@/data";

const ALL_POSTERS = games.map((game) => game.posterImage);

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
  const [posters] = useState(() => getMultipleRandom(ALL_POSTERS, 3));

  return (
    <section
      className={`flex flex-col items-center justify-center rounded-lg space-y-6 ${className}`}
    >
      <div className="relative w-20 h-28 sm:w-24 sm:h-32">
        <div
          className={`absolute top-2 bottom-0 left-0 right-0 rounded-md origin-bottom rotate-12 translate-x-12 shadow-md ring-1 ring-gray-200/50`}
          style={{
            background: `url(${posters[0]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        ></div>
        <div
          className={`absolute top-2 bottom-0 left-0 right-0 rounded-md origin-bottom -rotate-12 -translate-x-12 shadow-md ring-1 ring-gray-200/50`}
          style={{
            background: `url(${posters[1]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        ></div>
        <div
          className={`absolute inset-0 rounded-md -translate-y-4 bg-white origin-bottom shadow-md`}
          style={{
            background: `url(${posters[2]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        ></div>
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-600">
        {textLabel}
      </h2>
      <Link
        href={actionLink.url}
        className="px-4 py-1.5 rounded-xl font-medium bg-gray-900 text-gray-50 focus:global-focus"
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
