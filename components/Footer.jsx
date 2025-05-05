"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#why" },
    { name: "Packages", href: "#packages" },
    { name: "FAQ", href: "#faq" },
  ];

  const contactInfo = [
    { icon: Mail, text: "support@wemastertrade.com" },
    { icon: Phone, text: "+91 98765 43210" },
    { icon: MapPin, text: "Mumbai, India" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/logoWmtComWh.png"
              alt="WMT Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm">
            India's most transparent prop trading firm helping traders grow with
            funded accounts.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-[var(--primary-yellow)] transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                <a
                  href={link.href}
                  className="text-sm hover:text-[var(--primary-yellow)] transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-start space-x-3">
                <info.icon className="w-5 h-5 text-[var(--primary-yellow)] flex-shrink-0" />
                <span className="text-sm">{info.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe for trading tips and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 bg-slate-50 py-2 rounded-l-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] text-gray-900"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--primary-yellow)] text-gray-900 px-4 py-2 rounded-r-lg text-sm font-medium"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} WeMasterTrade. All rights reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0">
            Developed by{" "}
            <motion.a
              href="https://ahsandevhub.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#facc15" }}
              className="text-[var(--primary-yellow)] hover:underline"
            >
              Ahsan DevHub
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
