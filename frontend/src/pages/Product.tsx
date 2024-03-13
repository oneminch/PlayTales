import { useParams } from "react-router-dom";
import { Button, Chip, CircularProgress, Image } from "@nextui-org/react";
import { SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import Carousel from "@/components/partials/Carousel";
import ProductPriceText from "@/components/ProductPriceText";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCartContext } from "@/context/cart-context";
import type { Product } from "@/types";
import { useWishlistContext } from "@/context/wishlist-context";
import Placeholder from "@/components/Placeholder";
import Layout from "@/layout/Layout";
import SearchForm from "@/components/forms/SearchForm";

const Product = () => {
  const { productId } = useParams();

  const { getProductWishlistStatus, toggleProductWishlistStatus } =
    useWishlistContext();
  const { isProductWishlisted, wishlistAction } = getProductWishlistStatus(
    productId!
  );

  const handleToggleWishlist = () => {
    toggleProductWishlistStatus(productId!);
  };

  const { toggleProductCartStatus, getProductCartStatus } = useCartContext();

  const handleToggleCart = (product: Product) => {
    toggleProductCartStatus(product);
  };

  const queryClient = useQueryClient();

  const { isFetching, isError, data } = useQuery<any>(
    {
      queryKey: [`/products/${productId}`],
      placeholderData: {},
      enabled: !!productId
    },
    queryClient
  );

  return (
    <Layout
      title={`${
        !isError && !isFetching && data.product
          ? `${data.product.title} (Game)`
          : ""
      }`}
      className="space-y-4"
    >
      <SearchForm className="block md:hidden" />

      <article className="flex flex-col gap-y-4 pb-8">
        <Placeholder
          showIf={isFetching || !data.product}
          primaryText="Loading Product..."
          icon="heroicons:arrow-path-20-solid"
        />
        <Placeholder
          showIf={isError}
          primaryText="An Error Occurred Getting Products."
          secondaryText="Reload the Page to Try Again."
          icon="heroicons:exclamation-triangle-20-solid"
        />
        {!isError && !isFetching && data.product && (
          <>
            <div className="flex flex-col-reverse md:flex-row items-start gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-4">
              <section className="w-full md:w-2/3 flex flex-col gap-y-4 border border-secondary bg-primary/25 rounded-lg">
                <Carousel>
                  {data.product.screenshots.map((image: string) => (
                    <SwiperSlide
                      key={image}
                      className="text-center flex justify-center items-center"
                    >
                      <Image
                        width={840}
                        height={475}
                        alt={`Screenshots for "${data.product.title}"`}
                        src={image}
                        className="max-w-full h-full rounded-none object-cover opacity-100"
                        classNames={{
                          img: "flex items-center justify-center text-center"
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Carousel>
              </section>
              <section className="w-full md:w-1/3 pt-4 pb-8 px-8 flex flex-col gap-y-12 border border-secondary bg-primary rounded-lg">
                <div className="flex flex-col gap-y-4">
                  <h1 className="text-3xl font-bold">{data.product.title}</h1>
                  <Chip
                    className="px-2 rounded-full bg-background"
                    size="sm"
                    classNames={{
                      content: "px-1.5"
                    }}
                    startContent={
                      <Icon
                        icon="heroicons:check-badge-20-solid"
                        className="text-emerald-500"
                      />
                    }
                  >
                    {data.product.ratings[0]} - BetaCritic
                  </Chip>
                  <Chip
                    className="px-2 rounded-full bg-background"
                    size="sm"
                    classNames={{
                      content: "px-1.5"
                    }}
                    startContent={
                      <Icon
                        icon={
                          data.product.platform
                            .toLowerCase()
                            .includes("playstation")
                            ? "simple-icons:playstation"
                            : "simple-icons:windows"
                        }
                        className="text-foreground"
                      />
                    }
                  >
                    {data.product.platform}
                  </Chip>
                  <ProductPriceText
                    price={data.product.price}
                    discount={data.product.discount}
                  />
                </div>
                <div className="space-y-4">
                  <Button
                    className="w-full flex items-center gap-x-2 font-medium space-x-1 bg-background text-foreground py-1 rounded-lg"
                    onPress={() => handleToggleCart(data.product)}
                    endContent={
                      <Icon
                        className="text-lg"
                        icon="heroicons:shopping-cart"
                      />
                    }
                  >
                    {getProductCartStatus(data.product.id)
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </Button>
                  <Button
                    className="w-full flex items-center gap-x-2 font-medium space-x-1 bg-foreground text-background py-1 rounded-lg"
                    onPress={handleToggleWishlist}
                    title={wishlistAction}
                    endContent={
                      isProductWishlisted ? (
                        <Icon
                          icon="heroicons:heart-20-solid"
                          className="text-focus text-lg"
                        />
                      ) : (
                        <Icon
                          icon="heroicons:heart"
                          className="text-current text-lg"
                        />
                      )
                    }
                  >
                    {wishlistAction}
                  </Button>
                </div>
              </section>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-x-0 gap-y-4 md:gap-y-0 md:gap-x-4 border border-secondary bg-primary rounded-lg">
              <section className="w-full md:w-2/3 p-8 space-y-4">
                <h2 className="text-xl font-bold">
                  About {data.product.title}
                </h2>
                <p>{data.product.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 py-10">
                  {["BetaCritic", "YouCritic", "GamerCritic"].map(
                    (label: string, index: number) => (
                      <div
                        key={label}
                        className="w-full last:col-span-full sm:last:col-span-1"
                      >
                        <CircularProgress
                          label={label}
                          aria-label={label}
                          size="lg"
                          value={data.product.ratings[index]}
                          color="default"
                          mx-auto
                          h-24
                          w-24
                          rounded-full
                          className="mx-auto"
                          classNames={{
                            svg: "w-24 h-24 drop-shadow-md",
                            indicator: "stroke-emerald-500",
                            track: "stroke-emerald-500/10",
                            value: "text-xl font-semibold text-foreground"
                          }}
                          strokeWidth={4}
                          showValueLabel={true}
                        />
                      </div>
                    )
                  )}
                </div>
              </section>
              <section className="w-full md:w-1/3 p-8 space-y-4">
                <h2 className="text-xl font-bold">Details</h2>
                <p>
                  <span className="text-primary-foreground/85 font-medium">
                    Platform:
                  </span>
                  <br />
                  <span>{data.product.platform}</span>
                </p>
                <p>
                  <span className="text-primary-foreground/85 font-medium">
                    Release Date:
                  </span>
                  <br />
                  <span>
                    {new Date(
                      data.product.releaseDate.replace(/-/g, "/")
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </p>
                <p>
                  <span className="text-primary-foreground/85 font-medium">
                    Developer:
                  </span>
                  <br />
                  <span>{data.product.developer}</span>
                </p>
                <p>
                  <span className="text-primary-foreground/85 font-medium">
                    Publisher:
                  </span>
                  <br />
                  <span>{data.product.publisher}</span>
                </p>
              </section>
            </div>
          </>
        )}
      </article>
    </Layout>
  );
};

export default Product;
