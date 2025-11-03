// components/GoBack.tsx
'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

interface GoBackProps {
  className?: string;
  fallbackPath?: string;
}

const GoBack: React.FC<GoBackProps> = ({ 
  className = '',
  fallbackPath = '/'
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackPath);
    }
  };

  return (
    <button 
      onClick={handleGoBack}
      className={`flex items-center gap-2 pointer-cursor text-black/50 hover:text-(--main-orange) transition-colors ${className}`}
      aria-label="Go back to previous page"
    >
      
      <svg 
        width="8" 
        height="15" 
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path 
          d="M6.586 12l-5-5 5-5 1.414 1.414L4.414 7l3.586 3.586z" 
          fillRule="evenodd"
        />
      </svg>
      
      {/* Go Back text */}
      <span className="text-[15px] font-medium ">
        Go Back
      </span>
    </button>
  );
};

export default GoBack;