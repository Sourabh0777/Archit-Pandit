import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const media = [
  "https://www.drarchitpandit.com/images/video-1.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_1.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025.mp4",
  "https://www.drarchitpandit.com/images/media/Video%202025-01-04.mp4",
  "https://www.drarchitpandit.com/images/media/WhatsApp%20Video%202025-01-04%20at%2012.32.40_d7325917.mp4",
  "https://www.drarchitpandit.com/images/media/WhatsApp%20Video%202025-01-04%20at%2012.32.05_1579cc0e.mp4",
  "https://www.drarchitpandit.com/images/media/Video%202025-01-04.mp4",
  "https://www.drarchitpandit.com/images/media/WhatsApp%20Video%202025-01-04%20at%2012.32.05_1579cc0e.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_6.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_5.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_4.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_3.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_2.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_6.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_4.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_3.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_5.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_2.mp4",
  "https://www.drarchitpandit.com/images/media/video_2025_1.mp4",
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-[#111827] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
