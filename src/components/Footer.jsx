// src/components/Footer.jsx (updated links to routes)
import { Link } from "@heroui/react";
import { Mail, Globe, Building, Users } from "lucide-react";
import logos from "./logo512.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6 mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Overview */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
              <img src={logos} alt="logos" className="w-10 h-10 text-white" />
              DynamoChart UG
            </h3>
            <p className="text-gray-400 mb-4">
              Innovative solutions for modern business needs.
            </p>
            <div className="flex gap-4">
              <Link href="https://dynamochart.com/" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="mailto:sales@dynamochart.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-6 text-xl">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/legal-notice" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact
            </h3>
            <p className="text-gray-400 mb-2">Lise-Meitner-Straße 25</p>
            <p className="text-gray-400 mb-2">06122 Halle (Saale), Germany</p>
            <p className="text-gray-400 mb-2">Internet: dynamochart.com</p>
            <p className="text-gray-400 mb-2">Contact: sales@dynamochart.com</p>
            <p className="text-gray-400 mb-2">Sitz der Gesellschaft/Registered office: Neuss</p>
          </div>

          {/* Registration Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Registration
            </h3>
            <p className="text-gray-400 mb-2">Eintragung/Commercial Register: Amtsgericht Neuss HRB 23027</p>
            <p className="text-gray-400 mb-2">VAT identification number (USt-ID): DE361618143</p>
            <p className="text-gray-400 mb-2">Geschäftsführung/Managing Directors: Javad Khalil Arjmandi</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 DynamoChart UG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}