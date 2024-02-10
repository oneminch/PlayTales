import Hero from "@/components/partials/Hero";

const ToS = () => {
  return (
    <div className="space-y-4 pt-6 pb-4 text-center">
      <h1 className="text-2xl font-bold">Terms of Service</h1>

      <article className="w-full md:w-2/3 mx-auto pb-8">
        <p>
          By signing up or creating an account, you understand that PlayTales is
          not a real service and therefore shouldn't even have a Terms of
          Service page. Your account will be permanently purged from the
          database after a certain period of time.
        </p>
      </article>
      <Hero
        className="py-6"
        textLabel="Play Your Next Story."
        actionLink={{ label: "Browse Games", url: "/" }}
      />
    </div>
  );
};

export default ToS;
