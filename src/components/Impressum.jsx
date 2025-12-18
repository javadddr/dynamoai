// src/components/Impressum.jsx (unchanged, but confirming)
import { Card, CardHeader, CardBody } from "@heroui/react";
import Navbar2 from "./Navbar2";
export default function Impressum() {
  return (
    <section className="container mx-auto max-w-4xl py-16 px-6">
         <Navbar2/>
      <Card className="bg-black/80 border border-white/10">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Impressum</h1>
          <p className="text-gray-400">Pursuant to § 5 TMG (German Telemedia Act)</p>
        </CardHeader>
        <CardBody className="space-y-6 text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Company Information</h2>
            <p>DynamoChart UG (haftungsbeschränkt)</p>
            <p>Lise-Meitner-Straße 25</p>
            <p>06122 Halle (Saale), Germany</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
            <p>Email: <a href="mailto:sales@dynamochart.com" className="text-primary hover:underline">sales@dynamochart.com</a></p>
            <p>Website: <a href="https://dynamochart.com" className="text-primary hover:underline">dynamochart.com</a></p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Registration</h2>
            <p>Registered office: Neuss</p>
            <p>Commercial Register: Amtsgericht Neuss HRB 23027</p>
            <p>VAT identification number (USt-ID): DE361618143</p>
            <p>Managing Director: Javad Khalil Arjmandi</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Supervisory Authority</h2>
            <p>[If applicable, add details of any supervisory authority or professional association]</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">EU Dispute Resolution</h2>
            <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
            <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Liability for Content</h2>
            <p>As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. However, according to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Liability for Links</h2>
            <p>Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Copyright</h2>
            <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.</p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}