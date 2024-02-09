// components/Tooltip.tsx

import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-800 text-white z-40 rounded p-2 transition-opacity duration-300 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
