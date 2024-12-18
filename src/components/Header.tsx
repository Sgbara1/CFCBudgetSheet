import React from 'react';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <div className="mb-12 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator size={32} className="text-[#ba0c2f]" />
          <h1 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Center For Financial Capability
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-[#ba0c2f] mb-6">
          Estimate Cost Calculator
        </h2>
        <div className="text-sm text-[#63666a] mb-4">
          Brought To You by UNM Financial Aid Office
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
      <div className="mt-6 text-sm text-[#63666a]">
        <p>
          Disclaimer: This is for estimation purposes only and should not be considered an actual cost of attendance calculator.
        </p>
        <p>
          For questions about actual cost of attendance, visit{' '}
          <a 
            href="https://onestop.unm.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#ba0c2f] hover:text-[#8a0923] underline"
          >
            OneStop.UNM.edu
          </a>
        </p>
      </div>
    </div>
  );
}