
import { motion } from "motion/react";

const Button = () => {
  return (
    <motion.div className="flex justify-center items-center h-screen bg-black">
      <motion.button
        className="text-xl bg-neutral-200 p-4 rounded-2xl"
        animate={{
          backgroundColor: "red",
          scale: 2,
          rotate: 720,
        }}
        transition={{ duration: 0.8,delay:1,ease:"easeInOut",repeat:4 }}
        whileHover={{
          scale: 4,
        }}

        initial ={{
            backgroundColor:"blue",

        }}
      >
        Click Me
      </motion.button>
    </motion.div>
  );
};

export default Button;
