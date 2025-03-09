import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { BackgroundCard } from "@/components/BackgroundCard";
import { AcceptCookies } from "@/components/AcceptCookies";
import '../App.css';
import { Footer } from "@/components/Footer";
import toast, { Toaster } from 'react-hot-toast';
import gradients from "@/data/gradients";

export default function HomePage() {
  // Filter gradients based on search query
  const [searchQuery, setSearchQuery] = useState("");
  const filteredGradients = gradients.filter(
    (grad) =>
      grad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      grad.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [backgroundGradient, setBackgroundGradient] = useState("radial-gradient(ellipse 85% 85% at 50% -25%, rgba(255, 85, 85, 0.3), rgba(0, 0, 0, 0)), #111");
  const [isDarkBackground, setIsDarkBackground] = useState(true); 

  const handleTryGradient = (gradient: string, isDark: boolean) => {
    setBackgroundGradient(gradient);
    setIsDarkBackground(isDark);
    toast.success('Background applied successfully!', {
      position: 'top-center',
      duration: 2000,
    });
  };

  const handleResetBackground = () => {
    setBackgroundGradient("radial-gradient(ellipse 85% 85% at 50% -25%, rgba(255, 85, 85, 0.3), rgba(0, 0, 0, 0)), #111"); 
    setIsDarkBackground(true); 
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
      <div className={`flex-grow ${backgroundGradient ? "bg-opacity-0" : "bg-white"}`}>
        <main className={isDarkBackground ? 'text-[#e0e0e0]' : ''}>
          <HeroSection onResetBackground={handleResetBackground} />
          <section className="py-12 px-6">
            <div className="flex justify-center items-center mb-10">
              <h2 className="text-4xl font-bold">Explore Backgrounds</h2>
            </div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {
              filteredGradients.length > 0 ?   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
                {filteredGradients?.map((grad, index) => (
                <BackgroundCard
                  key={index}
                  title={grad.title}
                  code={grad.code}
                  gradient={grad.gradient}
                  onTryGradient={() => handleTryGradient(grad.gradient, grad.isDark)}
                />
              )) }
              </div> : 
              <div className="flex relative items-center justify-center my-10 ">
              No background found matching your search <span className="pl-1 text-blue-500"> "{searchQuery}"</span>
            </div>}
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
