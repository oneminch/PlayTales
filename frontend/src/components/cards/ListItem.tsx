import { Icon } from "@iconify/react";
import { Button, Image, cn } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { useWishlistContext } from "@/context/wishlist-context";
import type { Product } from "@/types";
import ProductPriceText from "../ProductPriceText";

const ListItem = ({ product }: { product: Product }) => {
  const { getProductWishlistStatus, toggleProductWishlistStatus } =
    useWishlistContext();
  const { isProductWishlisted, wishlistAction } = getProductWishlistStatus(
    product.id
  );

  const handleToggleWishlist = () => {
    toggleProductWishlistStatus(product.id);
  };

  return (
    <div className={cn("relative rounded-xl", !isProductWishlisted && "group")}>
      <Link
        href={`/products/${product.id}`}
        className="p-1 pb-2 rounded-xl flex flex-col gap-y-1 items-start no-underline text-foreground"
      >
        <Image
          width={200}
          height={250}
          className="max-w-full min-h-full mx-auto rounded-xl shadow opacity-100"
          alt={`Poster Image for "${product.title}"`}
          src={product.poster}
          classNames={{
            img: "flex items-center justify-center text-center"
          }}
        />
        <p className="font-bold text-sm text-left">{product.title}</p>
        <ProductPriceText price={product.price} discount={product.discount} />
      </Link>
      <Button
        isIconOnly
        className={cn(
          "flex items-center justify-center text-xl absolute top-3 right-3 rounded-full w-8 h-8 transition origin-center duration-150 z-20 text-foreground bg-primary border border-secondary",
          !isProductWishlisted &&
            "sm:invisible sm:scale-85 sm:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100"
        )}
        onPress={handleToggleWishlist}
        aria-label={wishlistAction}
        title={wishlistAction}
        size="sm"
      >
        {isProductWishlisted ? (
          <Icon icon="heroicons:heart-20-solid" className="text-focus" />
        ) : (
          <Icon icon="heroicons:heart" className="text-current" />
        )}
      </Button>
    </div>
  );
};

export default ListItem;
