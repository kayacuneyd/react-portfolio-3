import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
            <TypeAnimation
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4"
              sequence={[
                " BTB", // Types 'One'
                1000, // Waits 1s
                " BTC", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                " SASS", // Types 'Three' without deleting 'Two'
                3000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 px-2 py-3">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platform.
        </p>
        <Button name="Get Started" />
      </div>
    </div>
  );
};

export default Hero;
