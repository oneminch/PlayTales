import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Hero from "@/components/partials/Hero";
import LogInForm from "@/components/forms/LogInForm";
import { useEffect } from "react";
import { useAuthContext } from "@/context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogIn = () => {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state?.fromProtectedPage) {
      toast.error("Please Log In First.");
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(state?.redirectTo || "/");
    }
  }, [navigate, isLoggedIn]);

  return (
    <article className="w-full lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
      <section className="w-full md:w-1/2 space-y-4 mx-auto py-4 px-6 md:py-0 md:px-10 border-b border-b-secondary/50 md:border-b-0 md:border-r md:border-r-secondary/50">
        <h1 className="text-3xl font-bold">Log In</h1>
        <LogInForm />
        <p>Or sign in with</p>
        <div className="flex items-center gap-2 *:w-full">
          <Button
            className="text-foreground bg-background border border-secondary rounded-xl"
            startContent={
              <Icon className="shrink-0" icon="logos:google-icon" />
            }
          >
            Google
          </Button>
          <Button
            className="text-foreground bg-background border border-secondary rounded-xl"
            startContent={<Icon className="shrink-0" icon="logos:facebook" />}
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
  );
};

export default LogIn;
