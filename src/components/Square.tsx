import { motion } from "motion/react";

const Square = () => {
  return (
    <motion.div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="text-xl w-24 h-24 bg-gary-400"
        animate={{
          backgroundColor: "gray",
          scale: 2,
         
        }}
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut", repeat: Infinity }}
        whileHover={{
          scale: 4,
        }}
        initial={{
          backgroundColor: "blue",
        }}
      >
      
      </motion.div>
    </motion.div>
  );
}

export default Square