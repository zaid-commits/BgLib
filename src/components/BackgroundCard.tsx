import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

interface BackgroundCardProps {
  title: string
  code: string
  gradient: string
  onTryGradient: (gradient: string) => void
}

export const BackgroundCard: React.FC<BackgroundCardProps> = ({ title, code, gradient, onTryGradient }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast.success('Code copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden cursor-pointer" onClick={() => onTryGradient(gradient)}>
      <div className="h-40" style={{ background: gradient }}></div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">{code}</pre>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between">
        <Button onClick={handleCopy} variant="outline" className="flex-1 mr-2 justify-center">
          {copied ? (
            <>
              <Check size={16} className="mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-2" />
              Copy code
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}