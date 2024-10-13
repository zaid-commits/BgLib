import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check } from 'lucide-react'
import gsap from 'gsap'

interface HeroSectionProps {
  onResetBackground: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResetBackground }) => {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
    }
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install bg-lib')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl mt-14 font-bold mb-6 max-w-4xl mx-auto">
        Background Library Crafted Just for You!
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Open source background library inspired by <a href="https://bg.ibelick.com" className="text-blue-500">bg.ibelick,</a> for your next project. Just copy the CSS code and paste it in your project. It's that simple!
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
      <Card className="max-w-md mx-auto">
        <CardContent className="flex items-center p-4">
          <div className="flex-grow mr-2 bg-gray-100 rounded-md p-2 text-left font-mono text-sm font-bold">
            npm install bg-lib
          </div>
          <Button onClick={handleCopy} variant="outline" size="icon">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}