import { Button, Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import { useState } from "react";
import Hero from "@/components/partials/Hero";

const LogIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div>
      <article className="w-full lg:w-4/5 mx-auto grid grid-rows-2 grid-cols-none md:grid-rows-none md:grid-cols-2 gap-y-4 lg:gap-y-0 lg:gap-x-4 py-10">
        <section className="space-y-4 p-10 bg-white border border-gray-200 rounded-xl">
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
              <p className="text-xs">
                <Link href="#">Forgot Your Password?</Link>
              </p>
            </div>
            <Button>Log In</Button>
          </form>
          <p>Or sign in with</p>
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
          textLabel="Don't Have an Account?"
          actionLink={{ label: "Sign Up", url: "/signup" }}
        />
      </article>
    </div>
  );
};

export default LogIn;
