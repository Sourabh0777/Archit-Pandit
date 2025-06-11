"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const image = [
  "https://www.drarchitpandit.com/images/about/2.jpeg",
  "https://www.drarchitpandit.com/images/about/1.jpeg",
  "https://www.drarchitpandit.com/images/about/3.jpeg",
  "https://www.drarchitpandit.com/images/about/5.jpg",
  "https://www.drarchitpandit.com/images/about/4.jpg",
  "https://www.drarchitpandit.com/images/1.jpeg",
];
const AboutSectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-white py-20 text-center dark:bg-[#17202E]">
      <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">OUR ACHIEVEMENT</h2>
      <div className="mb-10 flex justify-center">
        <Image src="/icons/dna.svg" alt="DNA icon" className="h-6" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-lg">
        <Image
          src={image[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={100}
          height={100}
          className="object-fit h-64 w-full transition-all duration-500"
        />
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 shadow"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 shadow"
        >
          ❯
        </button>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
          {image.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 cursor-pointer rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
      <div className='mx-auto mt-11 flex h-96 max-w-7xl flex-col items-center justify-center gap-6 rounded-2xl bg-[url("https://drishanshah.com/wp-content/uploads/2022/08/CTA.svg")] bg-cover bg-center'>
        <h1 className="text-4xl font-bold text-black">
          Thoracic and Gastroesophageal malignancies?
        </h1>
        <h1 className="text-4xl font-bold text-black">
          Dr. Archit Pandit has the Answers
        </h1>
        <button className="cursor-pointer rounded-2xl border-2 bg-white px-3 py-3 text-2xl text-black">
          Call Now
        </button>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
