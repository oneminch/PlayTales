import ProductList from "@/components/partials/ProductList";
import DefaultPageLayout from "@/layout/DefaultPageLayout";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { searchQuery } = useParams();
  const [queryParams, setQueryParams] = useState("");

  useEffect(() => {
    if (searchParams.toString().trim()) {
      setQueryParams(`?${searchParams.toString()}`);
    } else {
      setQueryParams("");
    }
  }, [searchParams]);

  const queryClient = useQueryClient();

  const { isFetching, isError, data } = useQuery<any>(
    {
      queryKey: [`/search/${searchQuery}${queryParams}`],
      placeholderData: { products: [], count: 0 },
      enabled: !!searchQuery
    },
    queryClient
  );

  return (
    <DefaultPageLayout title={`"${searchQuery}"`}>
      <h1 className="text-2xl font-bold">Search Results for "{searchQuery}"</h1>
      <ProductList data={data} isError={isError} isLoading={isFetching} />
    </DefaultPageLayout>
  );
};

export default Search;
