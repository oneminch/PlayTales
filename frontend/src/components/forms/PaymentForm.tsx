import useValidate from "@/hooks/use-validate";
import { Icon } from "@iconify/react";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { useState } from "react";

const PaymentForm = ({
  paymentSaved,
  setPaymentSaved
}: {
  paymentSaved: boolean;
  setPaymentSaved: React.Dispatch<boolean>;
}) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "123412341234",
    expDate: "12/30",
    securityCode: "123"
  });

  const {
    isInvalid: isCardNumberInvalid,
    errorMessage: invalidCardNumberMessage
  } = useValidate(cardDetails.cardNumber, "card number");

  const { isInvalid: isExpDateInvalid, errorMessage: invalidExpDateMessage } =
    useValidate(cardDetails.expDate, "expiration date");

  const {
    isInvalid: isSecurityCodeInvalid,
    errorMessage: invalidSecurityCodeMessage
  } = useValidate(cardDetails.securityCode, "security code");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputState: string
  ) => {
    setCardDetails((cardDetails) => ({
      ...cardDetails,
      [inputState]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSaved(true);
  };

  return !paymentSaved ? (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6">
      <Input
        isRequired
        type="text"
        label="Card Number"
        placeholder="0000-0000-0000-0000"
        classNames={{
          input: "text-base"
        }}
        labelPlacement="outside"
        value={cardDetails.cardNumber}
        onChange={(e) => handleInputChange(e, "cardNumber")}
        isInvalid={isCardNumberInvalid}
        errorMessage={invalidCardNumberMessage}
        endContent={
          <Icon
            className="text-secondary"
            icon="heroicons:credit-card-20-solid"
          />
        }
      />
      <div className="flex gap-x-2">
        <Input
          isRequired
          type="text"
          label="Expiration Date"
          placeholder="MM/YY"
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          value={cardDetails.expDate}
          onChange={(e) => handleInputChange(e, "expDate")}
          isInvalid={isExpDateInvalid}
          errorMessage={invalidExpDateMessage}
          endContent={
            <Icon
              className="text-secondary"
              icon="heroicons:calendar-20-solid"
            />
          }
        />
        <Input
          isRequired
          type="text"
          label="Security Code"
          placeholder="CVC"
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          value={cardDetails.securityCode}
          onChange={(e) => handleInputChange(e, "securityCode")}
          isInvalid={isSecurityCodeInvalid}
          errorMessage={invalidSecurityCodeMessage}
          endContent={
            <Tooltip placement="top-end" content="That 3-Digit Code">
              <Icon
                className="text-secondary"
                icon="heroicons:question-mark-circle-20-solid"
              />
            </Tooltip>
          }
        />
      </div>
      <Button
        type="submit"
        className="w-56 font-medium text-foreground bg-background px-4 py-1 rounded-xl"
      >
        Save Payment Information
      </Button>
    </form>
  ) : (
    <div className="w-full flex flex-col gap-y-2">
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Card Number:{" "}
        </strong>
        Ends in "{cardDetails.cardNumber.slice(-4)}"
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Expiration Date:{" "}
        </strong>
        {cardDetails.expDate}
      </p>

      <Button
        className="w-56 mt-4 font-medium text-foreground bg-background px-4 py-1 rounded-xl"
        onPress={() => setPaymentSaved(false)}
      >
        Edit Payment Information
      </Button>
    </div>
  );
};

export default PaymentForm;
