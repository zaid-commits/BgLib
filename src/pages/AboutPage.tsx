import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">About BgLib</h1>
      <p className="text-lg mb-4">
        BgLib is an open-source library of beautiful backgrounds and components for web developers and designers.
      </p>
      <p className="text-lg mb-4">
        Our mission is to provide high-quality, customizable design elements that can be easily integrated into any project.
      </p>
      <p className="text-lg mb-4">
        Whether you're building a personal website, a corporate application, or anything in between, BgLib has the tools you need to create stunning visual experiences.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Wide variety of background patterns and gradients</li>
        <li>Customizable components for common UI elements</li>
        <li>Easy-to-use API for integrating backgrounds and components</li>
        <li>Regularly updated with new designs and features</li>
        <li>Open-source and free to use in any project</li>
      </ul>
    </div>
  );
};

export default AboutPage;