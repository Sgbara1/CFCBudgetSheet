import React from 'react';
import { Calculator } from 'lucide-react';

interface TitleProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function Title({ icon, title, subtitle, className = '' }: TitleProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icon}
      <div>
        <h3 className="text-2xl font-bold text-[#1a1a1a]">{title}</h3>
        {subtitle && (
          <p className="text-sm text-[#63666a]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}