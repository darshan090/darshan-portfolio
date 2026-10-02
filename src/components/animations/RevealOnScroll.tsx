import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'none';
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ delay });

  const getTransformStyle = () => {
    if (isRevealed) return 'translateY(0)';
    if (direction === 'up') return 'translateY(20px)';
    if (direction === 'down') return 'translateY(-10px)';
    return 'translateY(0)';
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransformStyle(),
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
      className={className}
    >
      {children}
    </div>
  );
};
