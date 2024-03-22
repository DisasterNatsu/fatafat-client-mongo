import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FaArrowRightLong } from "react-icons/fa6";

const TimeTable = () => (
  <div>
    <Table className="cursor-default border-b dark:border-white">
      <TableBody>
        {/* 1st  */}
        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              1st Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
              <span className="hidden md:flex">(প্রথম বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            10:12 AM{" "}
            <span className="hidden md:inline-block">( সকাল ১০:১২ )</span>
          </TableCell>
        </TableRow>

        {/* 2nd */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              2nd Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
              <span className="hidden md:flex">(দ্বিতীয় বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            11:43 AM{" "}
            <span className="hidden md:inline-block">( সকাল ১১:৪৩ )</span>
          </TableCell>
        </TableRow>

        {/* 3rd */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              3rd Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
              <span className="hidden md:flex">(তৃতীয় বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            01:14 PM{" "}
            <span className="hidden md:inline-block">( দুপুর ০১:১৪ )</span>
          </TableCell>
        </TableRow>

        {/* 4th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              4th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>
              <span className="hidden md:flex">(চতুর্থ বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            02:45 PM{" "}
            <span className="hidden md:inline-block">( দুপুর ০২:৪৫ )</span>
          </TableCell>
        </TableRow>

        {/* 5th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              5th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>{" "}
              <span className="hidden md:flex">(পঞ্চম বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            04:16 PM{" "}
            <span className="hidden md:inline-block">( বিকেল ০৪:১৬ )</span>
          </TableCell>
        </TableRow>

        {/* 6th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              6th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>{" "}
              <span className="hidden md:flex">(ষষ্ঠ বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            05:47 PM{" "}
            <span className="hidden md:inline-block">( বিকেল ০৫:৪৭ )</span>
          </TableCell>
        </TableRow>

        {/* 7th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              7th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>{" "}
              <span className="hidden md:flex">(সপ্তম বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            07:18 PM{" "}
            <span className="hidden md:inline-block">( সন্ধ্যা ০৭:১৮ )</span>
          </TableCell>
        </TableRow>

        {/* 8th */}

        <TableRow>
          <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] md:text-xl text-md">
            <p className="flex items-center gap-2 justify-center">
              8th Baji Draw{" "}
              <span className="md:hidden">
                <FaArrowRightLong />
              </span>{" "}
              <span className="hidden md:flex">(অষ্টম বাজি খেলার সময়)</span>
            </p>
          </TableCell>
          <TableCell className="text-center w-[50%] text-xl">
            08:49 PM{" "}
            <span className="hidden md:inline-block">( রাত ০৮:৪৯ )</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TimeTable;
