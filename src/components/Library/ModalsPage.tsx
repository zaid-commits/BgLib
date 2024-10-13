import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Modal Title</h2>
        <p className="text-gray-300 mb-6">This is the content of the modal. You can put any information here.</p>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

const ModalsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Modals</h1>
      <p className="text-gray-400 text-lg">Customizable modal components for displaying important information or actions.</p>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-purple-300">Basic Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <CodeBlock
          language="tsx"
          code={`const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Modal Title</h2>
        <p className="text-gray-300 mb-6">This is the content of the modal.</p>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};`}
        />
      </div>
    </div>
  );
};

export default ModalsPage;
