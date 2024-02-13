import { Icon } from "@iconify/react";
import { Button, Input, Tooltip } from "@nextui-org/react";

const PaymentForm = () => {
  return (
    <form className="w-full flex flex-col gap-y-6">
      <Input
        isRequired
        type="text"
        label="Card Number"
        placeholder="0000-0000-0000-0000"
        labelPlacement="outside"
        endContent={
          <Icon
            className="text-gray-500"
            icon="heroicons:credit-card-20-solid"
          />
        }
      />
      <div className="flex gap-x-2">
        <Input
          isRequired
          type="text"
          label="Expiration Date"
          placeholder="MM/YYYY"
          labelPlacement="outside"
          endContent={
            <Icon
              className="text-gray-500"
              icon="heroicons:calendar-20-solid"
            />
          }
        />
        <Input
          isRequired
          type="text"
          label="Security Code"
          placeholder="CVC"
          labelPlacement="outside"
          endContent={
            <Tooltip placement="top-end" content="That 3-Digit Code">
              <Icon
                className="text-gray-500"
                icon="heroicons:question-mark-circle-20-solid"
              />
            </Tooltip>
          }
        />
      </div>
      <Button className="w-56 font-medium px-4 py-1 rounded-xl">
        Save Payment Information
      </Button>
    </form>
  );
};

export default PaymentForm;
