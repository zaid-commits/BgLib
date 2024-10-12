import { Button } from "@/components/ui/button"

export const HeroSection = () => (
  <section className="py-20 px-4 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl mt-14 font-bold mb-6 max-w-4xl mx-auto">
      Background Library Crafted Just for You!
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
      Ready-to-use, simply copy and paste into your next project. All snippets
      crafted with Tailwind CSS and Vanilla CSS for easy integration.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="default" className="bg-black text-white hover:bg-gray-800">
        Go to GitHub
      </Button>
      <Button variant="outline" className="text-black border-black hover:bg-gray-100">
        Reset background
      </Button>
    </div>
  </section>
)