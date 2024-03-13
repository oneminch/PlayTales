import { toast } from "sonner";
import useMutate from "@/hooks/use-mutate";
import useValidate from "@/hooks/use-validate";
import { Icon } from "@iconify/react";
import { Button, Input, Link } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutate("/auth/signup", queryClient);
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [signUpFormInput, setSignUpFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { isInvalid: isEmailInvalid, errorMessage: invalidEmailMessage } =
    useValidate(signUpFormInput.email, "email");
  const { isInvalid: isPasswordInvalid, errorMessage: invalidPasswordMessage } =
    useValidate(signUpFormInput.password, "password");

  const toggleVisibility = () =>
    setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !isEmailInvalid &&
      !isPasswordInvalid &&
      signUpFormInput.firstName.trim() &&
      signUpFormInput.lastName.trim()
    ) {
      mutateAsync({
        firstName: signUpFormInput.firstName,
        lastName: signUpFormInput.lastName,
        email: signUpFormInput.email,
        password: signUpFormInput.password
      })
        .then((data) => {
          setSignUpFormInput({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          });
          navigate("/login");
          toast.success(`${data.message} Please Log In.`);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpFormInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSignUp} className="w-full py-6 space-y-10">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <Input
          isRequired
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="First Name"
          placeholder="Jane"
          name="firstName"
          value={signUpFormInput.firstName}
          onChange={handleInput}
        />
        <Input
          isRequired
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="Last Name"
          placeholder="Doe"
          name="lastName"
          value={signUpFormInput.lastName}
          onChange={handleInput}
        />
      </div>
      <Input
        isRequired
        classNames={{
          input: "text-base"
        }}
        labelPlacement="outside"
        type="email"
        label="Email"
        placeholder="hello@example.com"
        isInvalid={isEmailInvalid}
        errorMessage={invalidEmailMessage}
        name="email"
        value={signUpFormInput.email}
        onChange={handleInput}
      />
      <Input
        isRequired
        labelPlacement="outside"
        type={isPasswordVisible ? "text" : "password"}
        label="Password"
        placeholder="Enter your password"
        isInvalid={isPasswordInvalid}
        errorMessage={invalidPasswordMessage}
        name="password"
        value={signUpFormInput.password}
        onChange={handleInput}
        description="Minimum 8 Characters: 1 Upper Case Letter, 1 Lower Case Letter, 1 Letter & 1 Special Character"
        classNames={{
          description: "text-primary-foreground",
          input: "text-base"
        }}
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
      <div className="space-y-4">
        <p className="text-xs text-primary-foreground">
          By signing up or creating an account, you agree to our{" "}
          <Link className="text-xs text-focus" href="/terms-of-service">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-xs text-focus" href="/terms-of-service">
            Terms of Service
          </Link>
          .
        </p>
        <Button
          type="submit"
          className="rounded-lg text-background bg-foreground"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
