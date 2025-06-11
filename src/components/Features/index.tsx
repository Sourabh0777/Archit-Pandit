"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
// import SingleFeature from "./SingleFeature";
// import featuresData from "./featuresData";

const tabs = [
  {
    key: "hipec",
    label: "HIPEC Surgery",
    image: "https://www.drarchitpandit.com/images/hipec.jpg",
    description:
      "HIPEC is a heated chemotherapy delivered directly into the abdomen. It's effective for peritoneal cancers and helps minimize side effects by targeting the cancer site directly.",
  },
  {
    key: "laparoscopic",
    label: "Laparoscopic Cancer Surgery",
    image: "https://www.drarchitpandit.com/images/vats.jpg",
    description:
      "Minimally invasive laparoscopic surgery uses small incisions and a camera for precision. It's associated with less pain, quicker recovery, and better cosmetic results.",
  },
  {
    key: "vats",
    label: "VATS & Thoracoscopic Surgery",
    image: "https://www.drarchitpandit.com/images/Laproscopic.jpg",
    description:
      "VATS (Video-Assisted Thoracoscopic Surgery) is a minimally invasive chest surgery for lung, esophageal, and mediastinal tumors with fewer complications and faster recovery.",
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("hipec");

  const current = tabs.find((tab) => tab.key === activeTab)!;
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-7xl">
          <SectionTitle
            title="Our Expertise"
            paragraph="Laparoscopic cancer Surgery - Painess treatment option for cancer!"
            center
          />

          <div className="px-4 py-4 text-gray-800">
            <div className="mx-auto max-w-5xl">
              
              <div className="mb-10 flex flex-wrap justify-center gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab.key
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              
              <div className="grid items-center gap-10 rounded-xl bg-gray-50 p-6 shadow-lg md:grid-cols-2">
                <img
                  src={current.image}
                  alt={current.label}
                  className="h-auto w-full rounded-lg shadow"
                />
                <div>
                  <h2 className="mb-4 text-2xl font-bold">{current.label}</h2>
                  <p className="leading-relaxed text-gray-700">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
