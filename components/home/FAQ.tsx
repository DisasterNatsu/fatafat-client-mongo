import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium">FAQ - Frequestly asked questions</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How To Play? | কিভাবে খেলবেন?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              If you wish to play Kolkata Fatafat Game, then you have to be
              physically present in Kolkata city as this game is played only
              inside Kolkata. The game is operated by Kolkata FF city
              authorities. Betting or staking of something of value, with the
              consciousness of risk and hope of gain, on the outcome of a game.
            </p>
            <p>
              যদি আপনি কলকাতা ফাতাফাত গেম খেলতে ইচ্ছুক হন, তবে আপনার কলকাতা শহরে
              শারীরিকভাবে উপস্থিত থাকতে হবে যেহেতু এই খেলা কেবলমাত্র কলকাতা শহরে
              খেলা হয়। এই গেমটি কলকাতা এফএফ শহর কর্তৃপক্ষ দ্বারা পরিচালিত হয়।
              &apos;বেটিং&apos; বা &apos;কোনও মানের কিছু স্টেকিং&apos; সহজমত
              ঝুঁকি এবং লাভের আশায় কোনও খেলার ফলাফলের উপর বাজি করা হয়।
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 2nd question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Types of Games? | খেলার প্রকার?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              Kolkata Fatafat is a form of lottery or betting game commonly
              played in Kolkata. It involves participants selecting numbers and
              placing bets on those numbers, with payouts determined by the
              outcome of draws.
            </p>
            <p>
              কলকাতা ফাতাফাত একটি লটারি বা বাজির খেলার একটি রূপ, যা সাধারণত
              কলকাতায় খেলা হয়। এটি অংশগ্রহণকারীরা সংখ্যা নির্বাচন করে এবং সেই
              সংখ্যাগুলির উপর বাজি করে পরিণাম নির্ধারিত হতে বেট রাখেন। বেটিং এর
              ফলাফলে পেমেন্ট নির্ধারিত হয়।
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 3rd question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Minimum Bid amount And winning prices? | ন্যূনতম বিড পরিমাণ এবং
            জয়ের মূল্য?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              There are no special criteria of minimum bid for Kolkata FF. You
              can invest as much as money you want. But in some areas, the
              minimum amount is between 5 rupees to 10 rupees, and as we all
              know the prize amount is directly depends on the invested money.
              So it is variable every time and depends on the participant&apos;s
              invested amount. The winning money always differs from player to
              player.
            </p>
            <p>
              কলকাতা এফএফ এর জন্য ন্যূনতম বিডের স্পেশাল মান কোনও নেই। আপনি
              যেকোনো পরিমাণ টাকা নির্বাচন করতে পারেন। কিন্তু কিছু এলাকায়,
              ন্যূনতম পরিমাণ 5 টাকা থেকে 10 টাকা হতে পারে, এবং আমরা সবাই জানি
              পুরস্কারের পরিমাণ সরাসরি বিনিয়োগ টাকার উপর নির্ভর করে। তাই এটা
              প্রতি সময় পরিবর্তনশীল এবং অংশগ্রহণকারীর নির্ধারিত বিনিয়োগ
              পরিমাণের উপর নির্ভর করে। জয়ের টাকা প্রতিটি খেলোয়ার থেকে প্রতি
              খেলোয়ারের পরিবর্তে বিভিন্ন হয়।
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 4th question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            How can I claim my prize in case I win the lottery? | লটারি জিতলে
            পুরস্কার নিতে কীভাবে আবেদন করতে পারি?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              You have to submit a form to the state government with the
              relevant documents. Only after that, you will receive your winning
              amount. You can also visit the official lottery agency in Kolkata
              to know more updates about it.
            </p>
            <p>
              আপনাকে প্রয়োজনীয় দলিলসহ রাজ্য সরকারে একটি ফরম জমা দিতে হবে।
              তারপরেই আপনি আপনার জয়ের পরিমাণ পেতে পারবেন। আপনি এটি সম্পর্কে আরও
              তথ্যের জন্য কলকাতার অফিসিয়াল লটারি এজেন্সিতে যেতে পারেন।
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 5th question */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            Why should you use Our Website To get the Kolkata FATAFAT Lottery
            Result? | কলকাতা ফাতাফাত লটারির ফলাফল পেতে আমাদের ওয়েবসাইটটি
            ব্যবহার করা উচিত কেন?
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-5">
              Our website is very easy to use. To find out the exact Photo Fort
              Result, the main thing you will get here is Kolkata ff{" "}
              <Link href={"/tips"} className="text-green-400">
                Tips
              </Link>{" "}
              sm For Game Everyday For Totally free of Cost. Also, you can use
              our website To check fast Kolkata Satta Results with Zero
              Downtime. Most of the time you just need to visit and you will get
              the result. there is an easy solution for Online Result Checking
              and everyone can use our website. It will save you time and help
              you in finding Kolkata fatafat Results online.
            </p>
            <p>
              আমাদের ওয়েবসাইটটি খুবই সহজে ব্যবহার করা যায়। এখানে সঠিক ফোটো
              ফোর্ট ফলাফল জানতে মূল বিষয় হলো আপনি এখানে প্রতিদিন সম্পূর্ণ
              বিনামূল্যে কলকাতা এফএফ{" "}
              <Link href={"/tips"} className="text-green-400">
                টিপস
              </Link>{" "}
              পেতে পারেন। এছাড়াও, আপনি আমাদের ওয়েবসাইটটি ব্যবহার করে শীঘ্র
              কলকাতা সাত্তা ফলাফল যাচাই করতে পারেন যেটির সময়সীমা শূন্য। সবসময়
              আপনাকে শুধুমাত্র ওয়েবসাইটে পরিদর্শন করতে হবে এবং আপনি ফলাফল
              পাবেন। অনলাইনে ফলাফল পরিক্ষা করার জন্য একটি সহজ সমাধান আছে এবং
              সবাই আমাদের ওয়েবসাইটটি ব্যবহার করতে পারেন। এটি আপনার সময় সংরক্ষণ
              করবে এবং কলকাতা ফাতাফাত ফলাফল অনলাইনে খুঁজে পেতে সাহায্য করবে।
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
