// src/components/HeroSection.jsx
import { Button, Card, CardBody } from "@heroui/react";
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Bot, 
  FileText, 
  Truck, 
  Factory, 
  Shield, 
  Zap, 
  Cpu,
  CheckCircle2 
} from "lucide-react";
import brainImg from "./brain.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  const features = [
    { icon: Brain,       label: "Custom LLMs & Fine-tuning", color: "secondary" },
    { icon: Bot,         label: "Autonomous AI Agents",      color: "primary" },
    { icon: FileText,    label: "Document & PDF Intelligence", color: "success" },
    { icon: Truck,       label: "Logistics & Route Optimization", color: "warning" },
    { icon: Factory,     label: "Smart Manufacturing AI",   color: "danger" },
    { icon: Cpu,         label: "Private Inference Engines", color: "secondary" },
    { icon: Shield,      label: "On-Prem / Air-Gapped Deployments", color: "primary" },
    { icon: Zap,         label: "Real-time Predictive Systems", color: "success" },
  ];

  const pills = [
    "AI Chat & Voice Agents",
    "Route & Logistics Optimization",
    "Smart Manufacturing AI",
    "PDF / Document Intelligence",
    "Predictive Analytics",
    "Computer Vision Systems",
    "Full Training + Fine-tuning",
    "24/7 Hosting & Support",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-3">
      {/* Background brain image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 lg:w-[67%] lg:left-0">
          <img
            src={brainImg}
            alt="AI Brain"
            className="w-full h-full object-cover object-center opacity-30 
                       brightness-150 contrast-120 
                       scale-110 
                       lg:object-right"
            style={{
              maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-600/10 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 max-w-7xl z-10">
        {/* Mobile-first: stack vertically, desktop: 2 columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT - Text Content */}
          <div className="max-w-xl space-y-6 lg:space-y-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mx-auto lg:mx-0"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-widest text-sm">
                SOVEREIGN AI SYSTEMS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-light leading-tight tracking-tighter"
            >
              AI That
              <br />
              <span className="font-normal bg-gradient-to-r from-primary via-secondary to-pink-500 bg-clip-text text-transparent">
                Belongs
              </span>
              <br />
              Entirely To You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-zinc-300 leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0"
            >
              We design, train, deploy, and maintain fully proprietary AI — 
              from custom foundation models to secure private-cloud infrastructure.
            </motion.p>

            {/* Pills - better mobile wrap */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 px-4"
            >
              {pills.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm whitespace-nowrap"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons - stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
            >
            <a
  href="https://calendly.com/dynamochart/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    color="primary"
    endContent={<ArrowRight className="w-6 h-6" />}
    className="w-full sm:w-auto"
  >
    Schedule Executive Briefing
  </Button>
</a>
<Button
  size="lg"
  variant="bordered"
  color="secondary"
  onPress={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
  className="w-full sm:w-auto"
>
  View Capabilities
</Button>
            </motion.div>
          </div>

          {/* RIGHT - Cards: 1 column on mobile, 2 on lg+ */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto max-w-2xl lg:max-w-none"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Card className="dark backdrop-blur-xl border border-gray-600 h-full">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <path d="M50 80 Q200 20 350 80" fill="none" stroke="currentColor" strokeWidth="1.5" className={`text-${item.color} animate-draw`} />
                      <path d="M80 180 Q200 100 320 180" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${item.color} opacity-60 animate-draw-delayed`} />
                      <circle cx="200" cy="80" r="4" fill="currentColor" className={`text-${item.color}`}>
                        <animate attributeName="r" values="4;7;4" dur="4s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>

                  <CardBody className="p-6 sm:p-8 relative z-10">
                    <div className={`p-4 w-fit rounded-xl bg-${item.color}/10`}>
                      <item.icon className={`w-11 h-11 text-${item.color}`} />
                    </div>
                    <p className="mt-6 text-sm sm:text-md text-zinc-300 font-light tracking-wide">
                      {item.label}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom tagline - centered & visible on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}

        >
          <p className="text-md tracking-widest text-gray-200 uppercase mt-2">
            Private • Secure • Production-Ready
          </p>
        </motion.div>
      </div>
    </section>
  );
}