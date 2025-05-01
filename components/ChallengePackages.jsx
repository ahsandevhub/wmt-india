"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
  },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="bg-quinary-yellow py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary-yellow blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-tertiary-yellow blur-3xl"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-quaternary-yellow mb-4">
            Choose Your{" "}
            <span className="text-primary-yellow">Funding Path</span>
          </h2>
          <p className="text-tertiary-yellow max-w-2xl mx-auto text-lg">
            Transparent pricing with the highest profit splits in the industry
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 1)}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden border-2 ${
                pkg.popular
                  ? "border-primary-yellow"
                  : "border-secondary-yellow"
              } bg-white`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary-yellow text-quaternary-yellow px-4 py-1 font-bold text-sm transform translate-x-2 -translate-y-2 rotate-12">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-quaternary-yellow mb-2">
                  {pkg.name}
                </h3>
                <p className="text-tertiary-yellow mb-6">{pkg.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-primary-yellow">
                    {pkg.price}
                  </span>
                  <span className="text-tertiary-yellow">/evaluation</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-yellow mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-tertiary-yellow">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold ${
                    pkg.popular
                      ? "bg-primary-yellow text-quaternary-yellow"
                      : "bg-secondary-yellow text-quaternary-yellow"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mt-20 bg-white rounded-2xl overflow-hidden shadow-sm"
        >
          <h3 className="text-xl font-bold text-quaternary-yellow p-6 border-b border-secondary-yellow">
            Detailed Plan Comparison
          </h3>
          <table className="w-full">
            <thead>
              <tr className="bg-secondary-yellow/30">
                <th className="text-left p-4 text-tertiary-yellow">Features</th>
                <th className="p-4 text-tertiary-yellow">Starter</th>
                <th className="p-4 text-tertiary-yellow">Professional</th>
                <th className="p-4 text-tertiary-yellow">Expert</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-yellow/20">
              <tr>
                <td className="p-4 text-tertiary-yellow font-medium">
                  Max Funding
                </td>
                <td className="p-4 text-center">$10,000</td>
                <td className="p-4 text-center">$25,000</td>
                <td className="p-4 text-center">$50,000</td>
              </tr>
              <tr className="bg-secondary-yellow/10">
                <td className="p-4 text-tertiary-yellow font-medium">
                  Profit Split
                </td>
                <td className="p-4 text-center">80%</td>
                <td className="p-4 text-center">85%</td>
                <td className="p-4 text-center">90%</td>
              </tr>
              <tr>
                <td className="p-4 text-tertiary-yellow font-medium">
                  Scaling Plan
                </td>
                <td className="p-4 text-center">-</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </section>
  );
}
