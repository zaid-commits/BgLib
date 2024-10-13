import React from 'react';
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";

const ButtonsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Buttons</h1>
        <p className="text-gray-600">Clickable elements for actions and navigation.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Default Button</h2>
        <div className="flex space-x-4">
          <Button>Default Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button>Default Button</Button>
<Button variant="outline">Outline Button</Button>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <div className="flex items-center space-x-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        />
      </div>
    </div>
  );
};

export default ButtonsPage;
