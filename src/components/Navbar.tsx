import { useState, useEffect } from 'react';
import { Twitter, Github, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#" className="text-2xl font-bold text-black">
                            Bg<span className="text-blue-600">Lib</span>
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
                        {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Explore
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Docs
                        </a> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Resources</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Documentation</DropdownMenuItem>
                                <DropdownMenuItem>Tutorials</DropdownMenuItem>
                                <DropdownMenuItem> <a href="https://community.impic.tech">Community</a></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <a href="https://x.com/zaid_suii" target='_blank' className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="https://github.com/zaid-commits" target='_blank' className="text-gray-400 hover:text-gray-500" aria-label="Github">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Explore</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Docs</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Resources</a>
                    </div>
                </div>
            )}
        </nav>
    );
};