import { useState } from "react";
import { Globe, Share2, Mail, Rss } from "lucide-react";
import { BRAND, FOOTER_SECTIONS } from "@/utils/constants";

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "#", label: "Social" },
  { icon: Rss, href: "#", label: "Updates" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const columns = [
    { title: "Products", links: FOOTER_SECTIONS.products },
    { title: "Company", links: FOOTER_SECTIONS.company },
    { title: "Support", links: FOOTER_SECTIONS.support },
    { title: "Resources", links: FOOTER_SECTIONS.resources },
    { title: "Legal", links: FOOTER_SECTIONS.legal },
  ];

  return (
    <footer className="bg-primary-90 text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(5,1fr)]">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg font-bold text-primary">
                V
              </div>
              <div>
                <p className="text-lg font-bold">{BRAND.fullName}</p>
                <p className="text-xs text-white/50">Member FDIC</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/60">
              Premium digital banking with institutional-grade security, intelligent tools, and
              a commitment to your financial growth.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/15"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                {col.title}
              </h5>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h5 className="text-lg font-semibold">Stay informed</h5>
              <p className="mt-1 text-sm text-white/60">
                Get financial insights and product updates delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                aria-label="Email for newsletter"
                className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-dark hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {currentYear} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            {FOOTER_SECTIONS.legal.map((link) => (
              <a key={link} href="#" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-6 text-white/30">
          Vaultline Digital is a design prototype. Deposits are insured up to $250,000 per
          depositor. Rates and terms subject to change.
        </p>
      </div>
    </footer>
  );
}
