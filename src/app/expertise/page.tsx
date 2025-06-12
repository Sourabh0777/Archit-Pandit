"use client";
import Image from "next/image";
import doctor from "../../../public/doctor.png";
import AboutSectionOne from "@/components/About/AboutSectionOne";

const HipecSurgery = () => {
  return (
    <section className="bg-white px-4 py-20 text-gray-800 dark:bg-[#1B2533] dark:text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-6 border-l-4 border-blue-500 pl-4 text-4xl font-bold">
            HIPEC Surgery
          </h1>
          <p className="mb-4 text-base">
            HIPEC surgery, also known as heated or hyperthermic intraperitoneal
            chemotherapy, is the process of heating chemotherapy drugs and
            delivering them into the abdominal cavity. This treatment is often
            combined with cytoreductive surgery and is an effective approach for
            peritoneal mesothelioma.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            During the HIPEC procedure, the surgeon will continuously circulate
            a heated sterile solution–containing a chemotherapeutic
            agent–throughout the peritoneal cavity, for a maximum of two hours.
            The HIPEC procedure is designed to attempt to kill any remaining
            cancer cells. The procedure also improves drug absorption and effect
            with minimal exposure to the rest of the body. In this way, the
            normal side effects of chemotherapy can be avoided.
          </p>
          <h2 className="mt-10 mb-2 text-2xl font-semibold text-blue-800">
            HIPEC therapy for ovarian cancers , colon cancers and gastric
            cancers
          </h2>
          <h3 className="mb-2 text-lg font-semibold">
            5 important things that you should know about HIPEC therapy for
            cancers
          </h3>
          <p className="mb-4">
            There are certain types of cancers which are difficult to treat.
            Cancers such as Colon Cancers, ovarian cancers which spread to the
            peritoneum only and not elsewhere are difficult to treat as the
            chemotherapy finds itself difficult to reach the peritoneum surface
            and hence these tumors are best treated by HIPEC.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={doctor}
            height={500}
            width={500}
            alt="HIPEC Surgery"
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="mx-auto mt-4 max-w-7xl">
          <h4 className="font-bold text-blue-700">
            1. So, what is Hyperthermic intraperitoneal chemotherapy (HIPEC)?
          </h4>
          <p>
            HIPEC stands for Hyperthermic IntraPEritoneal Chemotherapy. Certain
            cancers which are limited to peritoneum lining can receive HIPEC. In
            basic language it’s a chemotherapy medicine which is heated around
            42-degreeCelsius so that it penetrates tissues better. Conventional
            injectable chemotherapy is not able to reach the peritoneal surface
            and HIPEC delivers chemotherapy straightly to the cancer cells in
            the abdomen.
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-7xl">
          <h4 className="font-bold text-blue-700">
            2. What all cancers can be treated by HIPEC surgery
          </h4>
          <p>
            Certain cancers such as colon cancers , ovarian cancers , gastric
            cancers , mesotheliaoms , primary peritoneal carcinomatosis , and
            appendiceal cancers can be treated by HIPEC surgery. Can HIPEC be
            done in all patients who suffer from above mentioned cancers. NO.
            HIPEC is a very selective procedure which can only be done in those
            patients of above mentioned cancers in whome the tumour has not
            spread beyond the peritoneum. For eg,if the disease has gone to
            liver or lungs or other parts of the body then HIPEC is
            contraindicated .
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <h1 className="text-3xl font-bold text-blue-700">
            Is HIPEC surgery risky ?
          </h1>
          <p>
            NO. Despite the complexity of the surgery and the hemodynamic
            changes that happen during the surgery now days HIPEC is a safe
            surgery with life risk not ranging beyond 3 % in experience hands .
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <h1 className="text-3xl font-bold text-blue-700">
            Can HIPEC be performed in any Center{" "}
          </h1>
          <p>
            NO. It’s important to realize that HIPEC is a specialized procedure
            and it can be performed best by those who have good experience in
            handling this surgery . A good anesthesia unit is equally important
            as the surgeon who is performing the surgery. Now a days we are
            seeing more and more patients surviving the 5yr survival barrier
            with good Cytoreductive surgery and HIPEC surgery as compared to
            years back when we used to call these patients incurable. Refer to
            our patient testimonial below who is now a 5 year cancer survivor
            who had Stage IIIC ovarian cancer. A few years back we use to
            consider these patients inoperable and incurable however now we can
            aim for cure in these subsets of patient .
          </p>
        </div>
        <div>
          <h4 className="font-bold text-blue-700">How is HIPEC performed?</h4>
          <h5 className="mt-2 font-bold">Phase I: Cytoreductive Surgery</h5>
          <p className="mt-2">
            Firstly, the doctor performs cytoreductive surgery to evacuate as
            much tumor as possible from the abdominal cavity. Without this
            surgery, HIPEC is ineffective because the chemo drugs are not able
            to penetrate deep into cancerous tumors.
          </p>
          <h4 className="mt-2 font-bold">Phase I: Cytoreductive Surgery</h4>
          <p className="mt-2">
            In this phase, if there are any remaining cancer cells that are left
            after heated chemotherapy then immediately Chemotherapy Bathsurgery
            is performed to extend survival and prevent cancer recurrence.
            Commonly chemotherapy drugs, which are used,are gemcitabine,
            carboplatin, doxorubicin, pemetrexed, and cisplatin. Rather than
            injecting these drugs directly your blood, doctors deliver them
            straightly to patient’sabdomen or chest.
          </p>
        </div>
        <div className="relative rounded-lg pb-[30%] shadow-lg">
          <iframe
            className="absolute h-full w-full"
            src="https://www.youtube.com/embed/mwwAQ86GT00?si=cKk6Dz2WpSEVdh8D"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
        <AboutSectionOne />
      </div>
    </section>
  );
};

export default HipecSurgery;
