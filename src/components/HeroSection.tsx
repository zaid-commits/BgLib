import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onResetBackground: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResetBackground }) => (
  <section className="py-20 px-4 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-14 font-bold mb-6 max-w-4xl mx-auto">
      Background Library Crafted Just for You!
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Open source background library inspired by <a href="https://bg.ibelick.com" className="text-blue-500">bg.ibelick,</a> for your next project. Just copy the CSS code and paste it in your project. It's that simple!
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  </section>
)