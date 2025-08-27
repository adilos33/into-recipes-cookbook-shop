// Floating ingredient icons for the hero background animation
import React from 'react';

const HerbIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path 
      d="M12 2C8.5 2 6 4.5 6 8C6 10.5 7.5 12.5 9.5 13.5L12 22L14.5 13.5C16.5 12.5 18 10.5 18 8C18 4.5 15.5 2 12 2Z" 
      fill="currentColor" 
      opacity="0.6"
    />
    <path 
      d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6Z" 
      fill="currentColor" 
      opacity="0.8"
    />
  </svg>
);

const SpoonIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path 
      d="M12.5 2C9.5 2 7 4.5 7 7.5C7 10.5 9.5 13 12.5 13C15.5 13 18 10.5 18 7.5C18 4.5 15.5 2 12.5 2Z" 
      fill="currentColor" 
      opacity="0.6"
    />
    <path 
      d="M12.5 13L11.5 22H13.5L12.5 13Z" 
      fill="currentColor" 
      opacity="0.8"
    />
  </svg>
);

const ChiliIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path 
      d="M8 12C8 8 11 5 15 5C17 5 18.5 6 19.5 7.5C20.5 9 20.5 11 19.5 12.5C18.5 14 17 15 15 15C11 15 8 12 8 12Z" 
      fill="currentColor" 
      opacity="0.7"
    />
    <path 
      d="M15 5C15.5 4 16.5 3 18 3C19 3 19.5 3.5 19.5 4C19.5 4.5 19 5 18.5 5C17.5 5 16.5 5.5 15 5Z" 
      fill="currentColor" 
      opacity="0.5"
    />
    <path 
      d="M8 12C6 14 4 16 3 18C2.5 19 3 20 4 19.5C5 19 7 17 8 15" 
      fill="currentColor" 
      opacity="0.6"
    />
  </svg>
);

export const FloatingIngredients: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Herb ingredients */}
      <HerbIcon className="floating-ingredient herb text-secondary absolute top-1/4 left-1/4 w-6 h-6" />
      <HerbIcon className="floating-ingredient herb text-primary absolute top-3/4 right-1/3 w-8 h-8" />
      
      {/* Spoon ingredients */}
      <SpoonIcon className="floating-ingredient spoon text-muted-foreground absolute top-1/3 right-1/4 w-7 h-7" />
      <SpoonIcon className="floating-ingredient spoon text-accent absolute top-2/3 left-1/5 w-5 h-5" />
      
      {/* Chili ingredients */}
      <ChiliIcon className="floating-ingredient chili text-primary absolute top-1/2 right-1/2 w-6 h-6" />
      <ChiliIcon className="floating-ingredient chili text-secondary absolute top-1/5 right-1/5 w-4 h-4" />
    </div>
  );
};