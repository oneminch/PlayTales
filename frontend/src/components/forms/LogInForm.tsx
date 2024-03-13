import { toast } from "sonner";
import useValidate from "@/hooks/use-validate";
import useMutate from "@/hooks/use-mutate";
import { Icon } from "@iconify/react";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { useAuthContext } from "@/context/auth-context";
import { useQueryClient } from "@tanstack/react-query";

const LogInForm = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutate("/auth/login", queryClient);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [logInFormInput, setLogInFormInput] = useState({
    email: "",
    password: ""
  });

  const { logIn } = useAuthContext();

  const { isInvalid: isEmailInvalid, errorMessage: invalidEmailMessage } =
    useValidate(logInFormInput.email, "email");
  const { isInvalid: isPasswordInvalid } = useValidate(
    logInFormInput.password,
    "password"
  );

  const toggleVisibility = () =>
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailInvalid && !isPasswordInvalid) {
      mutateAsync({
        email: logInFormInput.email,
        password: logInFormInput.password
      })
        .then((data) => {
          logIn();
          setLogInFormInput({
            email: "",
            password: ""
          });
          toast.success(data.message);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogInFormInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleLogIn} className="w-full py-8 space-y-10">
      <Input
        classNames={{
          input: "text-base"
        }}
        labelPlacement="outside"
        type="email"
        label="Email"
        placeholder="Enter your email"
        isInvalid={isEmailInvalid}
        errorMessage={invalidEmailMessage}
        name="email"
        value={logInFormInput.email}
        onChange={handleInputChange}
      />
      <div className="space-y-2">
        <Input
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={logInFormInput.password}
          onChange={handleInputChange}
          endContent={
            <button
              className="focus:outline-none text-primary-foreground"
              type="button"
              onClick={toggleVisibility}
            >
              {isPasswordVisible ? (
                <Icon icon="heroicons:eye-slash-20-solid" />
              ) : (
                <Icon icon="heroicons:eye-20-solid" />
              )}
            </button>
          }
        />
        <p>
          <Link href="#" className="text-xs text-focus">
            Forgot Your Password?
          </Link>
        </p>
      </div>
      <Button
        type="submit"
        className="rounded-lg text-background bg-foreground"
      >
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
