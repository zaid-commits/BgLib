import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ComponentHome: React.FC = () => {
  const cards = [
    { title: "Buttons", description: "Various button styles and variants" },
    { title: "Forms", description: "Form elements and validation" },
    { title: "Cards", description: "Card layouts and designs" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Component Library</h1>
      <p className="text-muted-foreground">Explore our collection of reusable components.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="hover:bg-accent transition-colors">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ArrowRight className="h-4 w-4" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComponentHome;
