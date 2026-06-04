'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Mail, Link2, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: ['Checking', 'Savings', 'Loans', 'Investments'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'FAQs', 'Contact', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms', 'Security', 'Accessibility'],
    },
  ];

  const socialIcons = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Link2, href: '#', label: 'Link' },
    { icon: Share2, href: '#', label: 'Share' },
  ];

  return (
    <footer className="bg-primary dark:bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Ally Digital</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Modern banking for the future. Save smarter, spend confidently, and invest for your dreams.
            </p>
          </motion.div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-accent transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ally Digital Bank. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-gray-400">
            Ally Digital is a digital banking platform. Banking services provided by partner financial institutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
