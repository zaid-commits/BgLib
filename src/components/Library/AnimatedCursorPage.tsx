import React from 'react';
import { AnimatedCursor } from './AnimatedCursor';
import { CodeBlock } from "@/components/ui/code-block";
import '../../App.css'
const AnimatedCursorPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Animated Cursor</h1>
      <p className="text-xl text-gray-600 mb-8">
        An interactive cursor that responds to user movement and hover states.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Demo</h2>
        <div className="bg-gray-100 p-8 rounded-lg">
          <AnimatedCursor />
          <p className="mt-4">Move your cursor around and hover over the text above to see the effect!</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          language="tsx"
          code={`import React from 'react';
import { AnimatedCursor } from './AnimatedCursor';

function MyComponent() {
  return (
    <div>
      <AnimatedCursor />
      {/* Your other components */}
    </div>
  );
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <p>
          The AnimatedCursor component uses Framer Motion to create a custom cursor that follows the user's mouse movements. 
          It also includes an interactive effect when hovering over text elements. To use this in your project, you'll need to:
        </p>
        <ol className="list-decimal list-inside mt-4">
          <li>Install Framer Motion: <code>npm install framer-motion</code></li>
          <li>Add the AnimatedCursor component to your project</li>
          <li>Include the AnimatedCursor in your main App or layout component</li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          You can customize the appearance and behavior of the cursor by modifying the variants in the AnimatedCursor component. 
          Adjust colors, sizes, and animations to match your design needs.
        </p>
      </div>
    </div>
  );
};

export default AnimatedCursorPage;