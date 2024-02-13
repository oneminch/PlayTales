import { Button, Input, Link } from "@nextui-org/react";

const PaymentForm = () => {
  return (
    <form className="w-full py-6 space-y-10">
      <div className="flex gap-x-2">
        <Input
          isRequired
          labelPlacement="outside"
          type="text"
          label="First Name"
          placeholder="Jane"
        />
        <Input
          isRequired
          labelPlacement="outside"
          type="text"
          label="Last Name"
          placeholder="Doe"
        />
      </div>
      <Input
        isRequired
        labelPlacement="outside"
        type="email"
        label="Email"
        placeholder="hello@example.com"
      />
      <Input
        isRequired
        labelPlacement="outside"
        type="password"
        label="Password"
        placeholder="Create your password"
      />
      <Input
        isRequired
        labelPlacement="outside"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
      />
      <div className="space-y-4">
        <p className="text-xs text-gray-500">
          By signing up or creating an account, you agree to our{" "}
          <Link className="text-xs" href="/terms-of-service">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-xs" href="/terms-of-service">
            Terms of Service
          </Link>
          .
        </p>
        <Button>Sign Up</Button>
      </div>
    </form>
  );
};

export default PaymentForm;
