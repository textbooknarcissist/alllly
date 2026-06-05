import { Globe, Mail, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Personal",
      links: ["Checking", "Savings", "Investing", "Cards"],
    },
    {
      title: "Business",
      links: ["Business Checking", "Business Savings", "Payments", "Borrowing"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"],
    },
  ];

  const socialLinks = [
    { icon: Globe, href: "#", label: "Website" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Share2, href: "#", label: "Updates" },
  ];

  return (
    <footer className="bg-navy-90 text-white">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_repeat(3,1fr)]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy font-semibold text-lg">
                A
              </div>
              <div>
                <p className="text-lg font-semibold">Ally Digital</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/70">
              Premium digital banking with refined tools for saving, spending,
              and investing — designed for the way you live.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/15"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {section.title}
              </h5>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {currentYear} Ally Digital, Inc. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60 sm:mt-0">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
            <a href="#" className="transition hover:text-white">
              Accessibility
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-6 text-white/30">
          *APY is accurate as of June 5, 2026 and subject to change. The Annual
          Percentage Yield (APY) is variable. Ally Digital is a Member FDIC.
          Deposits are insured up to $250,000 per depositor. Ally Digital is not
          a real banking institution — this is a design prototype.
        </p>
      </div>
    </footer>
  );
}
