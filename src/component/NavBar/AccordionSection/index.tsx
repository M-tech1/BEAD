"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function AccordionSection({
  title,
  children,
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-neutral-900 text-gray-200 rounded-xl p-5 shadow-lg transition-all duration-700 ">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full hover:cursor-pointer"
      >
        <h2 className="text-lg md:text-xl font-semibold text-green-500">
          {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="text-green-400" />
        ) : (
          <ChevronDown className="text-green-400" />
        )}
      </button>

      {/* Body */}
      {isOpen && (
        <div className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
