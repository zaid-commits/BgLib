import { Button } from "@/components/ui/button";
import { Twitter, Github } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 bg-opacity-50 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">New snippets ⚡</span>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Read more →</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <Github size={20} />
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl">
                    <span className="bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
                        Background Library Crafted
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-500 to-gray-700 text-transparent bg-clip-text">
                        Just for You!
                    </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mb-10">
                    Ready-to-use, simply copy and paste into your next project. All snippets
                    crafted with Tailwind CSS and Vanilla CSS for easy integration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="bg-white text-black hover:bg-gray-200 transition-transform transform hover:scale-105">
                        Go to GitHub
                    </Button>
                    <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800 transition-transform transform hover:scale-105">
                        Reset background
                    </Button>
                </div>
            </main>
        </div>
    );
}