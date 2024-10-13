import React from 'react';
import { CodeBlock } from "@/components/ui/code-block";
import { ParallaxScroll } from './ParallaxScroll';

const ParallaxScrollPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Parallax Scroll</h1>
      <p className="text-xl text-gray-600 mb-8">
        A component that creates a smooth parallax scrolling effect with a background image.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <ParallaxScroll backgroundImage="/parallax.jpg">
          <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">Parallax Section 1</h2>
          </div>
        </ParallaxScroll>
        <ParallaxScroll backgroundImage="/parallax.jpg">
          <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">Parallax Section 2</h2>
          </div>
        </ParallaxScroll>
        <ParallaxScroll backgroundImage="/parallax.jpg">
          <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white">Parallax Section 3</h2>
          </div>
        </ParallaxScroll>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          language="tsx"
          code={`import { ParallaxScroll } from './ParallaxScroll';

function MyComponent() {
  return (
    <ParallaxScroll backgroundImage="/parallax.jpg">
      <div className="h-screen flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold text-white">Your Content Here</h2>
      </div>
    </ParallaxScroll>
  );
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Prop</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Default</th>
              <th className="border p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">children</td>
              <td className="border p-2">ReactNode</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Content to be displayed in the parallax section</td>
            </tr>
            <tr>
              <td className="border p-2">backgroundImage</td>
              <td className="border p-2">string</td>
              <td className="border p-2">-</td>
              <td className="border p-2">URL of the background image</td>
            </tr>
            <tr>
              <td className="border p-2">strength</td>
              <td className="border p-2">number</td>
              <td className="border p-2">100</td>
              <td className="border p-2">Strength of the parallax effect (higher values create more movement)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParallaxScrollPage;