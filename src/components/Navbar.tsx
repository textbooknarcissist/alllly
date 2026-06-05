import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Personal Banking", href: "#products" },
  { label: "Business", href: "#products" },
  { label: "Loans", href: "#products" },
  { label: "Invest", href: "#products" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-stone-2 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between gap-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-navy text-white font-semibold text-lg">
              A
            </div>
            <span className="text-base font-semibold text-ink">
              Ally Digital
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link rounded-full px-4 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-semibold text-ink-60 hover:text-navy transition-colors"
            >
              Log In
            </a>
            <a href="#hero" className="btn-primary">
              Open Account
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-ink-60"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-white shadow-lg"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white font-semibold">
                      A
                    </div>
                    <span className="font-semibold text-ink">
                      Ally Digital
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="text-ink-60"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-ink font-medium hover:bg-stone"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-stone-2">
                  <a
                    href="#"
                    className="block rounded-2xl px-4 py-3 text-center text-ink-60 font-semibold hover:text-navy hover:bg-stone transition"
                  >
                    Log In
                  </a>
                  <a
                    href="#hero"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl bg-navy px-4 py-3 text-center text-white font-semibold"
                  >
                    Open Account
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
