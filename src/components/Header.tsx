import React from 'react';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <div className="mb-12 text-center max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Calculator size={32} className="text-[#ba0c2f]" />
        <h1 className="text-5xl font-extrabold text-[#1a1a1a] tracking-tight">
          Cost Calculator
        </h1>
      </div>
      <p className="text-[#4a4a4a] text-xl leading-relaxed">
        Plan your educational investment with our intuitive cost estimation tool. Need assistance?{' '}
        <a 
          href="#"
          className="text-[#ba0c2f] hover:text-[#8a0923] font-medium transition-colors duration-200 border-b-2 border-[#ba0c2f] hover:border-[#8a0923]"
        >
          Schedule a consultation
        </a>
        {' '}with our financial advisors.
      </p>
    </div>
  );
}