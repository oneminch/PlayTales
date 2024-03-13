import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Hero from "@/components/partials/Hero";
import SignUpForm from "@/components/forms/SignUpForm";
import { useEffect } from "react";
import { useAuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/account");
    }
  }, [navigate, isLoggedIn]);

  return (
    <article className="w-full lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
      <section className="w-full md:w-1/2 space-y-4 mx-auto py-4 px-6 md:py-0 md:px-10 border-b border-b-secondary/50 md:border-b-0 md:border-r md:border-r-secondary/50">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <SignUpForm />
        <p>Or Sign Up with</p>
        <div className="flex items-center gap-2 *:w-full">
          <Button
            className="text-foreground bg-background border border-secondary rounded-lg"
            startContent={
              <Icon className="shrink-0" icon="logos:google-icon" />
            }
          >
            Google
          </Button>
          <Button
            className="text-foreground bg-background border border-secondary rounded-lg"
            startContent={<Icon className="shrink-0" icon="logos:facebook" />}
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
  );
};

export default SignUp;
