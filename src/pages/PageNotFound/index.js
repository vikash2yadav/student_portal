import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <div className="text-center">
        <ul className="list-none space-y-4">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-lg">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNotFound;
