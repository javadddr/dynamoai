// src/components/AIServicesPage.jsx  ← FINAL & GORGEOUS
import { Card, CardBody } from "@heroui/react";
import { CheckCircle2, Bot, Layers, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";
import b5 from "./b5.jpg";

const services = [
  {
    title: "AI Agents & Automation",
    desc: "Transform repetitive tasks into automated workflows with our custom AI agents that learn, adapt, and execute complex business processes.",
    features: [
      "Customer service chatbots",
      "Lead qualification agents",
      "Data processing automation",
      "Workflow orchestration",
      "Multi-platform integration",
    ],
    icon: Bot,
    image: b3,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI SaaS Platforms",
    desc: "Custom-built SaaS solutions powered by machine learning that solve specific industry challenges and scale effortlessly.",
    features: [
      "Predictive analytics dashboards",
      "Content generation platforms",
      "Image/video processing tools",
      "Business intelligence suites",
      "API-first architecture",
    ],
    icon: Layers,
    image: b4,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Workflows",
    desc: "Bridge the gap between complex AI models and your existing systems with our robust API solutions and custom integrations.",
    features: [
      "OpenAI GPT integrations",
      "Computer vision APIs",
      "Natural language processing",
      "Custom model deployment",
      "Real-time data processing",
    ],
    icon: Workflow,
    image: b5,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function AIServicesPage() {
  return (
    <section className="py-24 lg:py-10 bg-black text-white">
      <div className="container mx-auto px-6 max-w-9xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-6"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-6xl xl:text-6xl font-light leading-tight tracking-tight">
            Our AI Services
          </h2>
          <p className="mt-8 text-xl lg:text-xl text-zinc-300 max-w-5xl mx-auto leading-relaxed">
            Whether you need autonomous AI agents, custom SaaS solutions, or powerful API integrations,
            Dynamochart delivers enterprise-grade artificial intelligence that scales with your ambitions.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-40">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              {/* LEFT: Beautiful high-res image with tilt & shadow */}
              <motion.div
                whileHover={{ y: -12, rotate: index % 2 === 0 ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div className="absolute  -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div className="relative rounded-xl overflow-hidden shadow-2xl mt-24 ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full  h-auto object-cover object-center block"
                    style={{
                      maxHeight: "500px",
                      aspectRatio: "7/5",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* RIGHT: Content */}
              <div className="flex flex-col justify-center space-y-10 lg:pt-16">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 flex-shrink-0`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-4xl lg:text-4xl font-light text-gray-200">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xl lg:text-xl text-zinc-300 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-6">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-5">
                      <CheckCircle2 className="w-6 h-6 text-success/70 flex-shrink-0" />
                      <span className="text-lg lg:text-lg text-zinc-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}