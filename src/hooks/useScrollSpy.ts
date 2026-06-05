import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].replace("#", ""));
        if (el && el.offsetTop <= scrollY) {
          setActiveId(sectionIds[i]);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
