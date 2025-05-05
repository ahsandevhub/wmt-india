"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "#hero" },
    { id: 2, name: "Why Us", href: "#why" },
    { id: 3, name: "Packages", href: "#packages" },
    { id: 4, name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-[var(--tertiary-yellow)] border-b border-[var(--secondary-yellow)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo with animation */}
          <Link href="#hero">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <img
                src="/logoWmtCom.png"
                alt="WMT Logo"
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative px-3 py-2 text-gray-800 font-medium transition-colors hover:text-[var(--primary-yellow)]"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item.name}
                {isHovered === item.id && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-3 top-full block h-[2px] bg-[var(--primary-yellow)]"
                    initial={{ width: 0 }}
                    animate={{ width: "calc(100% - 1.5rem)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            {/* Login Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="/login"
                className="bg-[var(--primary-yellow)] text-gray-900 px-5 py-2 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all hover:bg-[var(--secondary-yellow)] flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                Login
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-[var(--primary-yellow)] hover:bg-opacity-20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-[var(--secondary-yellow)]"
          >
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-[var(--primary-yellow)] hover:bg-opacity-20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block bg-[var(--primary-yellow)] text-gray-900 px-5 py-2.5 rounded-lg font-semibold text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Login
              </Link>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
