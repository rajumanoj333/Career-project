'use client';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextScrambleProps {
  children: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  speed?: number;
  trigger?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onScrambleComplete?: () => void;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export function TextScramble({
  children,
  className,
  as: Component = 'span',
  speed = 0.01,
  trigger = false,
  onHoverStart,
  onHoverEnd,
  onScrambleComplete,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const frameRef = useRef<number | null>(null);

  const scrambleText = (text: string, progress: number) => {
    const scrambled = text
      .split('')
      .map((char, index) => {
        if (index < progress * text.length) {
          return char;
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    setDisplayText(scrambled);
  };

  const animate = (startTime: number, duration: number) => {
    const animateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      scrambleText(children, progress);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animateFrame);
      } else {
        setIsScrambling(false);
        onScrambleComplete?.();
      }
    };
    
    frameRef.current = requestAnimationFrame(animateFrame);
  };

  useEffect(() => {
    if (trigger && !isScrambling) {
      setIsScrambling(true);
      const duration = children.length * speed * 1000;
      animate(performance.now(), duration);
    }
  }, [trigger, children, speed, isScrambling]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    onHoverEnd?.();
  };

  const ComponentElement = Component as React.ElementType;
  
  return (
    <ComponentElement
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </ComponentElement>
  );
}
