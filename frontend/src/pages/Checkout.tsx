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
import { useCartContext } from "@/context/cart-context";
import { useUserContext, userOrderMutationKey } from "@/context/user-context";
import PaymentForm from "@/components/forms/PaymentForm";
import AddressForm from "@/components/forms/AddressForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsMutating } from "@tanstack/react-query";

const PaymentOptionIcon = ({ icon }: { icon: string }) => {
  return (
    <span className="w-12 h-8 p-1 text-xs border border-secondary rounded-lg inline-flex items-center justify-center">
      <Icon icon={icon} />
    </span>
  );
};

const Checkout = () => {
  const { submitOrder } = useUserContext();
  const {
    products: cartProducts,
    count: cartCount,
    totalPrice: cartPrice,
    clearCart
  } = useCartContext();
  const isMutating = useIsMutating({ mutationKey: [userOrderMutationKey] });

  const [addressSaved, setAddressSaved] = useState(false);
  const [paymentSaved, setPaymentSaved] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.fromCart || cartCount === 0) {
      return navigate("/cart");
    }
  }, [cartCount, state]);

  const handleOrder = () => {
    submitOrder(Object.keys(cartProducts), clearCart);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Checkout</h1>
      <article className="w-full grid grid-cols-3 gap-x-4 grid-rows-[auto_1fr] grid-flow-dense pb-8">
        <div className="bg-primary border border-secondary rounded-lg p-8 w-full row-span-2 col-span-2 space-y-4">
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Billing Address</h3>
            <AddressForm
              addressSaved={addressSaved}
              setAddressSaved={setAddressSaved}
            />
          </section>
          <Divider />
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Payment</h3>
            <Accordion
              className="p-0 shadow-none"
              keepContentMounted={true}
              itemClasses={{
                title: "text-base font-semibold",
                content: "pb-6"
              }}
              disabledKeys={
                !addressSaved
                  ? ["Credit Card", "PayPal", "Apple Pay", "Google Pay"]
                  : []
              }
            >
              <AccordionItem
                startContent={<PaymentOptionIcon icon="logos:mastercard" />}
                key="Credit Card"
                aria-label="Credit Card"
                title="Credit Card"
              >
                <PaymentForm
                  paymentSaved={paymentSaved}
                  setPaymentSaved={setPaymentSaved}
                />
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
        <aside className="sticky top-4 space-y-4 row-span-1 *:bg-primary *:border *:border-secondary *:rounded-lg *:py-2 *:px-6">
          <Card className="shadow-none">
            <CardHeader className="px-0">
              <h3 className="text-xl font-semibold">Order Summary</h3>
            </CardHeader>
            <Divider />
            <CardBody className="px-0 space-y-4">
              <p className="flex items-center justify-between">
                <span>Full Price:</span>
                <span className="text-primary-foreground/85">
                  <s>${cartPrice.totalOriginalPrice}</s>
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span>Your Savings:</span>
                <span className="text-emerald-500 font-semibold">
                  -$
                  {(
                    cartPrice.totalOriginalPrice -
                    cartPrice.totalDiscountedPrice
                  ).toFixed(2)}
                </span>
              </p>
              <Divider />
              <p className="flex items-center justify-between">
                <span>Your Total:</span>
                <span className="font-semibold">
                  ${cartPrice.totalDiscountedPrice}
                </span>
              </p>
            </CardBody>
            <CardFooter className="px-0">
              <Button
                isDisabled={!addressSaved || !paymentSaved || isMutating > 0}
                onPress={handleOrder}
                spinnerPlacement="end"
                className="w-full font-medium bg-foreground text-background py-1 rounded-lg disabled:cursor-not-allowed"
              >
                Submit Order
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </article>
    </>
  );
};

export default Checkout;
