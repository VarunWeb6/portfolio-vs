import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Parse numeric target (e.g., "12+" → 12, "40%" → 40, "1K+" → 1000)
    let numericTarget = target;
    if (typeof target === "string") {
      numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
      if (target.toLowerCase().includes("k")) {
        numericTarget *= 1000;
      }
    }

    if (isNaN(numericTarget) || numericTarget === 0) {
      setCount(numericTarget || 0);
      return;
    }

    const startTime = performance.now();

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * numericTarget);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  // Format the display value to match the original format
  const formatDisplay = () => {
    if (typeof target === "string") {
      if (target.toLowerCase().includes("k")) {
        const kVal = count >= 1000 ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K` : count.toString();
        const suffixFromTarget = target.replace(/[0-9.kK]/g, "");
        return `${prefix}${kVal}${suffixFromTarget}${suffix}`;
      }
      const suffixFromTarget = target.replace(/[0-9.]/g, "");
      return `${prefix}${count}${suffixFromTarget}${suffix}`;
    }
    return `${prefix}${count}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatDisplay()}
    </span>
  );
};

export default AnimatedCounter;
