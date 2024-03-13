import { Icon } from "@iconify/react";
import { Button, Chip, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import type { Product } from "@/types";
import ProductPriceText from "../ProductPriceText";
import { useWishlistContext } from "@/context/wishlist-context";
import { useCartContext } from "@/context/cart-context";

const CartItem = ({ product }: { product: Product }) => {
  const { getProductWishlistStatus, toggleProductWishlistStatus } =
    useWishlistContext();
  const { isProductWishlisted, wishlistAction } = getProductWishlistStatus(
    product.id
  );

  const handleToggleWishlist = () => {
    toggleProductWishlistStatus(product.id);
  };

  const { toggleProductCartStatus } = useCartContext();

  const handleToggleCart = () => {
    toggleProductCartStatus(product);
  };

  return (
    <div className="min-h-36 rounded-lg flex gap-x-6 items-start py-4">
      <Image
        width={96}
        height={128}
        className="w-24 h-full rounded-lg shadow opacity-100"
        alt={`Poster Image for "${product.title}"`}
        src={product.poster}
        classNames={{
          wrapper: "hidden sm:block",
          img: "flex items-center justify-center text-center"
        }}
      />
      <div className="flex flex-col gap-y-2">
        <Link
          href={`/products/${product.id}`}
          className="font-bold text-sm text-left text-foreground"
        >
          {product.title}
        </Link>
        <div className="flex items-center gap-x-2">
          <Chip
            className="px-2 rounded-full bg-secondary"
            size="sm"
            classNames={{
              content: "px-1.5"
            }}
          >
            {product.platform}
          </Chip>
        </div>
        <ProductPriceText price={product.price} discount={product.discount} />
      </div>
      <div className="flex gap-x-4 ml-auto">
        <Button
          isIconOnly
          className="flex items-center justify-center text-lg bg-primary border border-secondary rounded-full w-8 h-8 text-primary-foreground"
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
        <Button
          isIconOnly
          className="flex items-center justify-center text-lg bg-primary border border-secondary rounded-full w-8 h-8 text-primary-foreground"
          aria-label="Remove from Cart"
          size="sm"
          onPress={handleToggleCart}
        >
          <Icon icon="heroicons:trash-20-solid" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
