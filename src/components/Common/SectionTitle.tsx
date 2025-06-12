const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full rounded-full bg-black  ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 pt-3.5 leading-tight! font-bold lg:text-4xl text-black sm:text-4xl md:text-[45px] dark:text-white">
          {title}
        </h2>
        <p className=" pb-9 leading-relaxed! md:text-lg text-sm">{paragraph}</p>
      </div>
    </>
  );
};

export default SectionTitle;