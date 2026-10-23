"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#111B29] border-[#F0B33E]/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                : "bg-[#111B29]/60 border-[#2A3B50] hover:border-[#2A3B50]/90 hover:bg-[#111B29]"
            }`}
          >
            <h3>
              <button
                id={headingId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left text-base font-semibold text-[#F5F3ED] hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E]"
              >
                <span className="flex items-center gap-3 pr-4">
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs shrink-0 font-mono transition-colors ${
                      isOpen
                        ? "bg-[#F0B33E] text-[#0B111B] font-bold"
                        : "bg-[#16263A] text-[#A4B0BE]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span>{item.question}</span>
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#A4B0BE] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#F0B33E]" : ""
                  }`}
                />
              </button>
            </h3>

            <div
              id={contentId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`px-5 pb-5 pt-1 text-sm text-[#A4B0BE] leading-relaxed border-t border-[#2A3B50]/40 transition-all duration-200 ${
                isOpen ? "block animate-in fade-in" : "hidden"
              }`}
            >
              <div className="pt-2">{item.answer}</div>
              {item.category && (
                <div className="mt-3 inline-block text-[11px] font-mono text-[#F0B33E]/80 bg-[#F0B33E]/10 px-2 py-0.5 rounded">
                  Topic: {item.category}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
