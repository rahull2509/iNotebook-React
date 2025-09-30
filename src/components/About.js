import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="bg-gray-100 flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            About iNotebook
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            <span className="font-bold">iNotebook</span> is a modern and smart
            note-taking application designed to make your digital life organized
            and seamless. In today's fast-paced world, where ideas and thoughts
            come and go in an instant, iNotebook provides you with a secure and
            structured place to save all of them.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-8 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is very simple: to enhance your note-taking experience.
            We want you to be able to focus on your ideas without any
            interruptions, whether you are a student taking lecture notes, a
            professional writing down meeting points, or anyone who wants to
            record their personal thoughts.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-8 mb-4">
            Key Features of iNotebook
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <span className="font-bold">Easy to Use:</span> Its interface is
              so simple that you can create, edit, and delete notes without any
              hassle.
            </li>
            <li>
              <span className="font-bold">Organized Storage:</span> Organize
              your notes into categories so that it's easy to find them when
              needed.
            </li>
            <li>
              <span className="font-bold">Secure & Private:</span> Your notes
              are for you only. We give the highest importance to the security
              of your data.
            </li>
            <li>
              <span className="font-bold">Anytime, Anywhere:</span> Whenever and
              wherever you get an idea, iNotebook is with you.
            </li>
          </ul>

          <p className="text-center text-gray-500 mt-8">
            We hope that iNotebook will become an important part of your daily
            productivity. Track your ideas, achieve your goals, and stay
            organized with iNotebook.
          </p>

          <p className="text-center text-gray-700 font-semibold mt-4">
            Thank you for choosing iNotebook!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
