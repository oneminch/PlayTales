import { Icon } from "@iconify/react";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

const PaymentForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((isVisible) => !isVisible);

  return (
    <form className="w-full py-8 space-y-10">
      <Input
        isRequired
        labelPlacement="outside"
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <div className="space-y-2">
        <Input
          isRequired
          labelPlacement="outside"
          type={isVisible ? "text" : "password"}
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <Icon icon="heroicons:eye-slash-20-solid" />
              ) : (
                <Icon icon="heroicons:eye-20-solid" />
              )}
            </button>
          }
        />
        <p>
          <Link href="#" className="text-xs">
            Forgot Your Password?
          </Link>
        </p>
      </div>
      <Button>Log In</Button>
    </form>
  );
};

export default PaymentForm;
