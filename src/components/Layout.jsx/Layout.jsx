/* eslint-disable react/prop-types */
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 text-white text-center p-4 font-bold">
        <p className="text-[24px] "> Expense Tracker</p>
      </header>

      {/* Main content with fixed height and scrollable content */}
      <div className="flex-grow flex justify-center items-center">
        <div className="h-[400px] md:h-[400px] lg:h-[450px] max-w-lg w-full bg-white rounded-lg overflow-y-auto shadow-xl">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center p-4">
        <p className="text-[16px] font-medium">shariarmahmud225@gmail.com</p>
      </footer>
    </div>
  );
}
