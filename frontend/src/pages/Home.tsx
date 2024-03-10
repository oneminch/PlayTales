import Banner from "@/components/partials/Banner";
import Hero from "@/components/partials/Hero";
import ProductList from "@/components/partials/ProductList";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/auth-context";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SearchForm from "@/components/forms/SearchForm";

const Home = () => {
  const { isLoggedIn } = useAuthContext();
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState("");

  useEffect(() => {
    if (searchParams.toString().trim()) {
      setQueryParams(`?${searchParams.toString()}`);
    } else {
      setQueryParams("");
    }
  }, [searchParams]);

  const queryClient = useQueryClient();

  const { isError, isFetching, data } = useQuery<any>(
    {
      queryKey: [`/products${queryParams}`],
      placeholderData: { products: [], count: 0 }
    },
    queryClient
  );

  return (
    <>
      <SearchForm className="block md:hidden" />

      <Hero
        className="text-foreground bg-primary border border-secondary pt-12 pb-8"
        textLabel="Play Your Next Tale."
      />

      <ProductList data={data} isError={isError} isLoading={isFetching} />

      <Banner
        className="text-foreground bg-primary border border-secondary"
        textLabel="Become a Member & Save More."
        actionLink={{ label: "Join Now", url: "/signup" }}
        isVisible={!isLoggedIn}
      />
    </>
  );
};

export default Home;
