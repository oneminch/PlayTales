import { cn } from "@nextui-org/react";

const ProductPriceText = ({
  price,
  discount,
  className
}: {
  price: number;
  discount: number;
  className: string;
}) => {
  return (
    <p className={cn("w-full text-sm space-x-2", className)}>
      {discount > 0 ? (
        <>
          <span className="bg-focus/75 text-gray-800 rounded-full text-xs py-0.5 px-2">
            -{discount}%
          </span>
          <span className="text-primary-foreground/75">
            <s>${price}</s>
          </span>
          <span className="font-medium text-primary-foreground">
            ${((1 - discount / 100) * price).toFixed(2)}
          </span>
        </>
      ) : (
        <span className="font-medium text-primary-foreground">${price}</span>
      )}
    </p>
  );
};

ProductPriceText.defaultProps = {
  className: ""
};

export default ProductPriceText;
