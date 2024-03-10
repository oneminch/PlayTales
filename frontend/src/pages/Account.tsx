import { Avatar, Card, CardBody } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import OrderItem from "@/components/cards/OrderItem";
import Placeholder from "@/components/Placeholder";
import { useUserContext, userInfoQueryKey } from "@/context/user-context";
import { useIsFetching } from "@tanstack/react-query";

const Account = () => {
  const isLoading = useIsFetching({
    queryKey: [userInfoQueryKey]
  });

  const { userInfo, userOrders } = useUserContext();

  return (
    <>
      <h1 className="text-3xl font-bold">Your Account</h1>
      <article className="w-full grid grid-cols-1 lg:grid-cols-3 grid-flow-dense gap-4 grid-rows-[auto_1fr] pb-8">
        <section className="w-full col-span-full lg:col-span-2 space-y-3">
          <h3 className="text-xl font-bold">Purchases</h3>
          <div className="px-8 py-4 bg-primary border border-secondary rounded-xl space-y-4">
            {!isLoading && userOrders ? (
              <>
                <Placeholder
                  showIf={Object.keys(userOrders).length === 0}
                  className="border-none"
                  primaryText="You Have No Purchases."
                  icon="heroicons:shopping-bag-20-solid"
                />
                <ul className="flex flex-col">
                  {Object.entries(userOrders).map(
                    ([orderId, orderDetails]: [
                      orderId: string,
                      orderDetails: Record<string, any>
                    ]) => {
                      return (
                        <li
                          className="border-b border-secondary/75 last:border-none"
                          key={orderId}
                        >
                          <OrderItem orderDetails={orderDetails} />
                        </li>
                      );
                    }
                  )}
                </ul>
              </>
            ) : (
              <Placeholder
                showIf={true}
                className="border-none"
                primaryText="Loading..."
                icon="heroicons:arrow-path-20-solid"
              />
            )}
          </div>
        </section>
        <aside className="lg:sticky lg:top-4 w-full space-y-4 row-start-1 col-start-1 lg:row-start-auto lg:col-start-auto row-span-3 lg:pt-10 *:bg-primary *:border *:border-secondary *:rounded-xl *:py-2 *:px-6">
          {!isLoading && userInfo && (
            <Card className="shadow-none">
              <CardBody className="px-0 py-6 space-y-2 flex flex-col items-center">
                <Avatar
                  className="w-20 h-20"
                  icon={
                    <Icon className="text-5xl" icon="fluent-emoji:joystick" />
                  }
                  classNames={{
                    base: "bg-gradient-to-b from-focus to-focus/75"
                  }}
                />
                <p className="text-lg font-semibold">{`${userInfo.firstname} ${userInfo.lastname}`}</p>
                <p className="text-primary-foreground">{userInfo.email}</p>
              </CardBody>
            </Card>
          )}
        </aside>
      </article>
    </>
  );
};

export default Account;
