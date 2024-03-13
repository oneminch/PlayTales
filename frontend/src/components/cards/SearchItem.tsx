import { Image } from "@nextui-org/react";
import type { Product } from "@/types";
import ProductPriceText from "../ProductPriceText";

const SearchItem = ({ product }: { product: Product }) => {
  return (
    <div className="min-h-12 rounded-lg flex gap-x-2 items-start py-1">
      <Image
        width={48}
        height={64}
        className="w-12 h-full rounded-md shadow object-cover opacity-100"
        alt={`Poster Image for "${product.title}"`}
        src={product.poster}
        classNames={{
          img: "flex items-center justify-center text-center text-xs"
        }}
      />
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-sm text-left">{product.title}</p>
        <ProductPriceText
          className="text-xs"
          price={product.price}
          discount={product.discount}
        />
      </div>
    </div>
  );
};

export default SearchItem;
