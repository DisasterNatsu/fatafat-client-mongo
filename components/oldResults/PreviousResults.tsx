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
import LastTenDaysTable from "../home/LastTenDaysTable";

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

              <LastTenDaysTable data={groupedData[monthYear]} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PreviousTable;
