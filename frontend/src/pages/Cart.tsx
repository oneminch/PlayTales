import GameItemAltCard from "@/components/GameItemAltCard";
import { GameItem, CartPriceInterface } from "@/types";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

const Cart = () => {
  const [games, setGames] = useState<GameItem[]>([]);
  const [cartPrice, setCartPrice] = useState<CartPriceInterface>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/data.json");
      const jsonData = await data.json();

      const someData: GameItem[] = jsonData.slice(0, 3);
      setGames(someData);
    };
    getData();
  }, []);

  useEffect(() => {
    setCartPrice(
      games.reduce(
        (acc: CartPriceInterface, item: GameItem) => {
          acc.price += item.price;
          acc.discount += item.discount;

          return acc;
        },
        { price: 0, discount: 0 }
      )
    );
  }, [games]);

  return (
    <div className="space-y-4 pt-6 pb-4">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      <article className="w-full grid grid-cols-3 gap-x-4 grid-rows-[auto_1fr] grid-flow-dense rounded-lg pb-8">
        <ul className="flex flex-col row-span-1 col-span-2 bg-white border border-gray-200 rounded-xl py-2 px-8">
          {games!.map((game) => (
            <li
              className="h-36 border-b border-gray-200/75 last:border-none"
              key={game.title}
            >
              <GameItemAltCard game={game} />
            </li>
          ))}
        </ul>
        <aside className="space-y-4 row-span-3 *:bg-white *:border *:border-gray-200 *:rounded-xl *:py-2 *:px-6">
          <Card className="shadow-none">
            <CardHeader className="px-0">
              <h3 className="text-xl font-semibold">Cart Summary</h3>
            </CardHeader>
            <Divider />
            <CardBody className="px-0 space-y-4">
              <p className="flex items-center justify-between">
                <span>Full Price:</span>
                <span className="text-gray-500">
                  <s>${cartPrice && cartPrice!.price}</s>
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span>Your Savings:</span>
                <span className="text-emerald-500 font-semibold">
                  -$
                  {cartPrice &&
                    ((cartPrice!.discount / 100) * cartPrice!.price).toFixed(2)}
                </span>
              </p>
              <Divider />
              <p className="flex items-center justify-between">
                <span>Your Total:</span>
                <span className="font-semibold">
                  $
                  {cartPrice &&
                    (
                      (1 - cartPrice!.discount / 100) *
                      cartPrice!.price
                    ).toFixed(2)}
                </span>
              </p>
            </CardBody>
            <CardFooter className="px-0">
              <Button
                className="w-full flex items-center gap-x-2 font-medium space-x-1 bg-gray-900 text-gray-50 py-1 rounded-lg"
                endContent={
                  <Icon className="text-lg" icon="heroicons:shopping-cart" />
                }
              >
                Checkout
              </Button>
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
    </div>
  );
};

export default Cart;
