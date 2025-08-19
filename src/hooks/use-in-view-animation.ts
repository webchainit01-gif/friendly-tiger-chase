import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useInViewAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: UseInViewAnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (triggerOnce && hasAnimated) {
            return;
          }
          setTimeout(() => {
            setInView(true);
            setHasAnimated(true);
          }, delay);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, hasAnimated, delay]);

  return { ref, inView };
};