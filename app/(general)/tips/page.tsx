import { DateFormatter } from "@/components/helpers/DateFormatter";
import { DateFormatterQuery } from "@/components/helpers/DateQueryFormatter";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { arr } from "@/constants/DummyArray";
import { Axios } from "@/utils/AxiosConfig";
import Image from "next/image";
import Link from "next/link";

const getTips = async ({ date }: { date: string }) => {
  const res = await Axios.get(`/get/tips/${date}`);

  const tipsData = await res.data;

  if (tipsData) {
    const tips = tipsData.tips;
    return { tips };
  }

  return { tips: null };
};

const Tips = async () => {
  const { formattedDate } = DateFormatter({
    current: true,
  });

  const queryDate = DateFormatterQuery();

  const { tips } = await getTips({ date: queryDate });

  return (
    <>
      <title>
        {`Kolkata FF Tips » Kolkata FATAFAT Tips Today 💚 [${formattedDate}]`}
      </title>
      <link rel="canonical" href="https://kolkataff.space/tips" />
      <meta
        name="title"
        content={`Kolkata FF Tips » Kolkata FATAFAT Tips Today 💚 [${formattedDate}]`}
      />
      <meta
        name="description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips"
      />
      <meta
        property="og:title"
        content={`Kolkata FF Tips » Kolkata FATAFAT Tips Today 💚 [${formattedDate}]`}
      />
      <meta property="og:url" content="https://kolkataff.space/tips" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips"
      />

      {/* Intro Section */}

      <div className="flex md:items-start justify-center items-center mt-4 flex-col space-y-3">
        <h1 className="font-bold text-2xl border-b dark:border-white pb-1 border-black">
          Kolkata FF Tips
        </h1>

        <p className="text-lg text-center md:text-start">
          Here we are providing daily <strong>Kolkata FF Fatafat tips</strong>{" "}
          today lucky numbers and Baji updates.
        </p>

        <p className="text-lg text-center md:text-start">
          While it&apos;s primarily a game of chance, there are some tips.
        </p>

        <p className="text-lg text-center md:text-start">
          You can improve your experience and potentially improve your odds of
          winning.
        </p>
      </div>

      {/* Table Heading */}

      <section>
        <h1 className="mt-5 text-center text-2xl font-bold bg-accentColor text-black">
          Tips for [{formattedDate}]
        </h1>
        <div>
          <Table className="cursor-default border-b dark:border-white">
            <TableBody>
              {tips
                ? arr.map((_, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-lg">
                          {index + 1}
                          {index === 0
                            ? "st"
                            : index === 1
                            ? "nd"
                            : index === 2
                            ? "rd"
                            : "th"}{" "}
                          Baji Tips
                        </TableCell>
                        <TableCell className="text-center font-medium w-[50%] text-lg">
                          {tips[index] ? tips[index].tip : "--"}
                        </TableCell>
                      </TableRow>
                    );
                  })
                : arr.map((_, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-lg">
                          {index + 1}
                          {index === 0
                            ? "st"
                            : index === 1
                            ? "nd"
                            : index === 2
                            ? "rd"
                            : "th"}{" "}
                          Baji Tips
                        </TableCell>
                        <TableCell className="text-center font-medium w-[50%] text-lg">
                          --
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </div>
      </section>

      <a
        href="https://smartmumbaimatka.in/"
        className="flex items-center mt-5 justify-center gap-2 border-2 border-accentColor py-2 rounded-md  md:hidden w-full mx-auto font-semibold animate-bounce"
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

      <section className="w-full h-full flex items-center justify-center my-5">
        <Link
          href={"/lucky-number"}
          className="py-5 bg-accentColor w-full text-center rounded-md text-black text-lg md:text-2xl lg:text-3xl font-semibold hover:scale-105 duration-500"
        >
          Click to Check your luck today, Kolkata Fatafat Lucky Number{" "}
        </Link>
      </section>

      <section className="my-5 px-5">
        <ol className="list-decimal space-y-2 text-lg">
          <li>
            <strong>Understand the Game Rules: </strong>Before you start playing
            Kolkata FF, make sure you understand the game rules and how it
            works. Familiarize yourself with the different types of bets and
            payouts.
          </li>
          <li>
            <strong>Bet Responsibly: </strong>Set a budget for your Kolkata FF
            bets and stick to it. Avoid chasing losses by betting more than you
            can afford to lose.
          </li>
          <li>
            <strong>Analyze Previous Results: </strong>Study past Kolkata FF
            results and look for patterns or movements. While this won&apos;t
            guarantee a win, it can provide some insights into the game.
          </li>
          <li>
            <strong>Use Intuition and Strategy: </strong>Kolkata FF involves
            guessing numbers, so trust your intuition, but also consider using
            basic strategies. Some players track hot and cold numbers or use
            other methods to make educated guesses.
          </li>
          <li>
            <strong>Diversify Bets: </strong>Rather than placing all your bets
            on a single Bazi chart, consider diversifying your bets across
            multiple charts. This can increase your chances of hitting a winning
            combination.
          </li>
          <li>
            <strong>Stay Informed: </strong>Keep yourself updated with any
            changes in the game rules or payouts. Being informed can help you
            make better betting decisions.
          </li>
          <li>
            <strong>Play Regularly: </strong>Some players believe that playing
            regularly increases their chances of winning over time. However,
            always do so within your budget.
          </li>
          <li>
            <strong>Manage Expectations: </strong>Understand that Kolkata FF is
            primarily a game of luck, and there&apos;s no foolproof strategy for
            winning consistently. Treat it as entertainment rather than a
            guaranteed income source.
          </li>
          <li>
            <strong>Play for Fun: </strong>Enjoy the excitement of the game
            without putting too much pressure on winning. Remember that the odds
            are stacked against any individual player.
          </li>
          <li>
            <strong>Be Cautious of Scams: </strong>Be wary of scams or
            fraudulent schemes related to Kolkata FF. Stick to trusted platforms
            and avoid offers that seem too good to be true.
          </li>
          <li>
            <strong>Respect Local Laws: </strong>Ensure that you are playing
            Kolkata FF in compliance with local laws and regulations regarding
            gambling and lotteries.
          </li>
          <li>
            <strong>Avoid Consecutive Bets: </strong>Try not to place
            consecutive bets with the same numbers. Mix up your choices to keep
            things interesting and potentially increase your odds.
          </li>
        </ol>
      </section>

      <section className="w-full h-full flex items-center justify-center my-5">
        <Link
          href={"/"}
          className="py-5 bg-green-500 w-full text-center rounded-md text-black text-xl md:text-2xl lg:text-3xl font-semibold hover:scale-105 duration-500"
        >
          Kolkata Fatafat Results
        </Link>
      </section>

      <p>
        Remember that Kolkata FF should be played for entertainment purposes,
        and there are no guaranteed strategies for winning. Always gamble
        responsibly and within your means, and be prepared to accept both wins
        and losses in the game.
      </p>
    </>
  );
};

export default Tips;

export const revalidate = 600;
