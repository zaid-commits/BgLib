import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { CardContent } from "./ui/card";
import { Copy, Check } from 'lucide-react';
import gsap from 'gsap';
import '../index.css';

interface HeroSectionProps {
  onResetBackground: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResetBackground }) => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, disdisduration: 1 });
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install bg-lib');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 text-center relative">
      <a href="https://www.producthunt.com/posts/bglib?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bglib" target="_blank" className="absolute top-5 left-4">
        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=571509&theme=dark" alt="BgLib - Background library for your next product! | Product Hunt" style={{ width: '220px', height: '48px' }} width="220" height="48" />
      </a>
      <h1 className="text-4xl sm:text-5xl md:text-6xl mt-14 font-bold mb-6 max-w-4xl mx-auto">
  Background Library <span className="custom-underline">Crafted</span> Just for You!
</h1>

      <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
        Open source background library for your next project. Just copy the CSS code and paste it in your project. It's that <span className="text-blue-500">simple!</span>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button variant="default" className="bg-black text-white hover:bg-gray-800">
          <a href="https://github.com/zaid-commits/bgLib">Star on Github ⭐</a>
        </Button>
        <Button
          variant="outline"
          className="text-black border-black hover:bg-gray-100"
          onClick={onResetBackground}
        >
          Reset background
        </Button>
      </div>
      <Card className="max-w-md mx-auto bg-white shadow-lg">
        <CardContent className="flex items-center p-4">
          <div className="flex-grow mr-2 bg-gray-100 rounded-md p-2 text-left font-mono text-sm font-bold">
            npm install bg-lib
          </div>
          <Button onClick={handleCopy} variant="outline" size="icon">
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};