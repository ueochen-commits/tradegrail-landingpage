import React from 'react';

export const TradeGrailLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <rect x="4" y="14" width="4" height="6" rx="1" fill="#94a3b8" />
    <rect x="10" y="8" width="4" height="12" rx="1" fill="#6366f1" />
    <rect x="16" y="4" width="4" height="16" rx="1" fill="#818cf8" />
  </svg>
);
