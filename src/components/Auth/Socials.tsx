import { motion } from "framer-motion";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <motion.button
        initial={{ y: 0 }}
        whileHover={{
          y: -3,
          borderColor: "var(--primary)",
          transition: { type: "spring" },
        }}
        className="flex justify-center gap-3 sm:gap-2 py-3 w-full sm:w-1/3 bg-background rounded-xl border-1 border-transparent text-sm cursor-pointer"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        <Image src="/icons/google.svg" alt="" height="14" width="14" />
        Google
      </motion.button>
      <motion.button
        initial={{ y: 0 }}
        whileHover={{
          y: -3,
          borderColor: "var(--primary)",
          transition: { type: "spring" },
        }}
        className="flex justify-center gap-3 sm:gap-2 py-3 w-full sm:w-1/3 bg-background rounded-xl border-1 border-transparent text-sm cursor-pointer"
        onClick={() => signIn("facebook", { callbackUrl: "/dashboard" })}
      >
        <Image src="/icons/facebook.svg" alt="" height="18" width="18" />
        Facebook
      </motion.button>
      <motion.button
        initial={{ y: 0 }}
        whileHover={{
          y: -3,
          borderColor: "var(--primary)",
          transition: { type: "spring" },
        }}
        className="flex justify-center gap-3 sm:gap-2 py-3 w-full sm:w-1/3 bg-background rounded-xl border-1 border-transparent text-sm cursor-pointer"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        <Image src="/icons/github.svg" alt="" height="18" width="18" />
        GitHub
      </motion.button>
    </div>
  );
};

export default Socials;
