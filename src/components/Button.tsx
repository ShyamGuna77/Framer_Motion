import { motion } from "motion/react"

const Button = () => {
  return (
    <motion.div className="flex justify-center items-center h-screen bg-black">
        <motion.button className="text-xl bg-neutral-200 p-4 rounded-2xl">
            Click Me
        </motion.button>
    </motion.div>
  )
}

export default Button