import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  stagger?: number; // in ms, for children
  animation?: 'fade-in-up' | 'pop-in' | 'fade-in' | 'zoom-in';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className,
  delay = 0,
  stagger = 0,
  animation = 'fade-in-up',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const getAnimationClass = (index: number = 0) => {
    if (!hasAnimated) return 'opacity-0'; // Start invisible

    const animationDelay = delay + (index * stagger);
    const delayStyle = animationDelay > 0 ? { animationDelay: `${animationDelay}ms` } : {};

    return cn(
      `animate-${animation}`,
      'opacity-0', // Start invisible, animation will make it visible
      className,
      delayStyle
    );
  };

  // If children is an array, apply staggered animation
  if (Array.isArray(children)) {
    return (
      <div ref={ref} className="w-full">
        {React.Children.map(children, (child, index) => (
          <div
            key={index} // Using index as key is generally not recommended for dynamic lists, but here children are static
            className={getAnimationClass(index)}
            style={{ animationDelay: `${delay + (index * stagger)}ms` }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  // If single child
  return (
    <div
      ref={ref}
      className={getAnimationClass()}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;