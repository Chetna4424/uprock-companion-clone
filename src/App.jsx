import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stars from "./components/Stars";
import Features from "./components/Features";
import BackgroundBubbles from "./components/BackgroundBubbles";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <BackgroundBubbles /> {/* full-background bubbles */}
      <Stars />
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
