import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section className="bg-white py-12 dark:bg-[#121723]">
      <div className="container mx-auto px-4 ">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          Treatment
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Gastrointestinal Cancers",
              icon: "🧠",
              desc: "Gastrointestinal Cancers spread to nearby organs and blood vessels.",
            },
            {
              title: "Gynaecological cancer",
              icon: "⚕️",
              desc: "Gynaecological cancer is cancer that begins in the gallbladder.",
            },
            {
              title: "Thoracic/Chest cancers",
              icon: "🫁",
              desc: "Thoracic/Chest cancers treatment depends on the size, location.",
            },
            {
              title: "Head And Neck Cancer",
              icon: "🦴",
              desc: "1-2% of pancreatic cancers are neuroendocrine tumors.",
            },
            {
              title: "Breast Cancer",
              icon: "🎗️",
              desc: "Breast cancer forms in the cells of the breasts. It's the most common after skin cancer.",
            },
          ].map(({ title, icon, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {desc}
                    <span className="ml-1 cursor-pointer font-medium text-blue-600 hover:underline">
                      Read More...
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
