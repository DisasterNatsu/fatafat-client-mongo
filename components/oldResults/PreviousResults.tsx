"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { arr } from "@/constants/DummyArray";
import { getDayOfWeek } from "../helpers/DaysOfTheWeek";
import { MonthFormatter } from "../helpers/MonthFormatter";
import { Button } from "../ui/button";

const PreviousTable = ({ data }: { data: LatestUpdateDataType[] }) => {
  // Declare state for selected numbers
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Function to group data by month
  const groupDataByMonth = () => {
    const groupedData: { [key: string]: LatestUpdateDataType[] } = {};

    data.forEach((item) => {
      const monthYear = item.date.split("-").slice(1, 3).join("-");
      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }
      groupedData[monthYear].push(item);
    });

    return groupedData;
  };

  const groupedData = groupDataByMonth();

  // Sort the months in descending order
  const sortedMonths = Object.keys(groupedData).sort((a: string, b: string) => {
    const [dayA, monthA, yearA] = a.split("-").map(Number);
    const [dayB, monthB, yearB] = b.split("-").map(Number);

    // Create Date objects
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    // Check if dates are valid
    const isValidDateA = !isNaN(dateA.getTime());
    const isValidDateB = !isNaN(dateB.getTime());

    if (!isValidDateA && !isValidDateB) return 0; // Both dates are invalid, treat them as equal
    if (!isValidDateA) return 1; // dateA is invalid, move it to the end
    if (!isValidDateB) return -1; // dateB is invalid, move it to the beginning

    // Compare valid dates
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section>
      <div>
        {/* Iterate over each month */}
        {sortedMonths.map((monthYear, index: number) => {
          const fomattedMonth = MonthFormatter(monthYear.split("-")[0]);

          // Function to handle number selection
          const handleNumberSelect = (number: number) => {
            if (selectedNumbers.includes(number)) {
              setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
            } else {
              setSelectedNumbers([...selectedNumbers, number]);
            }
          };

          // Function to determine the highlight color for a selected number
          const getHighlightColor = (number: number) => {
            const index = selectedNumbers.indexOf(number);
            const colors = [
              "hover:bg-yellow-400 bg-yellow-400 text-black hover:text-black",
              "hover:bg-blue-400 bg-blue-400 text-black hover:text-black",
              "hover:bg-green-400 bg-green-400 text-black hover:text-black",
              "hover:bg-pink-400 bg-pink-400 text-black hover:text-black",
              "hover:bg-purple-400 bg-purple-400 text-black hover:text-black",
              "hover:bg-orange-400 bg-orange-400 text-black hover:text-black",
              "hover:bg-cyan-400 bg-cyan-400 text-black hover:text-black",
              "hover:bg-indigo-400 bg-indigo-400 text-black hover:text-black",
              "hover:bg-red-400 bg-red-400 text-black hover:text-black",
              "hover:bg-teal-400 bg-teal-400 text-black hover:text-black",
            ];
            return index !== -1 ? colors[index % colors.length] : "";
          };

          // Function to determine if a cell should be highlighted
          const shouldHighlightCell = (cellNumber: number) => {
            return selectedNumbers.includes(cellNumber);
          };

          return (
            <div key={monthYear}>
              <h3
                className={`text-center bg-accentColor text-black text-2xl my-1 py-1 font-semibold ${
                  index !== 0 && "mt-5"
                }`}
              >{`${fomattedMonth} ${monthYear.split("-")[1]}`}</h3>
              {/* Table */}
              <Table className="cursor-default border-b">
                {/* Table Header */}
                <TableHeader className="accent-colors">
                  <TableRow>
                    <TableHead className="bg-accentColor text-black border-r w-[200px] font-semibold md:font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black px-0">
                      Date
                    </TableHead>
                    {arr.map((_, index: number) => (
                      <TableHead
                        key={index}
                        className={`bg-accentColor text-black w-[200px] font-semibold text-[0.80rem] md:text-lg text-center h-8 dark:border-black text-xs ${
                          index !== arr.length - 1 && "border-r-2"
                        } px-0 py-1 leading-4`}
                      >
                        {index + 1}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                {/* Table body */}
                <TableBody>
                  {groupedData[monthYear]
                    .reverse()
                    .map((item: LatestUpdateDataType, index: number) => {
                      const day = getDayOfWeek(item.date);

                      return (
                        <TableRow key={index} className="border-b">
                          <TableCell
                            className="p-0 text-xs font-semibold text-center md:text-base md:font-bold bg-slate-300 dark:bg-slate-900 border-b"
                            id={
                              index === groupedData[monthYear].length - 11
                                ? "last-ten-days"
                                : ""
                            }
                          >
                            {day} <br className="sm:hidden" />{" "}
                            {item.date.split("-").splice(0, 2).join("/")}
                          </TableCell>
                          {arr.map((_, index: number) => (
                            <TableCell
                              className={`text-center dark:border-black border-x-2 p-0 py-1 font-bold ${
                                item.data[index] &&
                                shouldHighlightCell(
                                  item.data[index].gameNumber
                                ) &&
                                getHighlightColor(item.data[index].gameNumber)
                              }`}
                              key={index}
                            >
                              {item.data[index]
                                ? item.data[index].gameResultPatti
                                : "--"}
                              <br />
                              {item.data[index]
                                ? item.data[index].gameNumber
                                : "--"}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
              <div>
                <h3 className="text-center mt-2 font-semibold py-2">
                  বক্স ঘরে ক্লিক করে বিগত দিনের রিপিট ঘর দেখুন।
                </h3>

                <ul className="flex mt-2 items-center justify-center space-x-2">
                  {[...Array(10)].map((_, index: number) => (
                    <Button
                      variant={"outline"}
                      onClick={() => handleNumberSelect(index)}
                      className={`px-2 md:px-3 text-base font-semibold border-stone-700 dark:border-slate-400 ${
                        shouldHighlightCell(index) && getHighlightColor(index)
                      }`}
                      key={index + 1}
                    >
                      {index}
                    </Button>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PreviousTable;
