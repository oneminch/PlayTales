import Hero from "@/components/partials/Hero";

const ToS = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Terms of Service</h1>

      <article className="w-full md:w-2/3 mx-auto pb-8 text-center">
        <p>
          By signing up or creating an account, you understand that PlayTales is
          not a real service and therefore shouldn't even have a Terms of
          Service page. Your account will be permanently purged from the
          database after a certain period of time.
        </p>
      </article>
      <Hero
        className="py-6"
        textLabel="Play Your Next Tale."
        actionLink={{ label: "Browse Games", url: "/" }}
      />
    </>
  );
};

export default ToS;
