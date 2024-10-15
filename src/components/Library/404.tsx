import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="w-24 h-24 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="animate-spin"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            className="text-gray-500"
          />
          <path
            d="M50 15a35 35 0 0 1 0 70a35 35 0 0 1 0-70"
            fill="currentColor"
            className="text-gray-800"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/components"
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Components Page
      </Link>
    </div>
  );
};

export default NotFoundPage;