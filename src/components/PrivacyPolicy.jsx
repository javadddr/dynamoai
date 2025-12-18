// src/components/PrivacyPolicy.jsx
import { Card, CardHeader, CardBody } from "@heroui/react";
import Navbar2 from "./Navbar2";
export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto max-w-4xl py-16 px-6">
      <Navbar2/>
      <Card className="bg-black/80 border border-white/10">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: December 14, 2025</p>
        </CardHeader>
        <CardBody className="space-y-6 text-gray-300">
          <p>DynamoChart UG is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal data when you use our website and services.</p>
          
          <h2 className="text-xl font-semibold text-white">What Data Do We Collect?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data (IP address, browser type, pages visited, etc.)</li>
            <li>Any other data you provide through forms or interactions</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">How Do We Collect Your Data?</h2>
          <p>You directly provide us with most of the data we collect. We collect and process data when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Register or contact us via forms</li>
            <li>Use our website via browser cookies</li>
            <li>Interact with our services</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">How Will We Use Your Data?</h2>
          <p>We collect your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Process inquiries and bookings</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">How Do We Store Your Data?</h2>
          <p>We securely store your data on servers located in the EU. We retain your data for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>

          <h2 className="text-xl font-semibold text-white">Your Data Protection Rights</h2>
          <p>Under GDPR, you have rights including access, rectification, erasure, restriction, objection, and data portability. To exercise these, contact us at sales@dynamochart.com.</p>

          <h2 className="text-xl font-semibold text-white">Cookies</h2>
          <p>We use cookies to improve your experience. You can manage cookies via your browser settings.</p>

          <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
          <p>We may update this policy. Changes will be posted here.</p>

          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p>If you have questions, email us at sales@dynamochart.com or write to: DynamoChart UG, Lise-Meitner-Straße 25, 06122 Halle (Saale), Germany.</p>
        </CardBody>
      </Card>
    </section>
  );
}