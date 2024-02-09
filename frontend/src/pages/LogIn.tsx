import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Hero from "@/components/partials/Hero";

const LogIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div className=" bg-white border border-gray-200 rounded-xl py-4 md:py-10">
      <article className="w-full lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
        <section className="w-full md:w-1/2 space-y-4 mx-auto py-6 px-10 md:py-0 border-b border-b-gray-200/50 md:border-b-0 md:border-r md:border-r-gray-200/50">
          <h1 className="text-3xl font-bold">Log In</h1>
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
          <p>Or sign in with</p>
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
          textLabel="Don't Have an Account?"
          actionLink={{ label: "Sign Up", url: "/signup" }}
        />
      </article>
    </div>
  );
};

export default LogIn;
