import { Link, cn } from "@nextui-org/react";

const Banner = ({
  className,
  textLabel,
  actionLink,
  isVisible
}: {
  className: string;
  textLabel: string;
  actionLink: Record<string, string>;
  isVisible: boolean;
}) => {
  return (
    isVisible && (
      <section
        className={cn(
          "flex items-center flex-col md:flex-row h-96 md:h-72 rounded-xl w-full overflow-hidden relative",
          className
        )}
      >
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full"
          style={{
            background: "url('/banner.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="absolute z-20 bottom-1/2 md:bottom-0 md:right-1/2 w-full md:w-1/3 h-1/2 md:h-full bg-gradient-to-t md:bg-gradient-to-l from-primary/100 via-primary/75 via-25% to-primary/0"></div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center gap-y-4">
          <img className="w-12 h-12" src="/logo.svg" alt="PlayTales Logo" />
          <h2 className="text-lg lg:text-xl font-semibold text-center text-foreground">
            {textLabel}
          </h2>
          <Link
            href={actionLink.url}
            className="px-4 py-1.5 rounded-xl font-medium text-background bg-foreground"
          >
            {actionLink.label}
          </Link>
        </div>
      </section>
    )
  );
};

Banner.defaultProps = {
  className: "",
  isVisible: true
};

export default Banner;
