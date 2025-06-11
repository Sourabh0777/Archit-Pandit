"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";

const HipecSurgery = () => {
  return (
    <section className="bg-white px-4 py-20 text-gray-800">
      <div className="mx-auto grid max-w-7xl items-start gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-6 border-l-4 border-blue-500 pl-4 text-4xl font-bold">
            Laparoscopic Cancer Surgery
          </h1>
          <p className="mb-4 text-base">
            Dr. Archit Pandit is one of the pioneers of minimal access cancer
            surgery. He is amongst the first to start Laparoscopic cancer
            surgery in Delhi. Soon after his surgical oncology training at
            A.I.M.S he underwent rigorous training in the field of Minimal
            access cancer surgery not just from with in the country but abroad
            as well. He underwent Minimally invasive Thoracic surgery training
            from Korea and Laparoscopic cancer surgery for Stomach and Esophagus
            cancers from Japan. Laparoscopic and Robotic cancer surgery is his
            passion and at MAX institute of cancer Care , Shalimar Bagh , Delhi
            he has already performed more than 1000 Laparoscopic cancer
            Surgeries.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            Dr. Archit Pandit feels , Now a days more and more patients are
            opting for laparoscopic cancer surgery and are becoming more and
            more aware of the benefits of this technology .
          </p>
          <p className="mb-4 text-base leading-relaxed">
            Dr. Archit Pandit feels , Now a days more and more patients are
            opting for laparoscopic cancer surgery and are becoming more and
            more aware of the benefits of this technology .
          </p>
          <div>{/* Add more points like this */}</div>
        </div>

       
        <div className="relative rounded-lg pb-[70%] hover:shadow-lg">
          <iframe
            className="absolute h-full w-full"
            src="https://www.youtube.com/embed/S48Zrt7jPts?si=2Z2jvQwWx2sE2387"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="mx-auto mt-4 max-w-7xl">
          <div>
            <h4 className="mb-4 font-bold text-blue-700">
              So what are the benefits of Laparoscopic cancer surgery also
              called as minimal access cancer surgery ?
            </h4>
            <p>
              Shorter Duration of stay in the hospital due to faster recovery
            </p>
            <p>Shorter stay in ICU</p>
            <p>Lesser chances of ventilatory support</p>
            <p>Less blood loss </p>
            <p>Less pain as compared to open surgery due to very small cut</p>
            <p>Better cosmesis due to scarless or keyhole surgery</p>
          </div>
          <h4 className="font-bold text-blue-700">
            How is laparoscopic cancer Surgery performed
          </h4>
          <p>
            Laparoscopic cancer is a technically challenging surgery and not
            every surgeon is trained to do it well. 3 to 4 small cuts of
            approximately 4 to 5 mm in size are made on the patients abdomen .
            Through one of the incisions a high magnification camera is put and
            through other cuts the surgeon and the assistant surgeon perform the
            surgery . The surgery is very precise since the magnification is
            much more than the naked eye can see. Once the surgery is complete
            the tumour is extracted out of the body by making a small cut. This
            ensures that the patient has very less pain and lesser blood loss
            and early recovery .
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <h1 className="font-bold text-blue-700">
            So what does Dr. Archit Pandit has to say about Laparoscopic cancer
            surgery !
          </h1>
          <p>
            Dr. Archit pandit feels that many patients still feel that as
            compared to open surgery laparoscopic cancer surgery is not
            effective or is not as radical in removing the cancer from the body
            as would be in open surgery , however he refutes this claim as its
            proven beyond doubt that for certain cancers of the body such as
            Uterine cancers , Esophageal cancers , stomach cancers , pancreatic
            cancers , colon and rectal cancers etc laparoscopic cancer surgery
            is better than open surgery with respect to early recovery , lesser
            pain and better outcomes .
          </p>
          <p>
            He believes that its not important what method is used to do the
            surgery , what’s important is that the patient should be cancer free
            at the end of the surgery, however he feels that when the technology
            is getting advanced and the mobile phones are getting smarter and
            smaller then why shouldn’t our scars and the misery of an open
            cancer surgery be ended by performing laparoscopic or minimal access
            cancer surgery .
          </p>
        </div>
        <div>
          <h1 className="border-l-4 border-blue-500 pl-4 text-4xl font-bold">
            Robotic Cancer Surgery
          </h1>
          <p className="mt-3">
            A Robotic Surgery doesn't mean that a robot is performing the
            operation.Instead it, refres to when surgeons direct the surgery
            using Robotic tools.
          </p>
          <p className="mt-3 mb-3 text-sm font-bold">
            Robotic Surgery can be done in following Cancer by:
          </p>
          <p>1. Head & Neck Cancers </p>
          <p>2. Esophageal Cancers</p>
          <p>3. Stomoch Cancers</p>
          <p>4. Colon and Rectal Cancers</p>
          <p>5. Hepato-pancreato-biliary Cancers</p>
          <p>6. Gynaecological Cancers</p>
          <p>7. Uterine Cancers etc</p>
          <p>Can be treated by Robotic Cancer Surgery</p>
        </div>

        <AboutSectionOne />
      </div>
    </section>
  );
};

export default HipecSurgery;
