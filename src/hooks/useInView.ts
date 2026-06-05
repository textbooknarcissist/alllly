import { RefObject, useEffect, useState } from "react";

export default function useInView(
  ref: RefObject<Element | null>,
  threshold = 0.12,
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) return;
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold, isInView]);

  return isInView;
}
