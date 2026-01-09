import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-8 py-6 z-20 relative"
    >
      <h1 className="text-xl font-bold text-orange-400">
        UpRock
      </h1>

      <div className="space-x-4 hidden md:flex">
        {["Web", "Frontend", "Backend"].map((item) => (
          <button
            key={item}
            className="px-4 py-2 rounded-md border border-orange-400 text-sm hover:bg-orange-400 hover:text-black transition"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
