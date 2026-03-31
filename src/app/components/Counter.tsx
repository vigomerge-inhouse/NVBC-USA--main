import React, { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface CounterProps {
  value: string | number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Sirf ek baar animate hoga jab dikhega
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // String se number nikalne ke liye (e.g., "150+" ko 150 banayega)
      const numericValue = typeof value === "string" ? parseInt(value.replace(/\D/g, "")) : value;
      
      const controls = animate(count, numericValue, {
        duration: duration,
        ease: "easeOut",
      });

      // Update the display state
      const unsubscribe = rounded.onChange((v) => setDisplayValue(v));
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

export default Counter;