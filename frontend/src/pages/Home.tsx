import Banner from "@/components/partials/Banner";
import Hero from "@/components/partials/Hero";
import ItemList from "@/components/partials/ItemList";

const Home = () => {
  return (
    <>
      <Hero
        className="bg-white border border-gray-200 pt-10 pb-6"
        textLabel="Play Your Next Story."
        actionLink={{ label: "Browse", url: "#browse" }}
      />
      <ItemList />
      <Banner
        className="bg-white border border-gray-200"
        textLabel="Become a Member & Save More."
        actionLink={{ label: "Join Now", url: "/signup" }}
      />
    </>
  );
};

export default Home;
