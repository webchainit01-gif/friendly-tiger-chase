import React from 'react';
import { cn } from '@/lib/utils';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';

interface AnimatedDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: 'fade-up' | 'fade-in' | 'scale-in';
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  delay = 0,
  className,
  animationType = 'fade-up',
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) => {
  const { ref, inView } = useInViewAnimation({ threshold, triggerOnce, delay });

  const baseClasses = 'transition-all duration-700 ease-out';
  let animationClasses = '';

  if (animationType === 'fade-up') {
    animationClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  } else if (animationType === 'fade-in') {
    animationClasses = inView ? 'opacity-100' : 'opacity-0';
  } else if (animationType === 'scale-in') {
    animationClasses = inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(baseClasses, animationClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;