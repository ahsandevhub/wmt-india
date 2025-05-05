"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import {
  Award,
  BarChart2,
  Clock,
  DollarSign,
  Repeat,
  ShieldCheck,
  TrendingUp,
  UserPlus,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Zero-Risk Capital",
      desc: "Trade with our funds after passing the evaluation. No personal capital at stake.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scale to $200K",
      desc: "Prove your skills and grow your account up to $200,000 through our scaling plan.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Advanced Metrics",
      desc: "Real-time analytics dashboard to track your performance and progress.",
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Instant Onboarding",
      desc: "Start your challenge in minutes with instant account activation.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast-Track Funding",
      desc: "Get funded in as little as 3 days after passing your evaluation.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "90% Profit Split",
      desc: "Industry-leading profit share with weekly withdrawals available.",
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Unlimited Retries",
      desc: "Free retests if you don't pass on first attempt (conditions apply).",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Elite Community",
      desc: "Access to our private network of funded traders and mentors.",
    },
  ];

  const stats = [
    { value: "$15M+", label: "Paid to Traders" },
    { value: "10K+", label: "Funded Traders" },
    { value: "24/7", label: "Support" },
    { value: "90%", label: "Profit Split" },
  ];

  return (
    <section
      id="why"
      className="relative py-24 overflow-hidden bg-[var(--tertiary-yellow)]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/wireframe.png')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[var(--primary-yellow)] blur-[100px] opacity-10"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[var(--secondary-yellow)] blur-[100px] opacity-10"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[var(--primary-yellow)]/10 text-[var(--primary-yellow)] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The{" "}
            <span className="text-[var(--primary-yellow)]">WMT Advantage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Why thousands of traders choose WMT as their preferred prop firm
            partner
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[var(--primary-yellow)]/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-yellow)]/10 flex items-center justify-center mb-4 text-[var(--primary-yellow)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats counter */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="bg-gradient-to-r from-[var(--primary-yellow)]/5 to-[var(--secondary-yellow)]/5 border border-[var(--primary-yellow)]/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[var(--primary-yellow)] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.7, 1)}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to start your funded trading journey?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--primary-yellow)] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-[var(--secondary-yellow)]"
          >
            Begin Evaluation Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
