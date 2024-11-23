import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Copy, Check, Heart } from 'lucide-react';
import toast from 'react-hot-toast';

interface BackgroundCardProps {
  title: string;
  code: string;
  gradient: string;
  onTryGradient: (gradient: string) => void;
}

export const BackgroundCard: React.FC<BackgroundCardProps> = ({ title, code, gradient, onTryGradient }) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const storageKey = `favorite-${title}`;

  useEffect(() => {
    const isFavorited = localStorage.getItem(storageKey) === 'true';
    setLiked(isFavorited);
  }, [storageKey]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLike = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus);
    localStorage.setItem(storageKey, JSON.stringify(newLikedStatus)); 
    toast.success(newLikedStatus ? 'Added to favorites!' : 'Removed from favorites!');
  };

  return (
    <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-105" onClick={() => onTryGradient(gradient)}>
      <div className="h-40" style={{ background: gradient }}></div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">{code}</pre>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
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
        <Button onClick={toggleLike} variant="outline" className="flex-1 ml-2 justify-center">
          <Heart size={16} className={`mr-2 ${liked ? 'text-red-500' : ''}`} />
          {liked ? 'Favorited' : 'Favorite'}
        </Button>
      </CardFooter>
    </Card>
  );
};
