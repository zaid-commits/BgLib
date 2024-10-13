import React from 'react';
import { Button } from "@/components/ui/button";

const ButtonsPage: React.FC = () => {
  const buttonVariants = ["default", "secondary", "destructive", "outline", "ghost", "link"];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <p className="text-muted-foreground">A collection of button components with different styles and variants.</p>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant as any}>{variant}</Button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  );
};


export default ButtonsPage;
