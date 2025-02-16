import { Axios } from "@/utils/AxiosConfig";
import { DateFormatter } from "@/components/helpers/DateFormatter";
import { DateFormatterQuery } from "@/components/helpers/DateQueryFormatter";
import CurrentDayTable from "@/components/home/CurrentDayTable";
import TypeWriter from "@/components/home/TypeWritter";
import LastTwoDaysTable from "@/components/home/LastTwoDaysTable";
import Link from "next/link";
import LastTenDaysTable from "@/components/home/LastTenDaysTable";
import Image from "next/image";
import TimeTable from "@/components/home/TimeTable";
import FAQ from "@/components/home/FAQ";
import InformationTable from "@/components/home/InformationTable";
import { FaTelegramPlane } from "react-icons/fa";


const getLatestData = async ({ date }: { date: string }) => {
  const latest = await Axios.get(`/get/latest/${date}`);
  const lastTen = await Axios.get(`/get/last-ten/${date}`);
  const lastTwo = await Axios.get(`/get/last-two/${date}`);
  const tips = await Axios.get(`/get/tips/${date}`);
  const Message = await Axios.get("/get/message");

  const latestData = await latest.data;
  const lastfiftyDays = await lastTen.data;
  const lastTwoDays = await lastTwo.data;
  const tipsData = await tips.data;
  let messageData = await Message.data;

  if (messageData.length === 0) messageData = null;

  return { latestData, lastfiftyDays, lastTwoDays, tipsData };
};

const Home = async () => {
  // date from query

  const queryDate = DateFormatterQuery();

  // date for display
  const { formattedDate } = DateFormatter({
    current: true,
  });

  const { latestData, lastfiftyDays, lastTwoDays, tipsData } =
    await getLatestData({
      date: queryDate,
    });

  return (
    <>
      <title>Kolkata FF 💛 FATAFAT Result Today LIVE Tips, Patti Chart</title>
      <meta
        name="title"
        content="Kolkata FF 💛 FATAFAT Result Today LIVE Tips, Patti Chart"
      />
      <meta
        name="description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips & Trick Old Results, 220 Patti Chart, Lucky Number - কলকাতা ff"
      />
      <meta
        property="og:title"
        content="Kolkata FF 💛 FATAFAT Result Today LIVE Tips, Patti Chart"
      />
      <meta property="og:url" content="https://kolkataff.vip" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips & Trick Old Results, 220 Patti Chart, Lucky Number - কলকাতা ff"
      />
      <link rel="canonical" href="https://kolkataff.vip" />

      {/* body */}

      <div>
        <section>
          {/* heading */}

          <h1 className="my-1 text-xl font-bold text-center text-black bg-accentColor cursor-default dark:border-black border-x-2 py-2">
            {formattedDate} <span className="animate-pulse">🔴</span>LIVE
          </h1>

          {/* current day table */}

          <CurrentDayTable data={latestData} />
        </section>

        {/* Typewriter Effects and Image */}

        <section>
          <TypeWriter />
        </section>

        <section className="-mt-2">
          <LastTwoDaysTable data={lastTwoDays} />
        </section>

        {/* Links visible in mobile */}

        <section className="mb-4">
          <div className="flex flex-col sm:hidden justify-center items-center space-y-3 mt-4">
            <Link
              href={"#last-ten-days"}
              className="font-semibold bg-accentColor w-full text-center text-black py-1 rounded-md text-xl"
            >
              Last 10 Days Result
            </Link>

            <Link
              href="https://kolkataff.mini.site/"
              className="font-semibold bg-accentColor w-full text-center text-black py-1 rounded-md text-xl"
            >
              Kolkata FF Tips
            </Link>

            <Link
              href="/prev-res"
              className="font-semibold bg-accentColor w-full text-center text-black py-1 rounded-md text-xl"
            >
              Old Result 2024
            </Link>

            <Link
              href="/lucky-number"
              className="font-semibold bg-accentColor w-full text-center text-black py-1 rounded-md text-xl"
            >
              Lucky Number
            </Link>

            <Link
              href="/patti-tips"
              className="font-semibold bg-accentColor w-full text-center text-black py-1 rounded-md text-xl"
            >
              Patti Tips
            </Link>
            <Link
              href="https://t.me/kolkataFFspace"
              className="flex items-center justify-center gap-1 text-xl font-semibold bg-cyan-600 w-full py-1 rounded-md"
            >
              <FaTelegramPlane /> Telegram
            </Link>

            {/* Mumbai Satta Matka */}

            <Link href={"https://smartmumbaimatka.in/"}>
              <Image
                src={"/smartmumbailogo.png"}
                alt="Smart Matka Logo"
                height={500}
                width={500}
                className="h-auto"
              />
            </Link>

            <p className="text-center px-5">
              To get live <strong>Super Fast</strong> Smart Matka | Smart Mumbai
              Matka results{" "}
              <Link
                href={"https://smartmumbaimatka.in/"}
                className="dark:text-accentColor font-semibold"
              >
                Click Here
              </Link>
            </p>
          </div>
          <h2 className="text-center font-bold my-3 text-2xl">
            Kolkata FF Result Today
          </h2>
          <p className="text-center text-sm">
            On this website, you will get <strong>Super Fast</strong> Kolkata FF
            Result Live Online. We also provide
          </p>
        </section>

        {/* last ten days result */}

        <section>
          <h2 className="border-b-2 dark:border-white border-black mb-4 text-center py-1 text-xl md:text-2xl font-bold">
            Result of Last Ten Days
          </h2>
          <LastTenDaysTable data={lastfiftyDays} />
        </section>

        {/* Time Table */}

        <hr className="my-5 pb-2 dark:border-white border-black" />
        {/* Time table */}
        <section>
          <div className="my-5">
            <h3 className="my-1 text-xl font-semibold text-center text-black bg-accentColor cursor-default dark:border-black border-x-2 py-2">
              Time Table | সময়সূচী
            </h3>
            <TimeTable />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center">
            Important information
          </h2>
          <hr className="my-5 pb-2 dark:border-white border-black" />

          <div className="flex flex-col md:flex-row items-center justify-center my-10">
            <div className="w-full md:w-[50%]">
              <FAQ />
            </div>
            <div className="w-full md:w-[50%]">
              {/* Information Table */}
              <InformationTable />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-semibold md:text-left text-center">
            How Was Kolkata FF Started?
          </h2>

          <p className="md:text-xl md:text-left text-center text-base">
            Let&apos;s go back to 2018 when a person named Krishna Das in
            Kolkata had an idea. He was talking with his friends about helping
            poor families. They decided to start a local lottery in their area.
            People from the neighbourhood could play and win prizes. This game
            was called Kolkata FF Fatafat. It was a way for people to have fun
            and also help others. The game started small but grew popular over
            time. It began in the 1970s as “Mini,” just a simple game for people
            to enjoy. Now, Kolkata FF is a big part of the city&apos;s culture.
            It gives everyone a chance to win something exciting by trying their
            luck.
          </p>

          <h2 className="text-3xl font-semibold md:text-left text-center">
            How to Check Kolkata FF Result Today
          </h2>
          <p className="md:text-xl md:text-left text-center text-base">
            To check the result for Kolkata FF on 17th April 2024, follow the
            steps given below:
          </p>
          <ul className="pl-5 list-disc space-y-3">
            <li className="md:text-xl text-left text-base">
              Go to the Kolkata FF official website. You can find it by
              searching for <Link href={"/"}>Kolkata FF website</Link> online.
            </li>
            <li className="md:text-xl text-left text-base">
              Once you&apos;re on the website, look for a section labelled{" "}
              <strong>Results</strong> or <strong>Today&apos;s Results</strong>.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold md:text-left text-center">
            Kolkata Fatafat (FF) Ghosh Babu Tips
          </h2>
          <ul className="pl-5 list-disc space-y-3">
            <li className="md:text-xl text-left text-base">
              <strong>Engage in Online Forums:</strong> Join{" "}
              <strong>Ghosh Babu&apos;s online forums</strong> for predictions,
              tips, and insights.
            </li>
            <li className="md:text-xl text-left text-base">
              <strong>Learn from Past Experiences:</strong> Benefit from
              players&apos; previous number selections to enhance your future
              choices.
            </li>
            <li className="md:text-xl text-left text-base">
              <strong>Play for Enjoyment, not Profit:</strong> Understand that
              Kolkata FF is based on luck, not guaranteed earnings.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold md:text-left text-center">
            Kolkata Fatafat Goswami Tips
          </h2>
          <p className="md:text-xl md:text-left text-center text-base">
            Who or What is <strong>Kolkata Fatafat Goswami?</strong> Goswami is
            a person in kolkata sapce known for Kolkata Fatafat Goswami tips. He
            accurately analyzes the old results and prediction the live and
            upcoming kolkata fatafat results.
          </p>
        </section>

        
      </div>
    </>
  );
};

export const revalidate = 1;

export default Home;
