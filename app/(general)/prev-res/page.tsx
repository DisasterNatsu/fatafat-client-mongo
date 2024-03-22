import { Axios } from "@/utils/AxiosConfig";
import { DateFormatterQuery } from "@/components/helpers/DateQueryFormatter";
import SocialButton from "@/components/shared/SocialButton";
import Image from "next/image";
import PreviousTable from "@/components/oldResults/PreviousResults";

const getPreviousData = async (date: string) => {
  const request = await Axios.get(`get/previous/${date}`);

  const data = await request.data;

  return data;
};

const PreviousResults = async () => {
  const queryDate = DateFormatterQuery();

  const data = await getPreviousData(queryDate);

  return (
    <>
      <title>Kolkata FF | Old Results</title>
      <meta property="og:url" content="https://kolkataff.space/prev-res" />
      <meta name="title" content="Kolkata FF 💚 FATAFAT Old Results" />
      <meta
        name="description"
        content="Kolkata FF Old Result Kolkata FATAFAT Old Results"
      />
      <meta property="og:title" content="Kolkata FF 💚 FATAFAT Old Results" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Kolkata FF Old Result Kolkata FATAFAT Old Results"
      />
      <link rel="canonical" href="https://kolkataff.space/prev-res" />

      <div className="w-full flex justify-center my-5 flex-col">
        <section>
          <h1 className="text-center mt-4 text-3xl font-bold">
            All Previous Results
          </h1>
          <p className="text-center md:text-md text-xs pb-3 w-full border-b mb-4">
            Here you can find all the previous results available for Kolkata
            Fatafat
          </p>
          <div className="mx-auto mb-5">
            <SocialButton />
          </div>
          <a
            href="https://smartmumbaimatka.in/"
            className="flex items-center justify-center gap-2 border-2 border-accentColor py-2 rounded-md md:w-[285px] lg:-mt-14 w-full mx-auto font-semibold animate-bounce"
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
        </section>

        <section>
          <h3 className="text-center py-1 bg-accentColor font-semibold text-black mb-1 border-r text-xl md:font-bold md:text-2xl">
            Old Results
          </h3>
          <PreviousTable data={data} />
        </section>
      </div>
    </>
  );
};

export const revalidate = 3600;

export default PreviousResults;
