import React from 'react';
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowRight, Github } from "lucide-react";

const ButtonsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Button</h1>
      <p className="text-xl text-gray-600 mb-8">
        Buttons allow users to take actions, and make choices, with a single tap.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <CodeBlock
            language="tsx"
            code={`import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Button>Click me</Button>
  )
}`}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Default</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <CodeBlock
                language="tsx"
                code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <CodeBlock
                language="tsx"
                code={`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">With Icon</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <CodeBlock
                language="tsx"
                code={`<Button>
  <Github className="mr-2 h-4 w-4" /> GitHub
</Button>
<Button variant="outline">
  Next <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Prop</th>
                <th className="text-left py-2">Type</th>
                <th className="text-left py-2">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">variant</td>
                <td className="py-2 text-gray-600">
                  'default' | 'secondary' | 'outline' | 'ghost'
                </td>
                <td className="py-2 text-gray-600">'default'</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">size</td>
                <td className="py-2 text-gray-600">
                  'default' | 'sm' | 'lg'
                </td>
                <td className="py-2 text-gray-600">'default'</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default ButtonsPage;