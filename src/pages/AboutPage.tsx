import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">About BgLib</CardTitle>
          <CardDescription>Empowering web design with innovative tools</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            BgLib is your creative companion in the world of web design. We offer a rich palette of backgrounds and components to transform your digital canvas into a masterpiece.
          </p>
          <Tabs defaultValue="features" className="w-full">
            <TabsList>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc list-inside text-sm space-y-2 mt-4">
                <li>Extensive library of cutting-edge background designs</li>
                <li>Modular and customizable UI components</li>
                <li>Regular updates with trending design patterns</li>
                <li>Open-source community-driven development</li>
                <li>Seamless integration with popular frameworks</li>
              </ul>
            </TabsContent>
            <TabsContent value="mission">
              <p className="mt-4">
                Our mission is to democratize web design by providing high-quality, customizable design elements that can be easily integrated into any project. We believe in empowering developers and designers to create stunning visual experiences without limitations.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>The Creator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://github.com/shadcn.png" alt="Developer" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-semibold">John Doe</h3>
                <p className="text-sm text-gray-600 mb-2">Visionary Full-stack Developer & Design Enthusiast</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                </div>
                <p className="text-sm mb-4">
                  With over a decade of experience in web development, John has been at the forefront of creating intuitive and beautiful user interfaces. His passion for design and functionality led to the creation of BgLib, aiming to bridge the gap between developers and designers.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <FaGithub className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <FaTwitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <FaLinkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>BgLib Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-500">Background Patterns</div>
              </div>
              <Separator />
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-500">UI Components</div>
              </div>
              <Separator />
              <div>
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-gray-500">GitHub Stars</div>
              </div>
              <Separator />
              <div>
                <div className="text-2xl font-bold">100k+</div>
                <div className="text-sm text-gray-500">Monthly Downloads</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Join the BgLib Revolution</h3>
        <p className="text-lg mb-4">
          Become part of a community that's redefining web aesthetics. Contribute your ideas, code, and creativity!
        </p>
        <Button size="lg">
          Explore BgLib on GitHub
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;