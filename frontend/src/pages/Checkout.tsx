import { GameItem, CartPriceInterface } from "@/types";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Accordion,
  AccordionItem
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import PaymentForm from "@/components/forms/PaymentForm";
import AddressForm from "@/components/forms/AddressForm";

const PaymentOptionIcon = ({ icon }: { icon: string }) => {
  return (
    <span className="w-12 h-8 p-1 text-xs border border-gray-200 rounded-lg inline-flex items-center justify-center">
      <Icon icon={icon} />
    </span>
  );
};

const Checkout = () => {
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
      <h1 className="text-3xl font-bold">Checkout</h1>
      <article className="w-full grid grid-cols-3 gap-x-4 grid-rows-[auto_1fr] grid-flow-dense pb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-8 w-full row-span-2 col-span-2 space-y-4">
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Billing Address</h3>
            <AddressForm />
          </section>
          <Divider />
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Payment</h3>
            <Accordion
              className="p-0 shadow-none"
              itemClasses={{
                title: "text-base font-semibold",
                content: "pb-6"
              }}
            >
              <AccordionItem
                startContent={<PaymentOptionIcon icon="logos:mastercard" />}
                key="Credit Card"
                aria-label="Credit Card"
                title="Credit Card"
              >
                <PaymentForm />
              </AccordionItem>
              <AccordionItem
                startContent={<PaymentOptionIcon icon="logos:paypal" />}
                key="PayPal"
                aria-label="PayPal"
                title="PayPal"
              >
                We are working on adding support for PayPal.
              </AccordionItem>
              <AccordionItem
                startContent={<PaymentOptionIcon icon="logos:apple-pay" />}
                key="Apple Pay"
                aria-label="Apple Pay"
                title="Apple Pay"
              >
                We are working on adding support for Apple Pay.
              </AccordionItem>
              <AccordionItem
                startContent={<PaymentOptionIcon icon="logos:google-pay" />}
                key="Google Pay"
                aria-label="Google Pay"
                title="Google Pay"
              >
                We are working on adding support for Google Pay.
              </AccordionItem>
            </Accordion>
          </section>
        </div>
        <aside className="sticky top-4 space-y-4 row-span-1 *:bg-white *:border *:border-gray-200 *:rounded-xl *:py-2 *:px-6">
          <Card className="shadow-none">
            <CardHeader className="px-0">
              <h3 className="text-xl font-semibold">Order Summary</h3>
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
                isDisabled
                isLoading
                spinnerPlacement="end"
                className="w-full font-medium bg-gray-900 text-gray-50 py-1 rounded-xl disabled:cursor-not-allowed"
              >
                Submit Order
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </article>
    </div>
  );
};

export default Checkout;
