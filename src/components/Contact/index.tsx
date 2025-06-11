import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-4 dark:bg-[#121723]"
    >
      <div className="mx-auto max-w-full px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6">
          <div className="flex w-[50%] flex-col items-center">
            <h1 className="text-bg-color-dark text-3xl text-bol dark:text-white">Get In Touch</h1>
            <p className="pt-5 text-4xl font-bold text-black dark:text-white">
              Book Consultation Today
            </p>
          </div>
          <div className="w-full px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-center overflow-hidden rounded-xl shadow-lg">
                <iframe
                  className="h-100 w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.043497282184!2d77.26898927529391!3d28.596306075691853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d1d8e7b4e1%3A0x788f0d0d3a4581e4!2sFortis%20Escorts%20Heart%20Institute!5e0!3m2!1sen!2sin!4v1685441923910!5m2!1sen!2sin"
                ></iframe>
              </div>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-bold text-black">
                    📍 Our Locations
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-700">
                      Fortis Escorts, Okhla:
                    </span>
                    <br />
                    Opposite Sukhdev Vihar Metro Station, New Delhi - 110025
                  </p>
                  <p className="mt-2 text-gray-700">
                    <span className="font-semibold text-gray-700">
                      Fortis Hospital Gurugram:
                    </span>
                    <br />
                    Sector - 44, Opposite HUDA City Centre, Gurugram, Haryana
                    122002
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-bold text-black">
                    📞 Make an Appointment
                  </h3>
                  <p className="text-gray-700">+91 9711130457</p>
                  <p className="text-gray-700">+91 7011354665</p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
                  <h3 className="font-bol mb-2 text-xl font-bold text-black">
                    ✉️ Email Address
                  </h3>
                  <p className="text-gray-700">drarchitpandit@yahoo.co.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Newsletter Box */}
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded-lg bg-white p-6 shadow-md"> */}
          <NewsLatterBox />
          {/* </div>
          </div> */}
        </div>
      </div>
    </section>
    // <div>
    //   fasldjkfasfd
    // </div>
  );
};

export default Contact;
