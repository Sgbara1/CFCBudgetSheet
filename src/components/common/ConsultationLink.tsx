import React from 'react';

interface ConsultationLinkProps {
  className?: string;
}

export function ConsultationLink({ className = '' }: ConsultationLinkProps) {
  return (
    <a 
      href="#"
      className={`text-[#ba0c2f] hover:text-[#8a0923] font-medium transition-colors duration-200 border-b-2 border-[#ba0c2f] hover:border-[#8a0923] ${className}`}
    >
      Schedule a consultation
    </a>
  );
}