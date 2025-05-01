"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="md:min-h-[calc(100vh-80px)] relative overflow-hidden"
    >
      {/* Traditional Artwork Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/hero-artwork.jpg" // Replace with your actual image path
          alt="Traditional Yellow Indian Artwork Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-yellow to-quinary-yellow z-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-quaternary-yellow mb-6 leading-tight"
            >
              Trade With <span className="text-primary-yellow">Confidence</span>
              .<br />
              Earn <span className="text-primary-yellow">Real</span> Rewards.
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-tertiary-yellow text-lg md:text-xl mb-8 max-w-2xl"
            >
              No risk to your own capital. Join India's most trusted prop
              trading platform. Prove your skills & get funded up to $200,000!
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-yellow text-quaternary-yellow px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Challenge
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-quaternary-yellow border-2 border-primary-yellow px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-yellow transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary-yellow p-2 rounded-full">
                  <img
                    src="/icons/checkmark.png"
                    alt="Verified"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-tertiary-yellow font-medium">
                  Verified Traders
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary-yellow p-2 rounded-full">
                  <img
                    src="/icons/medal.png"
                    alt="Certified"
                    className="h-6 w-6"
                  />
                </div>
                <span className="text-tertiary-yellow font-medium">
                  Certified Platform
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-2xl shadow-2xl overflow-hidden border-4 border-white relative"
            >
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
                  className="bg-primary-yellow/80 rounded-full p-4"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
