import React, { useState } from "react";

export const AccordionSection = ({ title, children, titleClassName = "" }: { title: string, children: React.ReactNode, titleClassName?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-gray-200/50 rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 md:py-5 bg-gradient-to-r from-gray-50/80 to-white/80 hover:from-[#b76ec7]/5 hover:to-[#8e24aa]/5 transition-all duration-300 font-medium text-gray-800 hover:text-[#8e24aa]"
      >
        <span className={titleClassName}>{title}</span>
        <svg
          className={`w-5 h-5 transition-all duration-300 text-gray-600 hover:text-[#8e24aa] ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white/80 backdrop-blur-sm">
          {children}
        </div>
      )}
    </div>
  );
};
