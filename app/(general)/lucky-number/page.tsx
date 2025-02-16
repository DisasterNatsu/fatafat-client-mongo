import ResponsiveAd from "@/Adsense/ResponsiveAd";
import PattiTips from "@/components/luckyNumber/PattiTips";
import Roulette from "@/components/luckyNumber/Roulette";
import SocialButton from "@/components/shared/SocialButton";
import Link from "next/link";
import React from "react";

const LuckyNumber = () => {
  return (
    <>
      <title>Kolkata FF 💛 Lucky Number | Luckly Patti</title>
      <meta
        name="title"
        content="Kolkata FF Today Lucky Number | Lucky Patti [2024] 💛"
      />
      <meta
        name="description"
        content="Kolkata FF Lucky Patti 2021 💛 Kolkata FATAFAT Satta Lucky Patti, Lucky Number, Joy Guru Today Free Tips"
      />
      <link rel="canonical" href="https://kolkataff.vip/lucky-number" />
      <meta
        property="og:title"
        content="Kolkata FF Today Lucky Number | Lucky Patti [2024] 💛"
      />
      <meta
        property="og:description"
        content="Kolkata FF Lucky Patti 2021 💛 Kolkata FATAFAT Satta Lucky Patti, Lucky Number, Joy Guru Today Free Tips"
      />
      <div className="w-full h-full">
        <section className="flex w-full md:flex-row flex-col items-center md:items-start gap-5">
          <Roulette />
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold text-2xl md:text-3xl">
              Lucky Number Wheel
            </h2>
            <p>
              Welcome to the Lucky Number Wheel! Spin the wheel to discover your
              lucky number ranging from 0 to 9. Simply click the
              &ldquo;Spin&rdquo; button to set the wheel in motion and reveal
              your fortune!
            </p>

            <h3 className="font-semibold md:text-2xl text-xl md">
              How to play:
            </h3>
            <ul className="list-disc pl-5">
              <li>Click the &ldquo;Spin&rdquo; button to start the wheel.</li>
              <li>The wheel will spin and stop randomly on a number.</li>
              <li>Your lucky number will be displayed once the wheel stops.</li>
            </ul>

            <p>
              Are you ready to uncover your destiny? Spin the wheel now and see
              what luck has in store for you!
            </p>
          </div>
        </section>

        <section className="my-2">
          <ResponsiveAd />
        </section>

        <PattiTips />

        <section className="my-5 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-3xl">
            Come join us for free Fatafat tips and realtime updates of the
            result
          </h3>
          <h4 className="font-semibold text-2xl my-4">
            Here is what you need to do
          </h4>
          <ul className="list-disc space-y-3">
            <li>
              On this website we update daily Kolkata FF And Kolkata Fatafat
              Result as soon as possible.
            </li>
            <li>
              Just remember Kolkata ff city you can find our website link
              quickly by searching on Google kolkataff Vip
            </li>
            <li>
              Bookmark this website for quick updates. Kolkata ff tips dekho aur
              jeeto (*har bazi tips sabse pahele yaha milega)
            </li>
          </ul>
        </section>

        <section className="mt-5 w-full flex flex-col space-y-5 items-center justify-center">
          <Link
            href={"/"}
            className="bg-accentColor w-full text-center rounded-md py-3 text-black font-bold hover:scale-105 duration-500 md:text-3xl text-xl"
          >
            Today&apos;s Results
          </Link>
          <Link
            href={"/tips"}
            className="bg-accentColor w-full text-center rounded-md py-3 text-black font-bold hover:scale-105 duration-500 md:text-3xl text-xl"
          >
            Tips
          </Link>
          <Link
            href={"/patti-tips"}
            className="bg-accentColor w-full text-center rounded-md py-3 text-black font-bold hover:scale-105 duration-500 md:text-3xl text-xl"
          >
            Patti Tips
          </Link>
        </section>
      </div>
    </>
  );
};

export default LuckyNumber;
