// src/components/LegalNotice.jsx
import { Card, CardHeader, CardBody } from "@heroui/react";
import Navbar2 from "./Navbar2";
export default function LegalNotice() {
  return (
    <section className="container mx-auto max-w-4xl py-16 px-6">
         <Navbar2/>
      <Card className="bg-black/80 border border-white/10">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Legal Notice</h1>
          <p className="text-gray-400">Important information regarding the use of this website</p>
        </CardHeader>
        <CardBody className="space-y-6 text-gray-300">
          <p>This Legal Notice sets out important warnings and statements regarding the use of the DynamoChart UG website. By using this site, you agree to these terms.</p>
          
          <h2 className="text-xl font-semibold text-white">Website Use</h2>
          <p>The information on this website is for general purposes only. We do not provide financial, legal, or professional advice. Reliance on any information is at your own risk.</p>

          <h2 className="text-xl font-semibold text-white">Third-Party Links</h2>
          <p>We are not responsible for the content or privacy practices of third-party websites linked from our site.</p>

          <h2 className="text-xl font-semibold text-white">Liability Exclusion</h2>
          <p>We exclude liability for any loss or damage arising from the use of this website, to the extent permitted by law.</p>

          <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
          <p>All content on this site is protected by copyright and may not be reproduced without permission.</p>

          <h2 className="text-xl font-semibold text-white">Applicable Law</h2>
          <p>This notice is governed by German law.</p>

          <p>For more details, see our <a href="#privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and <a href="#terms-of-service" className="text-primary hover:underline">Terms of Service</a>.</p>
        </CardBody>
      </Card>
    </section>
  );
}