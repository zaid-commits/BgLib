import React from 'react';
import { ArrowRight, Github, Heart, Trash2, Settings, Mail, Code, Copy} from "lucide-react";
import { Link } from 'react-router-dom';

const ButtonsPage: React.FC = () => {
  const buttonVariants = [
    { variant: "Primary", icon: <Mail />, label: "Email", className: "bg-blue-500 text-white hover:bg-blue-600" },
    { variant: "Secondary", icon: <Heart />, label: "Like", className: "bg-gray-200 text-gray-800 hover:bg-gray-300" },
    { variant: "Outline", icon: <Github />, label: "GitHub", className: "border-2 border-gray-300 text-gray-800 hover:bg-gray-100" },
    { variant: "Ghost", icon: <Trash2 />, label: "Delete", className: "text-gray-600 hover:bg-gray-100" },
    { variant: "Gradient", icon: <Settings />, label: "Settings", className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600" },
    { variant: "Icon", icon: <ArrowRight />, label: "", className: "bg-green-500 text-white hover:bg-green-600 rounded-full p-2" },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">Button Components</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore our collection of beautifully crafted button components. Each button is designed to enhance your user interface and provide a seamless experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {buttonVariants.map((button, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{button.variant}</h2>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {button.variant}
                  </span>
                </div>
                <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-lg p-6 mb-6">
                  <button className={`px-4 py-2 rounded-md flex items-center justify-center transition-all duration-200 ${button.className}`}>
                    {button.icon && React.cloneElement(button.icon, { className: button.label ? "mr-2 h-4 w-4" : "h-5 w-5" })}
                    {button.label}
                  </button>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button className="text-sm text-gray-600 flex items-center hover:text-blue-500 transition-colors duration-200">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </button>
                  <Link to={`/components/buttons/${button.variant.toLowerCase()}`} className="flex items-center text-sm text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <Code className="mr-2 h-4 w-4" />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Usage</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our buttons are designed to be flexible and easy to use. Here's a quick example of how to implement a button in your project:
          </p>
          <pre className="bg-gray-50 p-6 rounded-xl overflow-x-auto border border-gray-200">
            <code className="text-sm text-gray-800">
              {`<button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center">
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</button>`}
            </code>
          </pre>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Customization</h2>
          <p className="text-lg text-gray-600 mb-4">
            You can easily customize these buttons by modifying the className prop. Here are some examples:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li>Change colors: Use Tailwind's color classes like `bg-red-500` or `text-green-600`</li>
            <li>Adjust size: Modify padding with classes like `px-6 py-3` for larger buttons</li>
            <li>Add effects: Include `hover:` classes for interactive effects</li>
            <li>Change shape: Use `rounded-full` for circular buttons or `rounded-none` for square edges</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
