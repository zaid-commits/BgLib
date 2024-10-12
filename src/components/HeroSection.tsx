import { Button } from "@/components/ui/button"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Navbar */}
     <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
          Background Library Crafted Just for You!
        </h1>
        <p className="text-gray-600 max-w-2xl mb-10">
          Ready-to-use, simply copy and paste into your next project. All snippets
          crafted with Tailwind CSS and Vanilla CSS for easy integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="default" className="bg-black text-white hover:bg-gray-800">
            Go to GitHub
          </Button>
          <Button variant="outline" className="text-black border-black hover:bg-gray-100">
            Reset background
          </Button>
        </div>
      </main>
    </div>
  )
}