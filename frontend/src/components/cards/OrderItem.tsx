import { Image } from "@nextui-org/react";

const OrderItem = ({ orderDetails }: { orderDetails: Record<string, any> }) => {
  return (
    orderDetails && (
      <div className="min-h-36 rounded-lg flex flex-col md:flex-row gap-4 items-start md:items-center py-4">
        <div className="flex gap-4 items-start">
          <Image
            width={96}
            height={128}
            className="w-24 h-full rounded-lg shadow opacity-100"
            alt={`Poster Image for "${orderDetails.products[0].title}"`}
            src={orderDetails.products[0].poster}
            classNames={{
              wrapper: "hidden sm:block",
              img: "flex items-center justify-center text-center"
            }}
          />
          <div className="flex flex-col gap-y-2">
            <p className="font-bold text-left">
              {orderDetails.products.length > 1
                ? `${orderDetails.products[0].title} & ${
                    orderDetails.products.length - 1
                  } More ${
                    orderDetails.products.length - 1 > 1
                      ? "Products"
                      : "Product"
                  }`
                : orderDetails.products[0].title}
            </p>
            <p className="text-sm">
              <span className="text-primary-foreground/85 font-bold">
                Date:{" "}
              </span>
              <span
                title={new Date(orderDetails.createdAt).toLocaleString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                  }
                )}
              >
                {new Date(orderDetails.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}
              </span>
            </p>
            <p className="text-sm">
              <span className="text-primary-foreground/85 font-bold">
                Total:{" "}
              </span>
              <span>${orderDetails.totalPrice}</span>
            </p>
            <p className="text-sm">
              <span className="text-primary-foreground/85 font-bold">
                Order ID:{" "}
              </span>
              <span>{orderDetails.id.slice(-8).toUpperCase()}</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderItem;
