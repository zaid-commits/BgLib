import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AcceptCookies: React.FC = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    // Check if the website is actually using cookies
    const cookies = document.cookie;
    if (cookies) {
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      if (!cookiesAccepted) {
        setShowCookiePopup(true);
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookiePopup(false);
  };

  if (!showCookiePopup) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Cookie Notice</CardTitle>
          <CardDescription>This website uses cookies.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>We use cookies to store your preferences and improve your experience. By continuing to use this site, you agree to our use of cookies.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setShowCookiePopup(false)}>Decline</Button>
          <Button onClick={handleAcceptCookies}>Accept</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
