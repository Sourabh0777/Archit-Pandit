const NewsLatterBox = () => {
  return (
    <div className="mx-auto w-full  rounded-lg px-6 py-12 shadow-lg">
      <h2 className="mb-6 dark:text-white inline-block border-b-2 border-blue-500 text-2xl font-semibold text-gray-800">
        Interested in discussing?
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 dark:text-white block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 dark:text-white block text-sm font-medium text-gray-700">
              City *
            </label>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 dark:text-white block text-sm font-medium text-gray-700">
              Phone *
            </label>
            <input
              type="tel"
              placeholder="Enter Phone"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 dark:text-white block text-sm font-medium text-gray-700">
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
          <label className="mb-2 dark:text-white block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Enter your message..."
            className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
  );
};

export default NewsLatterBox;
