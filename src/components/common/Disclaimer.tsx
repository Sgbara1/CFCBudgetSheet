import React from 'react';

interface DisclaimerProps {
  className?: string;
}

export function Disclaimer({ className = '' }: DisclaimerProps) {
  return (
    <div className={`text-sm text-[#63666a] ${className}`}>
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
  );
}