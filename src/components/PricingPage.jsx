// src/components/PricingPage.jsx  ← FINAL & MOBILE-PERFECT
import { Button, Card, CardBody } from "@heroui/react";
import { Check, Sparkles, ArrowRight,CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Logoi from "./t1.jpg"
const plans = [
  {
    name: "Starter",
    price: "$3,500",
    discounted: "$2,500",
    per: "/month",
    desc: "Start testing the power",
    features: [
      "1 dedicated developer",
      "AI agent development",
      "Standard integrations",
      "Email support",
      "Monthly progress reports",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$9,999",
    per: "/month",
    desc: "Best for growing teams",
    features: [
      "3 dedicated developers",
      "AI agents & SaaS applications",
      "Advanced integrations",
      "Priority support",
      "Weekly strategy calls",
      "Custom dashboard",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$15,000+",
    per: "/month",
    desc: "Unlimited scale & support",
    features: [
      "Dedicated development team",
      "Full AI platform development",
      "24/7 priority support",
      "Custom SaaS deployment",
      "White-label solutions",
      "Unlimited project scope",
    ],
    highlighted: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
 
    desc: "Built exactly for your vision",
    features: [
      "Flexible team scaling",
      "Bespoke AI development",
      "Industry-specific solutions",
      "Multi-platform deployment",
      "Ongoing optimization & support",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <section className="relative  bg-black text-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        {/* 29% OFF Banner */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl px-2 py-2 backdrop-blur-xl">
            <Sparkles className="w-8 h-8 text-emerald-400" />
            <span className="text-xl sm:text-xl font-medium text-emerald-300 text-center">
              Limited Time: <strong className="text-xl sm:text-3xl">29% OFF</strong> on Starter Plan
            </span>
            <Sparkles className="w-8 h-8 text-emerald-400" />
          </div>
          <p className="mt-4  sm:text-xl text-zinc-400">
            Hire AI Developer – <s>$3,500</s> → <strong className="text-emerald-400 text-xl sm:text-xl">$2,500/month</strong>
          </p>
          <div className="w-full flex items-center justify-center py-8">
  <div className="w-full max-w-2xl">  {/* ← controls the maximum size */}
    <img
      src={Logoi}
      alt="Background"
      className="w-full h-auto object-contain object-center"
      style={{
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
      }}
    />
  </div>
</div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight">
            Transparent Pricing
          </h2>
          <p className="mt-8 text-xl lg:text-2xl text-zinc-400">
            Choose the perfect plan for your AI transformation journey
          </p>
        </motion.div>

        {/* MOBILE-FRIENDLY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                    {plan.badge}
                  </div>
                </div>
              )}

              <Card
                className={`h-full relative overflow-hidden  transition-all duration-500 group ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-white/12 to-white/4 border-2 border-primary/70 shadow-2xl shadow-primary/30"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Inner glow for Pro */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60" />
                )}

                <CardBody className="p-2 lg:p-3 space-y-3 relative z-10 flex flex-col">
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-light text-gray-200">{plan.name}</h3>
                    {plan.desc && <p className="mt-2 text-sm lg:text-base text-zinc-400">{plan.desc}</p>}
                  </div>

                  <div className="text-center">
                    <div className="flex items-end justify-center gap-2 ">
                      {plan.discounted ? (
                        <>
                          <span className="text-xl lg:text-xl text-zinc-500 line-through">{plan.price}</span>
                          <span className="text-4xl lg:text-xl font-light text-emerald-400">{plan.discounted}</span>
                        </>
                      ) : (
                        <Button color="warning" variant="solid" className="text-2xl lg:text-2xl ">{plan.price}</Button>
                      )}
                      <span className="text-lg lg:text-xl text-gray-100">{plan.per}</span>
                    </div>
                  </div>

                  {/* LEFT-ALIGNED + GLOWING CHECKS */}
                  <ul className="space-y-5 flex-1">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <div className="relative mt-0.6">
                        <CheckCircle2 className="w-5 h-5 text-warning/70 mt-0.5" />
                          <div className="absolute inset-0 blur-xl bg-primary/50 -z-10" />
                        </div>
                        <span className="text-md lg:text-md text-zinc-300 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* PERFECT MOBILE BUTTONS */}
                  <a
  href="https://calendly.com/dynamochart/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
                  <Button
                    size="lg"
                    className="w-full"
                    color="warning"
                    variant={`${plan.highlighted
                      ? "solid"
                      : plan.cta
                      ? "flat"
                      : "flat"
                    }`}
                  
                    endContent={plan.cta ? null : <ArrowRight className="w-6 h-6" />}
                  >
                    {plan.cta || "Get Started"}
                  </Button>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}