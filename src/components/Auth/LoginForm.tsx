"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { type FormEvent, useState } from "react";
import AuthMessage from "@/components/Auth/AuthMessage";
import PrimaryButton from "../UI/PrimaryButton";
import Checkbox from "./Checkbox";
import ForgotPassword from "./ForgotPassword";
import FormField from "./FormField";

const Login = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!response?.ok) {
      setError("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-6 w-full">
      {error.length > 0 && <AuthMessage>{error}</AuthMessage>}
      <FormField name="email" type="email" placeholder="Enter your email">
        Email Address
      </FormField>
      <FormField
        name="password"
        type="password"
        placeholder="Enter your password"
        isPassword={true}
      >
        Password
      </FormField>
      <Checkbox name="rememberMe">Remember me</Checkbox>
      <PrimaryButton className="py-3 w-full font-semibold">
        Sign In
      </PrimaryButton>
      <ForgotPassword />
    </form>
  );
};

export default Login;
