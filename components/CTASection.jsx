"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Rocket, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-yellow)] to-[var(--secondary-yellow)]"
    >
      {/* Fixed Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background pattern - make sure this image exists */}
        <div
          className="absolute inset-0 bg-[url('/grid-pattern-dark.png')] opacity-10 bg-cover"
          style={{
            backgroundImage: "url('/grid-pattern.png')",
          }}
        ></div>

        {/* Blurred circles - made more visible */}
        <div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-white/20 blur-[80px]"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--tertiary-yellow)]/20 blur-[80px]"
          style={{ transform: "translate(50%, 50%)" }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center"
      >
        {/* Animated icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-5 mb-8 shadow-lg"
        >
          <Rocket className="w-10 h-10 text-white fill-white" />
        </motion.div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to <span className="text-gray-900">Transform</span> Your
          Trading?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Join India's most trusted prop trading firm with 10,000+ funded
          traders and ₹2.8Cr+ in payouts last quarter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            How It Works <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Check, text: "1,200+ Funded This Month" },
            { icon: Clock, text: "24-48 Hour Payouts" },
            { icon: Zap, text: "Instant Account Setup" },
            { icon: Rocket, text: "90% Profit Split" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            >
              <item.icon className="w-5 h-5 text-white" />
              <span className="text-sm text-white font-medium">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="text-sm text-white/80 tracking-wider uppercase mb-4">
            Trusted by traders at
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {["Zerodha", "Groww", "Upstox", "Angel One", "5Paisa"].map(
              (broker, i) => (
                <div key={i} className="text-white font-medium text-lg">
                  {broker}
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
