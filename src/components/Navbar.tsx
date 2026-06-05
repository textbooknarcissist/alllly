import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, NAV_ITEMS } from "@/utils/constants";
import useScrollSpy from "@/hooks/useScrollSpy";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeHref = useScrollSpy(NAV_ITEMS.map((i) => i.href));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-light border-b border-surface-2 shadow-soft"
            : "bg-transparent",
        )}
      >
        <nav className="container flex items-center justify-between gap-4 py-4" aria-label="Main navigation">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
              V
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold text-primary">{BRAND.name}</span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-ink-muted">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeHref === item.href
                    ? "bg-primary/5 text-primary"
                    : "text-ink-muted hover:bg-surface-2 hover:text-primary",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#"
              className="text-sm font-semibold text-ink-muted transition-colors hover:text-primary"
            >
              Login
            </a>
            <Button href="#hero" variant="primary">
              Open Account
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-ink-muted lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-premium"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-surface-2 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-bold text-white">
                    V
                  </div>
                  <span className="font-bold text-primary">{BRAND.fullName}</span>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-ink-muted">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto p-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3.5 font-medium text-primary hover:bg-surface"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3 border-t border-surface-2 p-6">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-center font-semibold text-ink-muted hover:bg-surface"
                >
                  Login
                </a>
                <Button href="#hero" variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
                  Open Account
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
