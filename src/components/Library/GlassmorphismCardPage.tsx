import React from "react";
import { GlassmorphismCard } from "./GlassmorphismCard.tsx";
import { CodeBlock } from "@/components/ui/code-block";
import { FiStar, FiHeart, FiAward } from "react-icons/fi";

const GlassmorphismCardPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Glassmorphism Card</h1>
      <p className="text-xl text-gray-600 mb-8">
        A modern, translucent card component with a glassmorphism effect.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassmorphismCard
            title="Premium Feature"
            content="Unlock advanced capabilities with our premium tier."
            icon={<FiStar />}
          />
          <GlassmorphismCard
            title="User Favorite"
            content="This feature is loved by 90% of our users."
            icon={<FiHeart />}
          />
          <GlassmorphismCard
            title="Award Winning"
            content="Recognized for excellence in user experience design."
            icon={<FiAward />}
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          language="tsx"
          code={`import React from 'react';
import { GlassmorphismCard } from './GlassmorphismCard';
import { FiStar } from 'react-icons/fi';

function MyComponent() {
  return (
    <GlassmorphismCard
      title="Premium Feature"
      content="Unlock advanced capabilities with our premium tier."
      icon={<FiStar />}
    />
  );
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Prop</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">title</td>
              <td className="border p-2">string</td>
              <td className="border p-2">The title of the card</td>
            </tr>
            <tr>
              <td className="border p-2">content</td>
              <td className="border p-2">string</td>
              <td className="border p-2">The main content of the card</td>
            </tr>
            <tr>
              <td className="border p-2">icon</td>
              <td className="border p-2">React.ReactNode</td>
              <td className="border p-2">An icon component to display</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p className="mb-4">
          The GlassmorphismCard component can be customized by modifying the CSS
          classes. You can adjust the background opacity, blur effect, and
          colors to match your design needs.
        </p>
        <CodeBlock
          language="tsx"
          code={`<GlassmorphismCard
  className="bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg"
  title="Custom Card"
  content="This card has a custom background color and blur effect."
  icon={<FiStar />}
/>`}
        />
      </div>
    </div>
  );
};

export default GlassmorphismCardPage;
