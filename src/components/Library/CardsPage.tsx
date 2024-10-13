import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CardsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cards</h1>
      <p className="text-muted-foreground">A collection of card components for various use cases.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>A simple card example</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card. You can put any information here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>A card with a footer and action button</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card includes a footer section with an action button.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardsPage;
