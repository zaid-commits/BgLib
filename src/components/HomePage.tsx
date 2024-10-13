import { useState } from "react";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { SearchBar } from "./SearchBar";
import { BackgroundCard } from "./BackgroundCard";
import { Footer } from "./Footer";

const gradients = [
  {
    title: "Blue Arch",
    code: `background: radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%);`,
    gradient: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
  },

  {
    title: "Sunset Blaze",
    code: `background: linear-gradient(to right, #FF416C 0%, #FF4B2B 100%);`,
    gradient: "linear-gradient(to right, #FF416C 0%, #FF4B2B 100%)",
  },
  {
    title: "Ocean Breeze",
    code: `background: linear-gradient(to right, #4CA1AF 0%, #C4E0E5 100%);`,
    gradient: "linear-gradient(to right, #4CA1AF 0%, #C4E0E5 100%)",
  },
  {
    title: "Lush Meadow",
    code: `background: linear-gradient(to right, #56AB2F 0%, #A8E063 100%);`,
    gradient: "linear-gradient(to right, #56AB2F 0%, #A8E063 100%)",
  },
  {
    title: "Purple Haze",
    code: `background: linear-gradient(to right, #8E2DE2 0%, #4A00E0 100%);`,
    gradient: "linear-gradient(to right, #8E2DE2 0%, #4A00E0 100%)",
  },
  {
    title: "Golden Hour",
    code: `background: linear-gradient(to right, #FDC830 0%, #F37335 100%);`,
    gradient: "linear-gradient(to right, #FDC830 0%, #F37335 100%)",
  },
  {
    title: "Frosty Mint",
    code: `background: linear-gradient(to right, #00B4DB 0%, #0083B0 100%);`,
    gradient: "linear-gradient(to right, #00B4DB 0%, #0083B0 100%)",
  },
  {
    title: "Cherry Blossom",
    code: `background: linear-gradient(to right, #FFC3A0 0%, #FFAFBD 100%);`,
    gradient: "linear-gradient(to right, #FFC3A0 0%, #FFAFBD 100%)",
  },
  {
    title: "Twilight Sky",
    code: `background: linear-gradient(to right, #0F2027 0%, #203A43 50%, #2C5364 100%);`,
    gradient:
      "linear-gradient(to right, #0F2027 0%, #203A43 50%, #2C5364 100%)",
  },
  {
    title: "Autumn Leaves",
    code: `background: linear-gradient(to right, #DAD299 0%, #B0DAB9 100%);`,
    gradient: "linear-gradient(to right, #DAD299 0%, #B0DAB9 100%)",
  },
];

export default function HomePage() {
  const [backgroundGradient, setBackgroundGradient] = useState("");

  const handleTryGradient = (gradient: string) => {
    setBackgroundGradient(gradient);
  };

  return (
    <div
      className="min-h-screen flex flex-col transition-all duration-300"
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
          <HeroSection />
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
