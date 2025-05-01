"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh K.",
      role: "Full-time Trader, Mumbai",
      text: "Within 14 days of passing my challenge, I was trading with WMT's capital. Their scaling plan helped me grow from $25K to $100K in 3 months.",
      avatar: "/avatars/rajesh.png",
      profit: "$8,200",
    },
    {
      name: "Ayesha S.",
      role: "Part-time Trader, Hyderabad",
      text: "As a working professional, WMT's flexible rules let me trade around my schedule. I've withdrawn ₹1.2L in profits so far!",
      avatar: "/avatars/ayesha.png",
      profit: "$1,500",
    },
    {
      name: "Vikram D.",
      role: "Quant Trader, Bengaluru",
      text: "The fastest payouts I've experienced - received my first profit share in 3 days. Their API integration makes algo trading seamless.",
      avatar: "/avatars/vikram.png",
      profit: "$12,400",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#fff8ea] py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[#facc15] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#967800] blur-3xl"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#715400] mb-4">
            <span className="text-[#facc15]">₹2.8Cr+</span> Paid to Indian
            Traders
          </h2>
          <p className="text-[#967800] text-xl max-w-3xl mx-auto">
            Real success stories from our growing community of funded traders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", idx * 0.2, 1)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-[#fff8ea] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-[#facc15] object-cover"
                />
              </div>
              <p className="text-[#967800] mb-6 italic text-lg">"{t.text}"</p>

              <div className="bg-[#fff8ea] rounded-lg p-4 mb-6">
                <div className="text-sm text-[#715400]">
                  Last Month's Profit
                </div>
                <div className="text-2xl font-bold text-[#facc15]">
                  {t.profit}
                </div>
              </div>

              <div>
                <h4 className="text-[#715400] font-bold">{t.name}</h4>
                <p className="text-[#967800] text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-20 bg-white rounded-2xl p-8 border border-[#fff8ea] shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#facc15] mb-2">
                4.9/5
              </div>
              <div className="text-[#967800]">Trustpilot Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#facc15] mb-2">98%</div>
              <div className="text-[#967800]">Payout Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#facc15] mb-2">
                24-48h
              </div>
              <div className="text-[#967800]">Withdrawal Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#facc15] mb-2">10K+</div>
              <div className="text-[#967800]">Active Traders</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
