import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { title: "Pixel Perfect UI", desc: "Carefully crafted layouts with attention to spacing, color, and typography.", emoji: "🎨", color: "text-pink-300" },
    { title: "Smooth Animations", desc: "Framer Motion powered transitions for modern UI experience.", emoji: "✨", color: "text-yellow-300" },
    { title: "Responsive Design", desc: "Optimized for mobile, tablet, and desktop screens.", emoji: "📱", color: "text-blue-300" },
  ];

  return (
  <div className="px-6 py-16">
  <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
    Why This Project?
  </h2>

  {/* Flex row with space between boxes */}
  <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:justify-start gap-8">
    {features.map((f, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        className="border-4 border-white rounded-xl p-8 bg-white/10 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full md:w-[28%]"
      >
        <h3 className={`text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 ${f.color}`}>
          <span>{f.emoji}</span> {f.title}
        </h3>
        <p className="text-white text-xl md:text-2xl leading-relaxed break-words">
          {f.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>


  );
}
