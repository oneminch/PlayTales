import { Button, Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import Hero from "@/components/partials/Hero";

const SignUp = () => {
  return (
    <div className=" bg-white border border-gray-200 rounded-xl py-4 md:py-10">
      <article className="w-full lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
        <section className="w-full md:w-1/2 space-y-4 mx-auto py-6 px-10 md:py-0 border-b border-b-gray-200/50 md:border-b-0 md:border-r md:border-r-gray-200/50">
          <h1 className="text-3xl font-bold">Sign Up</h1>
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
          <p>Or sign up with</p>
          <div className="flex items-center gap-2 *:w-full">
            <Button
              startContent={
                <Icon className="shrink-0" icon="simple-icons:google" />
              }
            >
              Google
            </Button>
            <Button
              startContent={
                <Icon className="shrink-0" icon="simple-icons:facebook" />
              }
            >
              Facebook
            </Button>
          </div>
        </section>
        <Hero
          className="p-8 md:p-2 md:w-1/2"
          textLabel="Already Have an Account?"
          actionLink={{ label: "Log In", url: "/login" }}
        />
      </article>
    </div>
  );
};

export default SignUp;
