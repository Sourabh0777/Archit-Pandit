import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";

const feedbacks = [
  {
    name: "Sant Ram",
    feedback: `The operation went superbly, and now I am walking normally with no pain. The scar has healed perfectly. If you're in doubt about Dr. Archit Pandit—he is as good as his word and has the skill to back it up.
Great care from all. The staff was very attentive and caring, doing the best to get your health looked after. It's the best hospital I have ever been to.
Everyone is so friendly and reassuring! A calming atmosphere and the hospital itself is so clean and shiny! Aftercare was amazing. Thank you—especially to Dr. Archit Pandit.`,
  },
  {
    name: "Vaibhav Pant",
    feedback: `The operation went superbly, and now I am walking without pain. The scar healed perfectly. Dr. Archit Pandit is highly skilled and trustworthy.
The staff provided exceptional care. The hospital is clean, peaceful, and the response time for appointments was quick.
Aftercare was excellent. Thank you to the entire team and especially Dr. Archit Pandit.`,
  },
  {
    name: "Hasina Begam",
    feedback: `Surgery was smooth and successful. The environment is friendly and the staff is excellent. Cleanliness and professionalism are top-notch.
I’m truly grateful to Dr. Archit Pandit for making the experience reassuring and smooth.
Recovery has been great, and I highly recommend this hospital.`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Patient Testimonials"
          paragraph="What our patients are saying about their experience with Dr. Archit Pandit and our care team."
          center
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map(({ name, feedback }, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
             
              <div className="absolute -top-4 left-4 text-3xl text-blue-200">
                c
              </div>

             
              <p className="flex-1 text-sm leading-relaxed whitespace-pre-line text-gray-700">
                {feedback}
              </p>

           
              <div className="mt-6 text-right text-base font-semibold text-blue-800">
                — {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
