"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import VideoModal from "@/components/video-modal";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 px-4 py-16 md:py-20 lg:py-28">
    
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          center
          mb="0"
        />
      </div>

     
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-md transition hover:shadow-xl">
        <div className="relative pb-[56.25%]">
          {" "}
       
          <iframe
            className="absolute top-0 left-0 h-full w-full rounded-2xl"
            src="https://www.youtube.com/embed/clqnhl_hsgw?si=sIoALBPvX6d-ZK59"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
