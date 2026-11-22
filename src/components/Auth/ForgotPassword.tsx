import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mx-auto px-2 text-sm text-center text-primary hover:text-secondary transition-colors cursor-pointer"
      onClick={() => router.push("#")}
    >
      Forgot your password?
    </button>
  );
};

export default ForgotPassword;
