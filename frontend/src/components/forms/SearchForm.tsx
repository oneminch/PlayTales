import type { Product } from "@/types";
import { Icon } from "@iconify/react";
import {
  Input,
  Listbox,
  ListboxItem,
  ListboxSection,
  cn
} from "@nextui-org/react";
import SearchItem from "../cards/SearchItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const SearchForm = ({ className }: { className: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const queryClient = useQueryClient();

  const { isFetching, isError, data } = useQuery<any>(
    {
      queryKey: [searchUrl],
      placeholderData: { products: [], count: 0 },
      enabled: !!searchUrl
    },
    queryClient
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery && searchQuery.trim().length > 1) {
      setSearchUrl(`/search/${encodeURIComponent(searchQuery)}`);
      setIsSearching(true);
    } else {
      setSearchUrl("");
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isSearching) {
      navigate(searchUrl);
      afterSearch();
    }
  };

  const afterSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  return (
    <section className={cn("w-full relative group", className)}>
      <form
        onSubmit={handleSubmit}
        className="w-full h-10 flex items-center text-lg"
      >
        <Input
          type="text"
          radius="md"
          placeholder="Search games..."
          className="w-full bg-primary rounded-lg"
          classNames={{
            input: "px-2 text-base",
            base: "h-full p-0 border border-secondary bg-primary",
            mainWrapper: "p-0",
            inputWrapper:
              "h-full p-1 bg-transparent shadow-none focus-within:!bg-transparent",
            innerWrapper: "p-0"
          }}
          startContent={
            <Icon
              className="ml-2 text-primary-foreground"
              icon="heroicons:magnifying-glass-20-solid"
            />
          }
          value={searchQuery}
          onChange={handleInput}
        />
      </form>
      {isSearching && (
        <div
          className={`w-full rounded-lg z-50 absolute top-full mt-1 shadow-lg left-0 bg-primary border border-secondary transition-all duration-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible translate-y-2 opacity-0 invisible`}
        >
          <Listbox
            shouldFocusWrap={true}
            aria-label="Search Suggestions"
            className="py-2 px-4"
            onAction={() => {
              afterSearch();
            }}
            disabledKeys={["loading", "error", "empty"]}
          >
            <ListboxSection showDivider={data && data.count > 0}>
              {isFetching && !isError && (
                <ListboxItem key="loading" className="rounded-lg text-center">
                  Loading Suggestions
                </ListboxItem>
              )}
              {isError && !isFetching && (
                <ListboxItem key="error" className="rounded-lg text-center">
                  Error Loading Suggestions
                </ListboxItem>
              )}
              {!isFetching && data.count === 0 && (
                <ListboxItem key="empty" className="rounded-lg text-center">
                  No Suggestions Found.
                </ListboxItem>
              )}
              {data.products &&
                data.products.slice(0, 2).map((suggestion: Product) => (
                  <ListboxItem
                    key={suggestion.id}
                    textValue={suggestion.title}
                    className="rounded-lg"
                    href={`/products/${suggestion.id}`}
                  >
                    <SearchItem product={suggestion} />
                  </ListboxItem>
                ))}
            </ListboxSection>
            <ListboxSection
              className={cn(
                "w-full",
                isSearching && data.count > 0 ? "block" : "hidden"
              )}
            >
              <ListboxItem
                className="text-center py-2 w-full h-full rounded-lg bg-foreground text-background"
                key="show-all-results"
                textValue="Show All Results"
                href={searchUrl && searchUrl}
              >
                Show All Results
              </ListboxItem>
            </ListboxSection>
          </Listbox>
        </div>
      )}
    </section>
  );
};

SearchForm.defaultProps = {
  className: ""
};

export default SearchForm;
