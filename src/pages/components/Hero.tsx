import React from 'react';
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div>
      <div
        itemID="hero-section"
        className="flex flex-col md:flex-row bg-no-repeat bg-cover bg-gradient-to-l from-transparent to-black border-b-4 "
      >
        <div className="-p10 h-auto bg-gradient-to-br md:bg-gradient-to-r from-red-700  via-black to-black md:from-red-700  md:via-stone-900 md:to-black md:w-1/2">
          <h1 className="text-4xl tracking-wider justify-center font-bold uppercase leading-snug text-start px-10 mt-20 pt-4 pb-4 border-y-2 border-white border-r-2 rounded-e-md">
            Your all rounder digital handler
          </h1>

          <h2 className="text-lg tracking-wider justify-center font-bold uppercase leading-snug text-start pl-10 pb-5 pt-4">
            Want to manage your all digital data and characters on hand{" "}
            <span className="text-red-500">without having any trouble</span>{" "}
            you are at the right place I can help your with that...
          </h2>

          {/* Typewriter Setup */}

          <div className="text-2xl tracking-wider justify-center font-bold uppercase leading-snug text-start pl-10 border-y-2 border-r-2 py-2 border-white rounded-e-full">
            <Typewriter
              options={{
                strings: [
                  "Using Designing",
                  "Using Development",
                  "Using Marketing",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* Hero Button Section */}

          <div className="space-x-6 pl-10 pt-10 pb-20">
            <button className="px-4 py-2 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 shadow-inner border-4 border-transparent border-double shadow-white rounded-lg hover:border-4 hover:border-double hover:border-orange-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium ">
              Designing
            </button>

            <button className="px-4 py-2 bg-gradient-to-b from-blue-500 via-sky-500 to-blue-500 shadow-inner border-4 border-transparent border-double shadow-white rounded-lg hover:border-4 hover:border-double hover:border-blue-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium ">
              Development
            </button>

            <button className="px-4 py-2 bg-gradient-to-b from-green-500 via-teal-500 to-green-500 shadow-inner border-4 border-transparent border-double shadow-white rounded-lg hover:border-4 hover:border-double hover:border-green-500 hover:from-transparent hover:via-transparent hover:to-transparent hover:font-medium ">
              Marketing
            </button>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 md:bg-gradient-to-l bg-gradient-to-tl from-red-700  via-black to-black md:from-red-700  md:via-stone-900 md:to-black pb-5">
          <div className="flex flex-row justify-center h-2/3">
            <a href="#">
              <img
                src="../images/abdullah-shahid.png"
                alt="Abdullah Shahid"
                className="w-80 mx-auto my-auto mt-8 justify-center justify-items-center h-auto align-middle rounded-full border-double border-8 border-red-600 hover:border-12 hover:border-red-800 hover:opacity-75"
              />
            </a>
          </div>

          <div className="md:flex md:flex-row justify-center w-auto h-1/3 hidden">
            <button className="px-4 py-2 mx-auto my-auto mt-0 rounded-full text-white bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 hover:focus:ring-red-300 hover:shadow-md hover:shadow-red-500/50 dark:shadow-lg  border-4 border-black border-double ">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero



