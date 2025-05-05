"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-b from-[var(--secondary-yellow)] to-[var(--tertiary-yellow)]"
      style={{
        backgroundImage:
          "url('/abstract-geometric-yellow-background-orange-abstract.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 h-full w-full bg-gradient-to-t from-[var(--tertiary-yellow)] to-30% to-transparent inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[var(--primary-yellow)] opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[var(--primary-yellow)] opacity-10 blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-28 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professional Trading Accounts For Ambitious Traders
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Join India's most transparent prop trading firm. Pass our
              evaluation and get funded up to $200,000 with profit splits up to
              90%.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start"
            >
              <div className="flex flex-col sm:flex-row md:gap-8 gap-4 justify-center">
                <motion.a
                  href="#packages"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Start Your Challenge <Zap className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#why"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white hover:bg-gray-50 border border-[var(--primary-yellow)] text-gray-800 font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  How It Works <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="bg-[var(--primary-yellow)] p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">100% Verified</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="bg-[var(--primary-yellow)] p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">
                  Instant Payouts
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="bg-[var(--primary-yellow)] p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">
                  5-Star Support
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="bg-[var(--primary-yellow)] p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">
                  Flexible Scaling
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Card with Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NKRq927M3no"
                  title="WeMasterTrade Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-[var(--primary-yellow)]/90 rounded-full p-4 shadow-lg"
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Video description text */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why Choose WeMasterTrade?
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch our 2-minute explainer video to discover how our funding
                  program works and why traders worldwide trust us.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[var(--primary-yellow)] mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Simple 3-step evaluation process</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[var(--primary-yellow)] mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>No time limits on challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[var(--primary-yellow)] mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Up to 90% profit split</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-[var(--primary-yellow)]">
                  5000+
                </div>
                <div className="text-sm text-gray-600">Funded Traders</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-[var(--primary-yellow)]">
                  $15M+
                </div>
                <div className="text-sm text-gray-600">Payouts</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-[var(--primary-yellow)]">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
