import { Modal, Chip, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@heroui/react";
import { X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';  // Add this import

export default function ContactModal({ isOpen, onOpenChange }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async () => {
    if (email.trim() === "") {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSubmitError("");
    setIsLoading(true);

    const templateParams = {
      name,
      company,
      email,
      budget,
      message: details,  // Map 'details' value to 'message' key for the template
      to_email: 'sales@dynamochart.com',  // If your template uses this
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setBudget("");
    setDetails("");
    setEmailError(false);
    setIsSubmitted(false);
    setSubmitError("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) resetForm(); // Reset on close
        onOpenChange(open);
      }}
      placement="center"
      backdrop="blur"
      classNames={{
        base: "bg-black/95 border border-white/10 backdrop-blur-3xl",
        header: "border-b border-white/10",
        footer: "border-t border-white/10",
        closeButton: "hover:bg-white/10",
      }}
      motionProps={{
        variants: {
          enter: { y: 0, opacity: 1, transition: { duration: 0.4 } },
          exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {!isSubmitted ? (
              <>
                <ModalHeader className="flex flex-col gap-2 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-4"
                  >
                    <Sparkles className="w-full h-full text-white" />
                  </motion.div>
                  <Button color="warning" radius="sm" variant="flat" className="text-2xl">
                    Let's Build Your AI Future
                  </Button>
                  <p className="text-gray-400">Tell us about your project — get a free consultation in 24h</p>
                </ModalHeader>
                <ModalBody className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      variant="bordered"
                      color="warning"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      classNames={{ inputWrapper: "border-white/20 hover:border-primary/50 text-gray-100" }}
                    />
                    <Input
                      label="Company"
                      placeholder="Acme Inc."
                      color="warning"
                      variant="bordered"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      classNames={{ inputWrapper: "border-white/20 hover:border-primary/50 text-gray-100" }}
                    />
                  </div>
                  <Input
                    label="Email"
                    color="warning"
                    type="email"
                    placeholder="john@acme.com"
                    variant="bordered"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false); // Clear error on change
                    }}
                    isRequired
                    isInvalid={emailError}
                    errorMessage={emailError ? "Email is required" : ""}
                    classNames={{ inputWrapper: "border-white/20 hover:border-primary/50 text-gray-100" }}
                  />
                  <Input
                    label="Budget Range"
                    color="warning"
                    placeholder="$50,000 – $500,000+"
                    variant="bordered"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    classNames={{ inputWrapper: "border-white/20 hover:border-primary/50 text-gray-100" }}
                  />
                  <Textarea
                    label="Project Details"
                    color="warning"
                    placeholder="Tell us about your AI goals, timeline, and challenges..."
                    minRows={4}
                    variant="bordered"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    classNames={{ inputWrapper: "border-white/20 hover:border-primary/50 text-gray-100" }}
                  />
                  {submitError && <p className="text-danger text-sm">{submitError}</p>}
                </ModalBody>
                <ModalFooter className="flex flex-col sm:flex-row gap-4">
                  <Button size="md" color="primary" onPress={handleSubmit} isDisabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Request'}
                  </Button>
                  <Button size="md" variant="bordered" color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </>
            ) : (
              <>
                <ModalHeader className="flex flex-col gap-2 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-4"
                  >
                    <Sparkles className="w-full h-full text-white" />
                  </motion.div>
                  <Button color="warning" radius="sm" variant="flat" className="text-2xl">
                    Thank You!
                  </Button>
                </ModalHeader>
                <ModalBody className="text-center text-gray-300">
                  <p>Thank you for contacting us. We will contact you in max 24 hours.</p>
                </ModalBody>
                <ModalFooter className="flex justify-center">
                  <Button size="md" color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}