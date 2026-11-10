import React from "react";
import "remixicon/fonts/remixicon.css";

const Section1 = ({ users }) => {
  return (
    <div className="h-screen w-full">

      {/* Navbar */}
      <nav className="flex items-center justify-between py-8 px-18">
        <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full">
          Psychology
        </h4>

        <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm">
          Personality Types
        </button>
      </nav>

      {/* Main Content */}
      <div className="pb-16 pt-6 flex items-center gap-10 h-[90vh] px-18">

        {/* Left Content */}
        <div className="h-full flex flex-col justify-between w-1/3">
          <div className="p-6">
            <h3 className="mb-7 text-7xl font-bold">
              Understand <br />
              <span>Human</span> <br />
              Psychology
            </h3>

            <p className="text-xl w-[90%] font-medium text-gray-600">
              Explore different personality types, understand human emotions
              and discover how people think, feel and behave.
            </p>
          </div>

          <div className="text-9xl">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>

        {/* Right Cards */}
        <div className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl"
            >
              <img
                className="h-full w-full object-cover"
                src={user.img}
                alt={user.tag}
              />

              <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
                  {idx + 1}
                </h2>

                <div>
                  <p className="text-xl leading-relaxed text-white mb-14">
                    {user.intro}
                  </p>

                  <div className="flex justify-between">
                    <button
                      style={{ backgroundColor: user.color }}
                      className="text-white font-medium px-8 py-2 rounded-full"
                    >
                      {user.tag}
                    </button>

                    <button className="text-white font-medium px-3 py-2 rounded-full">
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Section1;