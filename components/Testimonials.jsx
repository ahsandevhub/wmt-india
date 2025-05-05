"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { Clock, Star, TrendingUp, Users } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh K.",
      role: "Full-time Trader, Mumbai",
      text: "Within 14 days of passing my challenge, I was trading with WMT's capital. Their scaling plan helped me grow from $25K to $100K in 3 months.",
      avatar: "/avatars/rajesh.avif",
      profit: "$8,200",
      rating: 5,
    },
    {
      name: "Ayesha S.",
      role: "Part-time Trader, Hyderabad",
      text: "As a working professional, WMT's flexible rules let me trade around my schedule. I've withdrawn ₹1.2L in profits so far!",
      avatar: "/avatars/ayesha.jpg",
      profit: "$1,500",
      rating: 5,
    },
    {
      name: "Vikram D.",
      role: "Quant Trader, Bengaluru",
      text: "The fastest payouts I've experienced - received my first profit share in 3 days. Their API integration makes algo trading seamless.",
      avatar: "/avatars/vikram.jpg",
      profit: "$12,400",
      rating: 4,
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Trustpilot Rating", icon: Star },
    { value: "98%", label: "Payout Success", icon: TrendingUp },
    { value: "24-48h", label: "Withdrawal Time", icon: Clock },
    { value: "10K+", label: "Active Traders", icon: Users },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-[var(--tertiary-yellow)] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/wireframe.png')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-[var(--primary-yellow)] blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--secondary-yellow)] blur-[100px] opacity-10"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[var(--primary-yellow)]/10 text-[var(--primary-yellow)] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[var(--primary-yellow)]">₹2.8Cr+</span> Paid
            to Indian Traders
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real success stories from our growing community of funded traders
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", idx * 0.2, 1)}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all h-full flex flex-col"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating
                        ? "text-[var(--primary-yellow)] fill-[var(--primary-yellow)]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 flex-grow italic">"{t.text}"</p>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-[var(--primary-yellow)] object-cover mr-4"
                />
                <div>
                  <h4 className="text-gray-900 font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>

              {/* Profit Badge */}
              <div className="mt-6 bg-[var(--tertiary-yellow)] rounded-lg p-3 text-center">
                <p className="text-sm text-gray-600">Last Month's Profit</p>
                <p className="text-xl font-bold text-[var(--primary-yellow)]">
                  {t.profit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary-yellow)]/10 flex items-center justify-center text-[var(--primary-yellow)]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
