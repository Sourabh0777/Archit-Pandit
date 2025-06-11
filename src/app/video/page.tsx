const Blog = () => {
  const media = [
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
    "https://www.drarchitpandit.com/images/media/video_2025_2.mp4",
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#121723] pt-[120px] pb-[120px] dark:bg-[]">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-center">
          {media.map((videoUrl, index) => (
            <div
              key={index}
              className="mb-8 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <video
                  className="h-64 w-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Video {index + 1}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="-mx-4 mt-10 flex flex-wrap" data-wow-delay=".15s">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              {["Prev", "1", "2", "3", "...", "12", "Next"].map((item, i) => (
                <li className="mx-1" key={i}>
                  <a
                    href="#0"
                    className={`${
                      item === "..."
                        ? "cursor-not-allowed"
                        : "hover:bg-primary hover:text-white"
                    } bg-body-color/15 text-body-color flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
