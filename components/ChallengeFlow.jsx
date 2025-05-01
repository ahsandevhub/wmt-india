"use client";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle, PlayCircle } from "lucide-react";

// Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ChallengeFlow() {
  const steps = [
    {
      icon: <PlayCircle className="w-10 h-10" />,
      title: "Step 1: Choose Your Challenge",
      description:
        "Select from multiple account sizes ($10K-$200K) and risk levels tailored to your trading style.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Step 2: Pass the Evaluation",
      description:
        "Reach the profit target while following our straightforward trading rules.",
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Step 3: Trade With Funding",
      description:
        "Get a funded account with scaling plan and withdraw profits weekly.",
    },
  ];

  return (
    <section
      id="challenge-flow"
      className="bg-[#fff8ea] py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-60 h-60 rounded-full bg-[#facc15] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#967800] blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#715400] mb-4">
            The <span className="text-[#facc15]">3-Step</span> Funding Journey
          </h2>
          <p className="text-[#967800] text-xl max-w-3xl mx-auto">
            Simple path to becoming a WMT-funded trader with up to $200,000 in
            capital
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white border border-[#fff8ea] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#facc15]/10 flex items-center justify-center mb-6 text-[#facc15]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#715400] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#967800]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
