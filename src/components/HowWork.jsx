// src/components/HowWork.jsx  ← THE REAL FINAL VERSION (EVERYTHING INCLUDED)
import { Button, Card, CardBody } from "@heroui/react";
import { CheckCircle2, ArrowRight, Sparkles, Brain, Zap, Shield, Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";
import LogoBc1 from "./c1.jpg"; // ← your image added
import LogoBc2 from "./c2.jpg"; // ← your image added
import LogoBc3 from "./c3.jpg"; // ← your image added
const services = [
  {
    title: "AI Agents Development",
    desc: "Intelligent autonomous systems that can perform complex tasks, make decisions, and interact with users naturally.",
    features: [
      "Conversational AI with natural language processing",
      "Task automation and workflow optimization",
      "Multi-modal interactions (text, voice, vision)",
      "Integration with existing business systems",
      "Continuous learning and adaptation",
      "Custom knowledge base integration",
    ],
    useCases: [
      "Customer service automation",
      "Sales lead qualification",
      "Content creation and curation",
      "Data analysis and reporting",
      "Process automation",
    ],
    icon: Brain,
    gradient: "from-cyan-500 to-blue-600",
    image: LogoBc1,
  },
  {
    title: "SaaS Applications",
    desc: "Complete software-as-a-service platforms built with AI capabilities at their core.",
    features: [
      "Cloud-native architecture",
      "Multi-tenant infrastructure",
      "AI-powered analytics and insights",
      "Advanced user management",
      "API-first design",
      "Scalable microservices architecture",
    ],
    useCases: [
      "Business intelligence platforms",
      "Predictive maintenance systems",
      "Content management solutions",
      "E-commerce optimization tools",
      "Healthcare management systems",
    ],
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
    image: LogoBc2,
  },
  {
    title: "Legacy Platform AI Enablement",
    desc: "Transform your existing systems with AI capabilities without complete rebuilds.",
    features: [
      "API integration and modernization",
      "Data pipeline optimization",
      "AI model integration",
      "Gradual system migration",
      "Performance optimization",
      "Security enhancement",
    ],
    useCases: [
      "Database modernization",
      "Legacy system API creation",
      "Data analytics integration",
      "Process automation overlay",
      "User experience enhancement",
    ],
    icon: Shield,
    gradient: "from-emerald-500 to-teal-600",
    image: LogoBc3,
  },
];

const workingModels = [
  {
    title: "Dedicated Developer Team",
    desc: "Get a full-time dedicated team of AI developers working exclusively on your project.",
    features: [
      "Full-time dedicated resources",
      "Direct communication with developers",
      "Agile development methodology",
      "Weekly progress reports",
      "Source code ownership",
      "Flexible team scaling",
    ],
    bestFor: ["Long-term projects", "Complex AI systems", "Ongoing development needs"],
    icon: Users,
    highlighted: true,
  },
  {
    title: "Project-Based Development",
    desc: "Fixed-scope projects with defined deliverables and timelines.",
    features: [
      "Clear project milestones",
      "Fixed timeline and budget",
      "Comprehensive documentation",
      "Testing and quality assurance",
      "Post-launch support",
      "Knowledge transfer",
    ],
    bestFor: ["Specific AI implementations", "MVP development", "Proof of concepts"],
    icon: Clock,
  },
  {
    title: "Consulting & Strategy",
    desc: "AI strategy consulting and technical guidance for your internal teams.",
    features: [
      "AI strategy development",
      "Technical architecture review",
      "Technology stack recommendations",
      "Team training and mentoring",
      "Implementation roadmaps",
      "Risk assessment and mitigation",
    ],
    bestFor: ["Strategic planning", "Technical due diligence", "Team augmentation"],
    icon: Target,
  },
];

const processSteps = [
  { num: "1", title: "Discovery & Planning", time: "1-2 weeks", items: ["Requirements gathering and analysis", "Technical feasibility assessment", "Architecture design and planning", "Project timeline and milestone definition", "Risk assessment and mitigation planning"] },
  { num: "2", title: "Design & Prototyping", time: "2-3 weeks", items: ["UI/UX design and user journey mapping", "Technical architecture finalization", "Database design and data modeling", "API specification and documentation", "Proof of concept development"] },
  { num: "3", title: "Development & Integration", time: "4-12 weeks", items: ["Core functionality development", "AI model training and optimization", "Third-party integrations", "Security implementation", "Performance optimization"] },
  { num: "4", title: "Testing & Quality Assurance", time: "2-3 weeks", items: ["Comprehensive testing (unit, integration, E2E)", "AI model validation and testing", "Security auditing and penetration testing", "Performance testing and optimization", "User acceptance testing"] },
  { num: "5", title: "Deployment & Launch", time: "1-2 weeks", items: ["Production environment setup", "Deployment automation and CI/CD", "Monitoring and alerting setup", "Documentation and training", "Go-live support and monitoring"] },
  { num: "6", title: "Support & Maintenance", time: "Ongoing", items: ["24/7 monitoring and support", "Regular updates and security patches", "Performance optimization", "Feature enhancements", "AI model retraining and improvement"] },
];

const whyChoose = [
  { title: "Proven Track Record", desc: "105+ dedicated AI developers with $2.3M in client cost savings and 99.9% uptime across platforms." },
  { title: "AI Expertise", desc: "Specialized in cutting-edge AI technologies including machine learning, natural language processing, and computer vision." },
  { title: "Flexible Solutions", desc: "Adaptable working models and custom solutions tailored to your specific business needs and constraints." },
  { title: "Enterprise Security", desc: "Bank-level security, compliance with industry standards, and robust data protection protocols." },
];

export default function HowWork() {
  return (
    <section className="relative py-14 lg:py-14 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        {/* How We Work Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-6xl xl:text-6xl font-light leading-tight tracking-tight">How We Work</h2>
          <p className="mt-6 text-xl lg:text-2xl text-zinc-400">Our AI Development Process</p>
          <p className="mt-4 text-lg text-zinc-500 max-w-4xl mx-auto">From concept to deployment, we follow a proven methodology to deliver exceptional AI solutions that drive real business results.</p>
        </motion.div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {["Goal-Oriented", "Quality Assured", "Transparent"].map((val, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-light text-gray-200">{val}</h3>
              <p className="mt-3 text-zinc-400">
                {val === "Goal-Oriented" && "Every project starts with clear objectives and measurable outcomes."}
                {val === "Quality Assured" && "Rigorous testing and quality assurance at every stage."}
                {val === "Transparent" && "Regular updates and open communication throughout the process."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Our Service Offerings */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-32">
          <h3 className="text-4xl lg:text-5xl font-light text-center mb-6">Our Service Offerings</h3>
          <p className="text-center text-xl text-zinc-400 mb-16">We offer three core AI services to transform your business operations and drive innovation.</p>

          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-light text-gray-200">{service.title}</h4>
                  </div>
                  <p className="text-xl text-zinc-300 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                      <h5 className="text-lg font-medium text-primary mb-4">Key Features</h5>
                      <ul className="space-y-3">
                        {service.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5" />
                            <span className="text-zinc-300">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-primary mb-4">Use Cases</h5>
                      <ul className="space-y-3">
                        {service.useCases.map((u, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary/70 rounded-full mt-2" />
                            <span className="text-zinc-300">{u}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/10">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-auto object-cover object-center block rounded-3xl"
      style={{
        maxHeight: "600px",
        aspectRatio: "7/5",
      }}
    />
  </div>
</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Working Models */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-32">
          <h3 className="text-4xl lg:text-5xl font-light text-center mb-6">Working Models</h3>
          <p className="text-center text-xl text-zinc-400 mb-16">Choose the engagement model that best fits your project needs and business requirements.</p>

          <div className="grid md:grid-cols-3 gap-10">
            {workingModels.map((model, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl border ${model.highlighted ? "bg-white/10 border-primary/50 shadow-2xl shadow-primary/20" : "bg-white/5 border-white/10"}`}>
                <model.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h4 className="text-2xl font-light text-center mb-4">{model.title}</h4>
                <p className="text-zinc-300 text-center mb-8">{model.desc}</p>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-medium text-primary mb-4">Features</h5>
                    <ul className="space-y-3">
                      {model.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5" />
                          <span className="text-zinc-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-primary mb-4">Best For</h5>
                    <ul className="space-y-3">
                      {model.bestFor.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary/70 rounded-full mt-2" />
                          <span className="text-zinc-300 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-32">
          <h3 className="text-4xl lg:text-5xl font-light text-center mb-6">Development Process</h3>
          <p className="text-center text-xl text-zinc-400 mb-16">Our structured approach ensures quality delivery and transparent progress tracking throughout your project.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 hover:border-primary/30 transition-all duration-500 group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl">
                  {step.num}
                </div>
                <h4 className="text-2xl font-light mt-10 mb-3 text-gray-200">{step.title}</h4>
                <p className="text-primary font-medium mb-6">{step.time}</p>
                <ul className="space-y-4">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary/70 mt-0.5" />
                      <span className="text-zinc-300 text-sm lg:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Dynamochart */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-3xl p-12 lg:p-20 text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-light mb-16">Why Choose Dynamochart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-4">
                <h4 className="text-2xl lg:text-3xl font-light text-primary">{item.title}</h4>
                <p className="text-lg text-zinc-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
      
      </div>
    </section>
  );
}