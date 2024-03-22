"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import SocialButton from "../shared/SocialButton";

const TypeWriter = () => {
  return (
    <div className="grid md:grid-cols-2 w-full px-0 my-5">
      {/* Left */}
      <div className="flex flex-col gap-5 justify-center p-5">
        <h4 className="lg:text-5xl md:text-4xl text-2xl text-center md:text-left">
          Get all fatafat <br />
          <span className="font-semibold">
            <Typewriter
              options={{
                strings: ["Updates", "Predictions", "Expert Suggestions"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h4>

        <SocialButton home={true} />
        <a
          href="https://smartmumbaimatka.in/"
          className="flex items-center justify-center gap-2 border-2 border-accentColor py-2 rounded-md md:w-[285px] w-full mx-auto md:mx-0 font-semibold animate-bounce"
        >
          <Image
            src={"/smartmumbailogo.png"}
            alt="Smart Matka Logo"
            height={40}
            width={40}
            className="w-auto h-auto"
          />{" "}
          Smart Mumbai Matka
        </a>
      </div>
      {/* Right */}
      <div className="w-full p-2 md:flex md:justify-end hidden">
        <Image
          src="/smartmumbailogo.png"
          alt="image"
          width={300}
          height={300}
          className="rounded-md w-auto"
          priority
        />
      </div>
    </div>
  );
};

export default TypeWriter;
