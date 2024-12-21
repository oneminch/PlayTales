import { Image, Link, cn } from "@nextui-org/react";

const Hero = ({
  className = "",
  textLabel,
  actionLink
}: {
  className?: string;
  textLabel: string;
  actionLink?: Record<string, string>;
}) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center rounded-lg gap-y-12 w-full",
        className
      )}>
      <div className="relative w-20 h-28 sm:w-24 sm:h-32">
        {[1, 2, 3].map((poster) => (
          <Image
            key={poster}
            width={96}
            height={128}
            removeWrapper
            className="min-w-full min-h-full absolute top-2 bottom-0 left-0 right-0 rounded-md origin-bottom shadow-md ring-1 ring-primary bg-primary first:rotate-12 first:translate-x-12 even:-rotate-12 even:-translate-x-12 last:inset-0 last:scale-110 last:ring-0 last:-translate-y-0"
            src={`/posters/${poster}.png`}
          />
        ))}
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-center text-primary-foreground">
        {textLabel}
      </h2>
      {actionLink && (
        <Link
          href={actionLink.url}
          className="px-4 py-1.5 rounded-lg font-medium text-primary bg-foreground">
          {actionLink.label}
        </Link>
      )}
    </section>
  );
};

export default Hero;
