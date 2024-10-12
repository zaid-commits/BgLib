import { Button } from "@/components/ui/button"

export const HeroSection = () => (
  <section className="py-20 px-4 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-14 font-bold mb-6 max-w-4xl mx-auto">
      Background Library Crafted Just for You!
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Ready-to-use, open source background gradients for your next project. Just copy the CSS code and paste it in your project. It's that simple! 
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button variant="default" className="bg-black text-white hover:bg-gray-800">
      Star on Github ⭐ 
    </Button>
      <Button variant="outline" className="text-black border-black hover:bg-gray-100">
        Reset background
      </Button>
    </div>
  </section>
)