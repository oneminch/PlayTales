import { Image, Link } from "@nextui-org/react";
import IconLink from "../IconLink";

const Hero = ({
  className,
  textLabel,
  actionLink
}: {
  className: string;
  textLabel: string;
  actionLink: Record<string, string>;
}) => {
  return (
    <section
      className={`flex items-center flex-col md:flex-row h-96 md:h-72 rounded-lg w-full overflow-hidden relative ${className}`}
    >
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full"
        style={{
          background: "url('/images/hogwarts-legacy-1.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <Image
          removeWrapper
          src=""
          className="rounded-none w-full h-auto bg-center object-cover"
        />
        <div></div>
      </div>
      <div className="absolute z-20 bottom-1/2 md:bottom-0 md:right-1/2 w-full md:w-1/3 h-1/2 md:h-full bg-gradient-to-t md:bg-gradient-to-l from-white/100 via-white/75 via-25% to-white/0"></div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center gap-y-4">
        <IconLink path="/" icon="material-symbols:stadia-controller" />
        <h2 className="text-lg lg:text-xl font-semibold text-center text-gray-600">
          {textLabel}
        </h2>
        <Link
          href={actionLink.url}
          className="px-4 py-1.5 rounded-lg font-medium bg-gray-900 text-gray-50"
        >
          {actionLink.label}
        </Link>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  className: ""
};

export default Hero;
