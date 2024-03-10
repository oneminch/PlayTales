import CartItem from "@/components/cards/CartItem";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  cn
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useCartContext } from "@/context/cart-context";
import { Product } from "@/types";
import Placeholder from "@/components/Placeholder";
import { Link } from "react-router-dom";

const Cart = () => {
  const { count, products, totalPrice } = useCartContext();

  return (
    <>
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <article
        className={cn(
          "w-full grid grid-cols-1 gap-4 grid-rows-[auto_1fr] grid-flow-dense pb-8",
          count ? "lg:grid-cols-3" : "lg:grid-cols-1"
        )}
      >
        <ul className="flex flex-col row-span-1 col-span-full lg:col-span-2 bg-primary border border-secondary rounded-xl py-2 px-8">
          <Placeholder
            showIf={count === 0}
            primaryText="Your Cart is Empty."
            className="border-none min-h-72"
            actionLink={{ label: "Browse Games", url: "/" }}
            icon="heroicons:inbox-20-solid"
          />
          {Object.entries(products).map(
            ([productId, product]: [productId: string, product: Product]) => (
              <li
                className="border-b border-secondary/75 last:border-none"
                key={productId}
              >
                <CartItem product={product} />
              </li>
            )
          )}
        </ul>
        <aside
          className={cn(
            "lg:sticky lg:top-4 w-full space-y-4 row-span-3 *:bg-primary *:border *:border-secondary *:rounded-xl *:py-2 *:px-6",
            !count && "hidden"
          )}
        >
          <Card className="shadow-none">
            <CardHeader className="px-0">
              <h3 className="text-xl font-semibold">Cart Summary</h3>
            </CardHeader>
            <Divider />
            <CardBody className="px-0 space-y-4">
              <p className="flex items-center justify-between">
                <span>Full Price:</span>
                <span className="text-primary-foreground/85">
                  <s>${totalPrice.totalOriginalPrice}</s>
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span>Your Savings:</span>
                <span className="text-emerald-500 font-semibold">
                  -$
                  {(
                    totalPrice.totalOriginalPrice -
                    totalPrice.totalDiscountedPrice
                  ).toFixed(2)}
                </span>
              </p>
              <Divider />
              <p className="flex items-center justify-between">
                <span>Your Total:</span>
                <span className="font-semibold">
                  ${totalPrice.totalDiscountedPrice}
                </span>
              </p>
            </CardBody>
            <CardFooter className="px-0">
              <Link
                className="w-full flex items-center justify-center gap-x-2 font-medium space-x-1 text-background bg-foreground py-2 rounded-xl"
                to="/checkout"
                state={{
                  fromCart: true
                }}
              >
                Checkout
                <Icon className="text-lg" icon="heroicons:shopping-cart" />
              </Link>
            </CardFooter>
          </Card>
          <Card className="shadow-none">
            <CardBody className="px-0 grid grid-cols-3">
              {[
                {
                  icon: "heroicons:lock-closed-20-solid",
                  label: "100% Secure"
                },
                {
                  icon: "heroicons:arrow-down-tray-20-solid",
                  label: "Instant Access"
                },
                {
                  icon: "heroicons:shield-check-20-solid",
                  label: "14-Day Money Back"
                }
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex flex-col gap-y-2 items-center"
                >
                  <Icon className="text-lg" icon={item.icon} />
                  <p className="text-center text-xs">{item.label}</p>
                </div>
              ))}
            </CardBody>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="px-0">
              <h3 className="text-xl font-semibold">Payment Methods</h3>
            </CardHeader>
            <CardBody className="px-0 grid grid-cols-4">
              {[
                "logos:mastercard",
                "logos:paypal",
                "logos:apple-pay",
                "logos:google-pay"
              ].map((icon) => (
                <p
                  key={icon}
                  className="flex justify-center items-center text-lg"
                >
                  <Icon icon={icon} />
                </p>
              ))}
            </CardBody>
          </Card>
        </aside>
      </article>
    </>
  );
};

export default Cart;
