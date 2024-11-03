import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { BackgroundCard } from "@/components/BackgroundCard";
import { AcceptCookies } from "@/components/AcceptCookies";
import '../App.css';
import { Footer } from "@/components/Footer";
import toast, { Toaster } from 'react-hot-toast';

const gradients = [
  {
    title: "Blue Arch",
    code: `background: radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%);`,
    gradient: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
    isDark: true,
  },
  {
    title: "Midnight Oasis",
    code: `background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);`,
    gradient: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
    isDark: true,
  },
  {
    title: "Cosmic Swirl",
    code: `background: radial-gradient(circle at 50% 50%, #8a2be2 0%, #4b0082 50%, #000000 100%);`,
    gradient: "radial-gradient(circle at 50% 50%, #8a2be2 0%, #4b0082 50%, #000000 100%)",
    isDark: true,
  },
  {
    title: "Radial Grayscale",
    code: `background: radial-gradient(circle, #ffffff 0%, #000000 100%);`,
    gradient: "radial-gradient(circle, #ffffff 0%, #000000 100%)",
    isDark: false,
  },
  {
    title: "Dreamy Radial Sunset",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.5), rgba(255, 255, 255, 0)), #1F2937;`,
    gradient: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.5), rgba(255, 255, 255, 0)), #1F2937",
    isDark: true,
  },
  {
    title: "Wavy Lines",
    code: `background-color: #ffffff;
background-image: repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 10px, #ffffff 10px, #ffffff 20px);`,
    gradient: `repeating-linear-gradient(45deg,  #f5f5f5,  #f5f5f5 10px,  #ffffff 10px,  #ffffff 20px)`,
    isDark: false,
  },
  {
    title: "Monochrome Fade",
    code: `background: linear-gradient(to bottom, #ffffff 0%, #000000 100%);`,
    gradient: "linear-gradient(to bottom, #ffffff 0%, #000000 100%)",
    isDark: false,
  },
  {
    title: "Cool Blue Glow",
    code: `background: radial-gradient(ellipse 80% 80% at 50% -10%, rgba(85, 135, 185, 0.5), rgba(0, 0, 0, 0)), #101010;`,
    gradient: "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(85, 135, 185, 0.5), rgba(0, 0, 0, 0)), #101010",
    isDark: true,
  },
  {
    title: "Sunset Glow",
    code: `background: radial-gradient(ellipse 90% 90% at 50% -30%, rgba(255, 168, 76, 0.3), rgba(0, 0, 0, 0)), #111;`,
    gradient: "radial-gradient(ellipse 90% 90% at 50% -30%, rgba(255, 168, 76, 0.3), rgba(0, 0, 0, 0)), #111",
    isDark: true,
  },
  {
    title: "Soft Pink & Violet",
    code: `background: radial-gradient(ellipse 85% 85% at 50% -15%, rgba(198, 120, 185, 0.2), rgba(0, 0, 0, 0)), #0f0f0f;`,
    gradient: "radial-gradient(ellipse 85% 85% at 50% -15%, rgba(198, 120, 185, 0.2), rgba(0, 0, 0, 0)), #0f0f0f",
    isDark: true,
  },
  {
    title: "Black & Gold Shimmer",
    code: `background: radial-gradient(ellipse 70% 70% at 50% 0%, rgba(245, 203, 92, 0.25), rgba(0, 0, 0, 0)), #000;`,
    gradient: "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(245, 203, 92, 0.25), rgba(0, 0, 0, 0)), #000",
    isDark: true,
  },
  {
    title: "Deep Ocean Teal",
    code: `background: radial-gradient(circle at 50% 50%, #007f7f 0%, #003f3f 100%);`,
    gradient: "radial-gradient(circle at 50% 50%, #007f7f 0%, #003f3f 100%)",
    isDark: true,
  },
  {
    title: "Charcoal Grid",
    code: `background-color: #1b1b1b;
background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); 
background-size: 16px 16px;`,
    gradient: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
    isDark: true,
  },
];

export default function HomePage() {
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const handleTryGradient = (gradient: string, isDark: boolean) => {
    setBackgroundGradient(gradient);
    setIsDarkBackground(isDark);
    toast.success('Background applied successfully!', {
      position: 'top-center',
      duration: 2000,
    });
  };

  const handleResetBackground = () => {
    setBackgroundGradient("");
    setIsDarkBackground(false);
    toast.success('Background reset successfully!', {
      position: 'top-center',
      duration: 2000,
    });
  };

  useEffect(() => {
    document.body.style.color = isDarkBackground ? '#e0e0e0' : 'initial';
    return () => {
      document.body.style.color = 'initial';
    };
  }, [isDarkBackground]);

  return (
    <div
      className="hero-section min-h-screen flex flex-col transition-all duration-300"
      style={{ background: backgroundGradient }}
    >
      <div
        className={`flex-grow ${backgroundGradient ? "bg-opacity-0" : "bg-white"}`}
      >
        <main className={isDarkBackground ? 'text-[#e0e0e0]' : ''}>
          <HeroSection onResetBackground={handleResetBackground} />
          <section className="py-12 px-6">
            <div className="flex justify-center items-center mb-10">
              <h2 className="text-4xl font-bold">Explore Backgrounds</h2>
            </div>
            <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
              {gradients.map((grad, index) => (
                <BackgroundCard
                  key={index}
                  title={grad.title}
                  code={grad.code}
                  gradient={grad.gradient}
                  onTryGradient={() => handleTryGradient(grad.gradient, grad.isDark)}
                />
              ))}
            </div>
            <div className="py-10">
              <Footer />
            </div>
          </section>
        </main>
      </div>
      <AcceptCookies />
      <Toaster />
    </div>
  );
}