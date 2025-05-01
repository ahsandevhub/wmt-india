"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(null);

  const navItems = [
    { id: 1, name: "Home", href: "#hero" },
    { id: 2, name: "Why Us", href: "#why" },
    { id: 3, name: "Packages", href: "#packages" },
    { id: 4, name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-quinary-yellow border-b border-secondary-yellow sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo with animation */}
        <Link href="#hero">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <img src="/logoWmtCom.png" alt="WMT Logo" className="h-12 w-auto" />
            {/* <span className="text-xl font-bold text-quaternary-yellow hidden sm:block">
              WMT PRO
            </span> */}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative px-2 py-1 text-quaternary-yellow font-medium"
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item.name}
              {isHovered === item.id && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute left-0 top-full block h-0.5 bg-primary-yellow"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}

          {/* Login Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className="bg-primary-yellow text-quaternary-yellow px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
            >
              Client Login
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button - Add your mobile menu implementation here */}
        <button className="md:hidden text-quaternary-yellow">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
