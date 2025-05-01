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
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Zero-Risk Capital",
      desc: "Trade with our funds after passing the evaluation. No personal capital at stake.",
      bg: "bg-secondary-yellow/20",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale to $200K",
      desc: "Prove your skills and grow your account up to $200,000 through our scaling plan.",
      bg: "bg-primary-yellow/10",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Advanced Metrics",
      desc: "Real-time analytics dashboard to track your performance and progress.",
      bg: "bg-secondary-yellow/20",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Instant Onboarding",
      desc: "Start your challenge in minutes with instant account activation.",
      bg: "bg-primary-yellow/10",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast-Track Funding",
      desc: "Get funded in as little as 3 days after passing your evaluation.",
      bg: "bg-secondary-yellow/20",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "90% Profit Split",
      desc: "Industry-leading profit share with weekly withdrawals available.",
      bg: "bg-primary-yellow/10",
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Unlimited Retries",
      desc: "Free retests if you don't pass on first attempt (conditions apply).",
      bg: "bg-secondary-yellow/20",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Elite Community",
      desc: "Access to our private network of funded traders and mentors.",
      bg: "bg-primary-yellow/10",
    },
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary-yellow blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-tertiary-yellow blur-3xl"></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-yellow/10 to-transparent"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-quaternary-yellow mb-4">
            The <span className="text-primary-yellow">WMT Advantage</span>
          </h2>
          <p className="text-xl text-tertiary-yellow max-w-3xl mx-auto">
            Why thousands of traders choose WMT as their preferred prop firm
            partner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              whileHover={{ y: -10 }}
              className={`${item.bg} rounded-2xl p-8 border border-secondary-yellow/30 hover:border-primary-yellow/50 transition-all`}
            >
              <div className="w-14 h-14 rounded-full bg-primary-yellow/10 flex items-center justify-center mb-6 text-primary-yellow">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-quaternary-yellow mb-3">
                {item.title}
              </h3>
              <p className="text-tertiary-yellow">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats counter */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-20 bg-gradient-to-r from-primary-yellow/5 to-secondary-yellow/5 border border-primary-yellow/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-yellow mb-2">
                $15M+
              </div>
              <div className="text-tertiary-yellow">Paid to Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-yellow mb-2">
                10K+
              </div>
              <div className="text-tertiary-yellow">Funded Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-yellow mb-2">
                24/7
              </div>
              <div className="text-tertiary-yellow">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-yellow mb-2">
                90%
              </div>
              <div className="text-tertiary-yellow">Profit Split</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
