import { useState } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { SearchBar } from "./SearchBar";
import { BackgroundCard } from "./BackgroundCard";
import { Footer } from "./Footer";
import "../App.css";

const gradients = [
  {
    title: "Blue Arch",
    code: `background: radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%);`,
    gradient: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
  },
  {
    title: "Midnight Oasis",
    code: `background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);`,
    gradient: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
  },
  {
    title: "Cosmic Swirl",
    code: `background: radial-gradient(circle at 50% 50%, #8a2be2 0%, #4b0082 50%, #000000 100%);`,
    gradient:
      "radial-gradient(circle at 50% 50%, #8a2be2 0%, #4b0082 50%, #000000 100%)",
  },
  {
    title: "Radial Grayscale",
    code: `background: radial-gradient(circle, #ffffff 0%, #000000 100%);`,
    gradient: "radial-gradient(circle, #ffffff 0%, #000000 100%)",
  },
  {
    title: "Wavy Lines",
    code: `background-color: #ffffff;
background-image: repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 10px, #ffffff 10px, #ffffff 20px);`,
    gradient: `repeating-linear-gradient(45deg,  #f5f5f5,  #f5f5f5 10px,  #ffffff 10px,  #ffffff 20px)`,
  },
  {
    title: "Monochrome Fade",
    code: `background: linear-gradient(to bottom, #ffffff 0%, #000000 100%);`,
    gradient: "linear-gradient(to bottom, #ffffff 0%, #000000 100%)",
  },
];

export default function HomePage() {
  const [backgroundGradient, setBackgroundGradient] = useState("");

  const handleTryGradient = (gradient: string) => {
    setBackgroundGradient(gradient);
  };

  const handleResetBackground = () => {
    setBackgroundGradient("");
  };

  return (
    <div
      className="hero-section min-h-screen flex flex-col transition-all duration-300"
      style={{ background: backgroundGradient }}
    >
      {/* change the opacity to handle the color change  */}
      <div
        className={`flex-grow ${
          backgroundGradient ? "bg-white bg-opacity-0" : "bg-white"
        }`}
      >
        <Navbar />
        <main>
          <HeroSection onResetBackground={handleResetBackground} />
          <section className="py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore Backgrounds
            </h2>
            <SearchBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gradients.map((grad, index) => (
                <BackgroundCard
                  key={index}
                  title={grad.title}
                  code={grad.code}
                  gradient={grad.gradient}
                  onTryGradient={handleTryGradient}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
