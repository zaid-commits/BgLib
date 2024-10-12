import { Twitter, Github } from 'lucide-react'
function Navbar() {
  return (
    <div>
       <nav className="flex justify-between items-center p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">New snippets ⚡</span>
          <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors duration-300">Read more →</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://x.com/zaid_suii" className="text-gray-600 hover:text-black transition-colors duration-300">
            <Twitter size={20} />
          </a>
          <a href="https://x.com/zaid-commits" className="text-gray-600 hover:text-black transition-colors duration-300">
            <Github size={20} />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
