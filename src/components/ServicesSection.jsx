// src/components/ServicesSection.jsx
import { useState, useEffect } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { ArrowRight, Bot, Layers, Workflow, CheckCircle2 } from "lucide-react";
import { BsClipboardData } from "react-icons/bs";
import { motion } from "framer-motion";
import LogoB from "./b2.jpg"; // ← your image added

const services = [
  {
    title: "AI consulting, development and implementation",
    desc: "Custom AI agents that automate complex business processes and decision-making",
    features: [
      "Customer service chatbots",
      "Lead qualification agents",
      "Data processing automation",
      "Workflow orchestration",
      "Multi-platform integration",
    ],
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI SaaS Platforms and Software engineering",
    desc: "Full-scale AI-powered software solutions built for enterprise deployment",
    features: [
      "Predictive analytics dashboards",
      "Content generation platforms",
      "Image/video processing tools",
      "Business intelligence suites",
      "API-first architecture",
    ],
    icon: Layers,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Workflows",
    desc: "Streamlined AI integration that connects with your existing tech stack",
    features: [
      "OpenAI GPT integrations",
      "Computer vision APIs",
      "Natural language processing",
      "Custom model deployment",
      "Real-time data processing",
    ],
    icon: Workflow,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Data & analytics",
    desc: "Full-scale AI-powered software solutions built for enterprise deployment",
    features: [
      "Predictive analytics dashboards",
      "Content generation platforms",
      "Image/video processing tools",
      "Business intelligence suites",
      "API-first architecture",
    ],
    icon: BsClipboardData,
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function ServicesSection() {
  const words = ["Automation", "Smart Analytics", "Machine Learning", "AI Agents", "Deep Learning"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 lg:py-12 overflow-hidden bg-black text-white">
      {/* YOUR NEW BACKGROUND IMAGE – SUBTLE & CLASSY */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <img
          src={LogoB}
          alt="Background"
          className="w-full h-[50%] object-cover object-[60%_0%]"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
          }}
        />
      </div>

      {/* Background glows – kept exactly as you had */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 max-w-8xl z-10">
        {/* Hero Intro with FLIP CLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-6xl font-light leading-tight tracking-tight">
            Transform your business with
            <br />
            <span className="relative">
              {/* FLIP CLOCK CONTAINER – NOW 100% WORKING */}
              <div className="relative  overflow-hidden align-middle  h-42 sm:h-24 lg:h-32 xl:h-30">
                <div className="relative w-full h-full ">
                  {words.map((word, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 flex  items-center justify-center w-full h-full"
                      style={{
                        transform: `translateY(${(i - currentWordIndex) * 100}%)`,
                        transition: "transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                    >
                      <span
                        className="bg-gradient-to-r  pb-4 mb-4 from-primary via-secondary to-pink-500 bg-clip-text text-transparent
                                   font-normal text-5xl sm:text-6xl lg:text-7xl xl:text-6xl whitespace-nowrap pt-0 mt-0"
                      >
                        {word}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </span>
          </h2>

          <p className="mt-5 text-xl lg:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            From intelligent agents to enterprise SaaS platforms — we forge cutting-edge AI tools that drive real results for modern businesses.
          </p>

          {/* <Button
            size="lg"
            color="primary"
            endContent={<ArrowRight className="w-6 h-6" />}
            className="mt-12 text-lg px-12 py-8 font-medium shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-400"
          >
            Start Your AI Journey
          </Button> */}
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-4 gap-1">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <Card className="h-full bg-white/5 max-w-[350px] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group">
                <CardBody className="p-5 space-y-3">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl text-gray-100 lg:text-2xl mb-4">{service.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{service.desc}</p>
                  </div>

                  <ul className="space-y-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary/70" />
                        <span className="text-zinc-300 text-sm lg:text-base">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}