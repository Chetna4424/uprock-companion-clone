import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-20"
    >
      <h1 className="text-5xl font-bold text-white">
        Welcome to UpRock 🚀
      </h1>
      <p className="mt-4 text-xl text-gray-300">
        Smooth animations and modern UI
      </p>
    </motion.div>
  );
}
