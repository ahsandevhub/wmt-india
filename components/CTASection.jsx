"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#facc15] to-[#967800] z-0"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 z-1">
        <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#fff8ea] blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center bg-[#715400] rounded-full p-4 mb-8"
        >
          <Rocket className="w-8 h-8 text-[#facc15] animate-pulse" />
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-[#fff8ea]">Trade Like a Pro</span>?
        </h2>

        <p className="text-xl text-[#fff8ea] max-w-3xl mx-auto mb-10">
          Join India's fastest-growing prop trading firm with 10,000+ funded
          traders and ₹2.8Cr+ in payouts last quarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#packages"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#715400] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Start Your Challenge
          </motion.a>

          <motion.a
            href="#why"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-lg"
          >
            How It Works
          </motion.a>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#facc15] animate-pulse"></div>
            <span className="text-sm text-white">1,200+ Funded This Month</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#facc15] animate-pulse"></div>
            <span className="text-sm text-white">24-48 Hour Payouts</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
