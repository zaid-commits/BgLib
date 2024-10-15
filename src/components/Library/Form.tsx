import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const Form: React.FC = () => {
  return (
    <form className="space-y-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username" className="text-lg font-medium text-gray-700">Username</Label>
          <Input type="text" id="username" placeholder="Enter your username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg font-medium text-gray-700">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-lg font-medium text-gray-700">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="h-5 w-5 text-purple-600" />
          <Label htmlFor="terms" className="text-sm text-gray-700">I agree to the terms and conditions</Label>
        </div>
        <Button type="submit" className="w-full py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-300">Sign Up</Button>
      </div>
    </form>
  );
};

export default Form;

