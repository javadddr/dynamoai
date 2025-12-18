// src/components/TermsOfService.jsx
import { Card, CardHeader, CardBody } from "@heroui/react";
import Navbar2 from "./Navbar2";
export default function TermsOfService() {
  return (
    <section className="container mx-auto max-w-4xl py-16 px-6">
         <Navbar2/>
      <Card className="bg-black/80 border border-white/10">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <p className="text-gray-400">Effective Date: December 14, 2025</p>
        </CardHeader>
        <CardBody className="space-y-6 text-gray-300">
          <p>These Terms of Service ("Terms") govern your use of the DynamoChart UG website and services ("Services"). By accessing or using our Services, you agree to these Terms.</p>
          
          <h2 className="text-xl font-semibold text-white">Scope of Services</h2>
          <p>We provide AI-driven solutions, including recommendation engines, predictive maintenance, data analysis, and more. Services are provided "as is" without warranties.</p>

          <h2 className="text-xl font-semibold text-white">User Obligations</h2>
          <p>You agree to use the Services in compliance with laws and not for illegal purposes. You are responsible for your content and data.</p>

          <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
          <p>All IP in our Services remains our property. You grant us a license to use your data for providing Services.</p>

          <h2 className="text-xl font-semibold text-white">Fees and Payment</h2>
          <p>Fees are as agreed in separate contracts. Payments are due as specified.</p>

          <h2 className="text-xl font-semibold text-white">Confidentiality</h2>
          <p>Both parties agree to keep confidential information secure.</p>

          <h2 className="text-xl font-semibold text-white">Termination</h2>
          <p>We may terminate access for breach. Upon termination, you must cease use of Services.</p>

          <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
          <p>Our liability is limited to direct damages up to fees paid. No liability for indirect damages.</p>

          <h2 className="text-xl font-semibold text-white">Governing Law</h2>
          <p>These Terms are governed by German law. Disputes shall be resolved in courts of Neuss, Germany.</p>

          <h2 className="text-xl font-semibold text-white">Changes to Terms</h2>
          <p>We may update these Terms. Continued use constitutes acceptance.</p>

          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p>For questions, contact us at sales@dynamochart.com.</p>
        </CardBody>
      </Card>
    </section>
  );
}