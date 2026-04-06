import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 md:p-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              📧 Email
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              khattakd87@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              📞 Phone
            </h2>
            <p className="text-gray-600 dark:text-gray-400">03025454696</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              📍 Location
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Islamabad, Pakistan
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              💼 LinkedIn
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              www.linkedin.com/in/daniyal-khattak-7628a339b
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              🧑‍💻 GitHub
            </h2>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 transition"
            >
              daniyalgithubk
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
