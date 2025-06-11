"use client"
import { useState } from "react";
import profile from "../../../public/profile.webp";

const Breadcrumb = () => {
  const [expanded, setExpanded] = useState(false);

  // Full paragraphs content
  const paragraphs = [
    `I am a Surgical Oncologist based in Delhi-NCR, specializing in thoracic and gastroesophageal malignancies, with a strong emphasis on minimally invasive oncology procedures. I was honored with the Best Outgoing Surgeon Award (2008) by Rajiv Gandhi University of Health Sciences and received advanced training in Surgical Oncology at AIIMS, New Delhi.`,
    `With over 12 years of academic and clinical experience post-MS in General Surgery, I’ve held leadership roles at premier institutions like MAX Institute of Cancer Care and SHALBY Sanar International Hospital. Currently, I serve as Director & Head of Surgical Oncology at Fortis Escorts, Okhla and Fortis Hospital, Gurugram.`,
    `Recognized as one of the best oncologists in Gurgaon, I am known for my compassionate, patient-focused approach and individualized treatment plans. My clinical work includes Laparoscopic D2 gastrectomies, Thoracoscopic Esophageal surgeries, and Open Lung resections (Lobectomies and Pneumonectomies).`,
    `I have received the Video Award at the Indian Cancer Congress (2013) and the Best Video Award at ACOS (2016). My research is primarily focused on Esophageal Cancers and has been published in leading national and international journals.`,
    `I am a firm believer in evidence-based practice. I speak English, Hindi, Marathi, and Punjabi, enabling effective communication with a diverse patient population.`,
  ];

 
  const previewCount = 2;

  return (
    <section className="relative z-10 overflow-hidden pt-10  dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 mt-10">
            <div className="mb-12 max-w-[570px]">
              <h1 className="mb-8 text-4xl font-extrabold text-black dark:text-white">
                Dr. Archit Pandit
              </h1>

              { (expanded ? paragraphs : paragraphs.slice(0, previewCount)).map((para, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}

              <button
                className="text-green-600 font-semibold hover:underline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "See less" : "See more"}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – Image + Badge */}
          <div className="relative w-1/2">
            <div
              className="h-[700px] w-[700px] rounded-full bg-green-800 bg-cover"
              style={{ backgroundImage: `url(${profile.src})` }}
            ></div>

            <span className="absolute bottom-25 rounded-full left-3 flex h-auto w-44 border-2 border-black bg-white px-4 py-2 shadow-md">
              <span className="text-4xl font-extrabold text-black">10</span>
              <span className="text-3xl font-extrabold text-green-600">+</span>
              <div className="ml-2 flex flex-col leading-4">
                <span className="text-xs font-bold text-black">YEARS OF</span>
                <span className="text-xs font-bold text-black">SURGICAL</span>
                <span className="text-xs font-bold text-green-600">EXPERIENCE</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
