import Image from "next/image";
import React from "react";

const SignupPage = () => {
  const videos = [
    "https://www.drarchitpandit.com/images/video-1.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025_1.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025.mp4",
    "https://www.drarchitpandit.com/images/media/Video%202025-01-04.mp4",
    "https://www.drarchitpandit.com/images/media/WhatsApp%20Video%202025-01-04%20at%2012.32.40_d7325917.mp4",
    "https://www.drarchitpandit.com/images/media/WhatsApp%20Video%202025-01-04%20at%2012.32.05_1579cc0e.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025_6.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025_5.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025_4.mp4",
    "https://www.drarchitpandit.com/images/media/video_2025_3.mp4",
  ];

  const images = [
    "https://www.drarchitpandit.com/images/about/1.jpeg",
    "https://www.drarchitpandit.com/images/about/2.jpeg",
    "https://www.drarchitpandit.com/images/about/3.jpeg",
    "https://www.drarchitpandit.com/images/about/5.jpg",
    "https://www.drarchitpandit.com/images/testimonials/happy%20patient%201.jpeg",
    "https://www.drarchitpandit.com/images/testimonials/happy%20patient%205.jpeg",
    "https://www.drarchitpandit.com/images/testimonials/happy%20patient%205.jpeg",
    "https://www.drarchitpandit.com/images/testimonials/happy%20patient%203.jpeg",
    "https://www.drarchitpandit.com/images/testimonials/patient-testimonial-prakshi-saraswat.jpg",
    "https://www.drarchitpandit.com/images/testimonials/happy%20patient%204.jpeg",
  ];

  return (
    <section className="dark:bg[#121723] bg-gray-100 pt-[80px] pb-[80px]">
      <div className="dark:bg[#121723] mx-auto max-w-7xl rounded-lg px-6 py-12 shadow-lg">
        <h2 className="mb-6 inline-block border-b-2 border-blue-500 text-2xl font-semibold text-gray-800">
          Feedback
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                City *
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Enter Phone"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Enter your message..."
              className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
            >
              Send your message
            </button>
            <a
              href="tel:+919711130457"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 2a2 2 0 012-2h1.586A2 2 0 017 1.586L8.293 3H16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm5 10h8a1 1 0 000-2H7a1 1 0 000 2z" />
              </svg>
              Call Us!
            </a>
          </div>
        </form>
      </div>
      <div className="dark:bg[#121723] container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          📸 Image Gallery
        </h2>
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl"
            >
              <Image
                width={500}
                height={500}
                src={img}
                alt={`Image ${index + 1}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 text-center">
                <p className="font-medium text-gray-700">Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
          🎥 Video Gallery
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((videoUrl, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl"
            >
              <video
                className="h-64 w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 text-center">
                <p className="font-medium text-gray-700">Video {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
