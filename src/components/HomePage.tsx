import { useState } from 'react'
import { Navbar } from './Navbar'
import { HeroSection } from './HeroSection'
import { SearchBar } from './SearchBar'
import { BackgroundCard } from './BackgroundCard'
import { Footer } from './Footer'

const gradients = [
  {
    title: "Simple Gradient",
    code: `background: linear-gradient(to right, #f6d365 0%, #fda085 100%);`,
    gradient: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"
  },
  {
    title: "Radial Gradient",
    code: `background: radial-gradient(circle, #f6d365 0%, #fda085 100%);`,
    gradient: "radial-gradient(circle, #f6d365 0%, #fda085 100%)"
  },
  {
    title: "Diagonal Gradient",
    code: `background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);`,
    gradient: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
  },
  {
    title: "Soft Blue Gradient",
    code: `background: linear-gradient(to right, #E0EAFC 0%, #CFDEF3 100%);`,
    gradient: "linear-gradient(to right, #E0EAFC 0%, #CFDEF3 100%)"
  },
  {
    title: "Sunset Gradient",
    code: `background: linear-gradient(to right, #FF512F 0%, #F09819 100%);`,
    gradient: "linear-gradient(to right, #FF512F 0%, #F09819 100%)"
  },
  {
    title: "Cool Mint Gradient",
    code: `background: linear-gradient(to right, #2AFADF 0%, #4C83FF 100%);`,
    gradient: "linear-gradient(to right, #2AFADF 0%, #4C83FF 100%)"
  },
]

export default function HomePage() {
  const [backgroundGradient, setBackgroundGradient] = useState('')

  const handleTryGradient = (gradient: string) => {
    setBackgroundGradient(gradient)
  }

  return (
    <div className="min-h-screen flex flex-col transition-all duration-300" style={{ background: backgroundGradient }}>
      <div className={`flex-grow ${backgroundGradient ? 'bg-white bg-opacity-90' : 'bg-white'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <section className="py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Backgrounds</h2>
            <SearchBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gradients.map((grad, index) => (
                <BackgroundCard
                  key={index}
                  title={grad.title}
                  code={grad.code}
                  gradient={grad.gradient}
                  onTryGradient={handleTryGradient}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}