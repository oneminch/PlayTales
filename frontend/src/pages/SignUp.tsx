import { Button, Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import Hero from "@/components/partials/Hero";

const SignUp = () => {
  return (
    <div>
      <article className="w-full lg:w-4/5 mx-auto grid grid-rows-2 grid-cols-none md:grid-rows-none md:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4 py-10">
        <section className="space-y-4 p-10 bg-white border border-gray-200 rounded-xl">
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
          <div className="flex items-center gap-x-4">
            <Button startContent={<Icon icon="simple-icons:google" />}>
              Google
            </Button>
            <Button startContent={<Icon icon="simple-icons:twitter" />}>
              Twitter
            </Button>
            <Button startContent={<Icon icon="simple-icons:facebook" />}>
              Facebook
            </Button>
          </div>
        </section>
        <Hero
          className="p-4 md:p-12"
          textLabel="Already Have an Account?"
          actionLink={{ label: "Log In", url: "/login" }}
        />
      </article>
    </div>
  );
};

export default SignUp;
