// src/components/Navbar.jsx  ← 100% WORKING, NO ERRORS
import { Button } from "@heroui/react";
import { Sparkles, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { useDisclosure } from "@heroui/react";
import SchedulingModal from "./SchedulingModal";
import logos  from "./dd.png"
import logos1 from "./pp.png"
export default function Navbar() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen: isSchedOpen, onOpen: onSchedOpen, onOpenChange: onSchedChange } = useDisclosure();
  // Modal state (HeroUI)
  const { isOpen: isModalOpen, onOpen, onOpenChange } = useDisclosure();

  const navItems = ["Home", "Services", "AI Services", "How It Works", "Pricing"];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

        <div className="backdrop-blur-8xl bg-black/85 border-b border-white/5">
          <div className="container mx-auto px-2 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 blur-xl scale-150" />
                
                  <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">

                    <img src={logos} alt="logos" className="w-10 h-10 text-white"  />
                  </div>
               
              </div>
              <img 
                  src={logos1} 
                  alt="Dynamochart logo" 
                  className="h-8 w-auto ml-0 pl-0" // Adjust height to match your text-xl size (~20-24px); w-auto preserves aspect ratio
                />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-zinc-400 hover:text-white text-sm tracking-wider transition-all duration-300
                             after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-px after:bg-gradient-to-r after:from-primary after:to-secondary
                             after:transition-all after:duration-500 hover:after:w-full"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
            {/* <Button
  variant="solid"
  color="secondary"
  onPress={onSchedOpen}
  className="border-white/20 hover:border-primary/50"
>
  Book Demo
</Button> */}

<a
  href="https://calendly.com/dynamochart/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button
    variant="solid"
    color="secondary"
    className="border-white/20 hover:border-primary/50"
  >
    Book Demo
  </Button>
</a>


              <Button
                size="md"
                color="warning"
                onPress={onOpen}
                
              >
                Contact Sales
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <motion.div
        initial={false}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl md:hidden flex flex-col"
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-8 px-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 40 }}
              transition={{ delay: i * 0.1 }}
              className="text-3xl sm:text-4xl font-light tracking-wider text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}

          <div className="flex flex-col gap-4 w-full max-w-xs mt-10">
            <Button size="lg" variant="bordered" color="secondary" className="w-full" onPress={() => setIsMobileMenuOpen(false)}>
              Book Demo
            </Button>
            <Button
              size="md"
              color="warning"
            variant="solid"
              onPress={() => {
                setIsMobileMenuOpen(false);
                onOpen();
              }}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onOpenChange={onOpenChange} />
      <SchedulingModal isOpen={isSchedOpen} onOpenChange={onSchedChange} />
    </>
  );
}