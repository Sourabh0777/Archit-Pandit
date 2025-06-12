"use client";
import { MapPin, Phone, Mail, Send } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 pt-16 pb-8 text-gray-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="mb-4 border-b border-cyan-500 pb-2 text-xl font-bold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Know your Dr",
                "Patient Education",
                "Online Second Opinion",
                "Media",
                "Video",
                "Feedback",
                "Testimonial",
                "AS Lifeline Surgical Oncologist",
                "Contact us",
              ].map((link) => (
                <li
                  key={link}
                  className="transition-all duration-200 hover:text-cyan-400"
                >
                  ➕ {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 dark:text-white border-b border-cyan-500 pb-2 text-xl font-bold text-white">
              Treatment
            </h4>
            <ul className="space-y-2">
              {[
                "Appendix Cancer",
                "Colon Rectal Cancer",
                "Liver Cancer",
                "Pancreatic Cancer",
                "Stomach Cancer",
                "Gallbladder Cancer",
                "Head & Neck Cancer",
              ].map((item) => (
                <li
                  key={item}
                  className="transition-all duration-200 hover:text-cyan-400"
                >
                  ➕ {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b border-cyan-500 pb-2 text-xl font-bold text-white">
              More Treatment
            </h4>
            <ul className="space-y-2">
              {[
                "Lung Cancer",
                "Chest Wall Cancer",
                "Ovarian Cancer",
                "Uterine Cancer",
                "Endometrial Cancer",
                "Breast Cancer",
                "Esophagus (Food Pipe)",
              ].map((item) => (
                <li
                  key={item}
                  className="transition-all duration-200 hover:text-cyan-400"
                >
                  ➕ {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b border-cyan-500 pb-2 text-xl font-bold text-white">
              Expertise
            </h4>
            <ul className="space-y-2">
              {[
                "HIPEC Surgery",
                "Laparoscopic Cancer Surgery",
                "Video Assisted Thoracoscopic Surgery",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="transition-all duration-200 hover:text-cyan-400"
                >
                  ➕ {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b border-cyan-500 pb-2 text-xl font-bold text-white">
              Quick Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />
                <div>
                  <p className="font-semibold text-white">
                    Fortis Escorts, Okhla
                  </p>
                  <p>Opp. Sukhdev Vihar Metro Station, New Delhi - 110025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />
                <div>
                  <p className="font-semibold text-white">
                    Fortis Hospital Gurugram
                  </p>
                  <p>Opp. HUDA City Centre, Gurugram, Haryana 122002</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                <span>+91 - 9711130457</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} />
                <span>drarchitpandit@yahoo.co.in</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-l-md border-2 border-white px-4 py-2 text-white focus:outline-none"
                />
                <button className="rounded-r-md bg-cyan-500 px-4 text-white hover:bg-cyan-600">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

      
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Dr. Archit Pandit. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
