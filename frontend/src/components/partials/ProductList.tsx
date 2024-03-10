import ListItem from "@/components/cards/ListItem";
import Filter from "@/components/Filter";
import type { Product } from "@/types";
import Pagination from "@/components/partials/Pagination";
import Placeholder from "../Placeholder";

const ProductList = ({
  data,
  isError,
  isLoading
}: {
  data: any;
  isError: boolean;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col items-start gap-y-4" id="browse">
      <div className="flex flex-col sm:flex-row items-center w-full gap-y-4 sm:gap-y-0 sm:gap-x-4">
        <Filter
          label="Genre"
          options={[
            { label: "Action", value: "action" },
            { label: "Adventure", value: "adventure" },
            { label: "Puzzle", value: "puzzle" },
            { label: "RPG", value: "rpg" },
            { label: "Shooter", value: "shooter" }
          ]}
        />
        <Filter
          label="Sort"
          options={[
            { label: "Title: A-Z", value: "title-asc" },
            { label: "Title: Z-A", value: "title-desc" },
            { label: "Price: Low to High", value: "price-asc" },
            { label: "Price: High to Low", value: "price-desc" }
          ]}
        />
      </div>
      <article className="w-full min-h-96">
        <Placeholder
          showIf={isLoading}
          primaryText="Loading Products..."
          icon="heroicons:arrow-path-20-solid"
        />
        <Placeholder
          showIf={isError}
          primaryText="An Error Occurred Getting Products."
          secondaryText="Reload the Page to Try Again."
          icon="heroicons:exclamation-triangle-20-solid"
        />
        {data.products && (
          <>
            <Placeholder
              showIf={!isLoading && data.products.length === 0}
              primaryText="No Products Found."
              secondaryText="Reset Filters and Try Again."
              icon="heroicons:inbox-20-solid"
            />
            {data.products && data.products.length > 0 && (
              <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {data.products.map((product: Product) => (
                  <li className="w-full mb-2" key={product.title}>
                    <ListItem product={product} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </article>
      {<Pagination total={data.count} />}
    </div>
  );
};

export default ProductList;
