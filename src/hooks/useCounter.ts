import { useEffect, useState } from "react";

type UseCounterOptions = {
  end: number;
  duration?: number;
  start?: number;
  active?: boolean;
  decimals?: number;
};

export default function useCounter({
  end,
  duration = 2000,
  start = 0,
  active = false,
  decimals = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setCount(current);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, active]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();
}
