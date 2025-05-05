"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for new traders testing their strategies",
    features: [
      "$10,000 Virtual Account",
      "1 Phase Evaluation",
      "8% Profit Target",
      "5% Daily Drawdown",
      "30 Day Challenge",
    ],
    popular: false,
    profitSplit: "80%",
    maxFunding: "$10,000",
    scaling: false,
  },
  {
    name: "Professional",
    price: "$199",
    description: "For serious traders ready to scale up",
    features: [
      "$25,000 Virtual Account",
      "1 Phase Evaluation",
      "8% Profit Target",
      "5% Daily Drawdown",
      "Scaling Plan Available",
      "Priority Support",
    ],
    popular: true,
    profitSplit: "85%",
    maxFunding: "$25,000",
    scaling: true,
  },
  {
    name: "Expert",
    price: "$399",
    description: "Maximum funding for proven traders",
    features: [
      "$50,000 Virtual Account",
      "1 Phase Evaluation",
      "8% Profit Target",
      "5% Daily Drawdown",
      "Aggressive Scaling Plan",
      "Dedicated Account Manager",
      "Weekly Payouts",
    ],
    popular: false,
    profitSplit: "90%",
    maxFunding: "$50,000",
    scaling: true,
  },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="relative py-24 bg-[var(--tertiary-yellow)] overflow-hidden border-b-2 border-yellow-200/50"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/wireframe.png')] opacity-10"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[var(--primary-yellow)] blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[var(--secondary-yellow)] blur-[100px] opacity-10"></div>
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
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your{" "}
            <span className="text-[var(--primary-yellow)]">Funding Path</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent pricing with the highest profit splits in the industry
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 1)}
              whileHover={{ y: -10 }}
              className={`relative rounded-xl border ${
                pkg.popular
                  ? "border-[var(--primary-yellow)] shadow-lg"
                  : "border-gray-200 shadow-md"
              } bg-white transition-all`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 bg-[var(--primary-yellow)] text-white px-4 py-1 font-bold text-sm transform -translate-x-1/2 -translate-y-3 rounded-full flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-white" />
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--primary-yellow)]">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500">/evaluation</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[var(--primary-yellow)] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-bold mt-auto ${
                    pkg.popular
                      ? "bg-[var(--primary-yellow)] hover:bg-[var(--secondary-yellow)] text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  } transition-colors`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              Detailed Plan Comparison
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Header Row */}
            <div className="grid grid-cols-4 p-4 bg-gray-50">
              <div className="font-medium text-gray-500">Key Features</div>
              <div className="text-center font-medium">Starter</div>
              <div className="text-center font-medium">Professional</div>
              <div className="text-center font-medium">Expert</div>
            </div>

            {/* Rows */}
            {[
              { name: "Max Funding", key: "maxFunding" },
              { name: "Profit Split", key: "profitSplit" },
              { name: "Scaling Plan", key: "scaling" },
              { name: "Evaluation Phases", value: "1 Phase" },
              { name: "Profit Target", value: "8%" },
              { name: "Daily Drawdown", value: "5%" },
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-4 p-4 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="font-medium text-gray-700">{row.name}</div>
                {packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className="text-center text-gray-600">
                    {row.key ? pkg[row.key] : row.value}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-6 bg-gray-50 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[var(--primary-yellow)] hover:bg-[var(--secondary-yellow)] text-white px-8 py-3 rounded-lg font-bold inline-flex items-center transition-colors"
            >
              Compare All Features <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
