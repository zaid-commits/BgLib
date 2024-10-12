import { Twitter, Github } from 'lucide-react'

export const Navbar = () => (
  <nav className="flex justify-between items-center p-6 border-b border-gray-200">
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">New snippets ⚡</span>
      <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-300">Read more →</a>
    </div>
    <div className="flex items-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
        <Github size={20} />
      </a>
    </div>
  </nav>
)