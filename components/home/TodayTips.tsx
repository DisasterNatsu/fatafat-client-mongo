import React from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { isSunday } from "../helpers/CheckSunday";
import { DateFormatterQuery } from "../helpers/DateQueryFormatter";

interface TipData {
  tips: { index: number; tip: string }[];
}

interface LatestUpdateDataType {
  _id: string;
  date: string;
  data: { index: number; gameResultPatti: number; gameNumber: number }[];
  createdAt: string;
  __v: number;
}

const getOrdinalSuffix = (number: number, sunday: boolean): string => {
  if (number === 1 || number === null || number === undefined)
    return `${number || 1}st`;
  if (number === 2) return `${number}nd`;
  if (number === 3) return `${number}rd`;
  if (number === 9) return `${number - 1}th`;
  if (sunday && number === 5) return `${number - 1}th`;

  return `${number}th`;
};

const TodayTips: React.FC<{
  data: TipData;
  resultData?: LatestUpdateDataType | null;
}> = ({ data, resultData }) => {
  const queryDate = DateFormatterQuery();
  const sunday = isSunday(queryDate);

  let tipIndex = 0;
  if (resultData !== null && resultData !== undefined) {
    tipIndex = sunday
      ? Math.min(resultData.data.length, 4)
      : Math.min(resultData.data.length, 8);
  }

  const getOrdinalTip = (): string => {
    if (resultData === null || resultData === undefined) return "--";

    if (sunday && tipIndex === 4) {
      return data.tips[tipIndex - 1]?.tip || "--";
    } else if (!sunday && tipIndex === 8) {
      return data.tips[tipIndex - 1]?.tip || "--";
    } else {
      return data.tips[tipIndex]?.tip || "--";
    }
  };

  return (
    <>
      <div id="home-tips" className="cursor-pointer">
        <h1 className="mt-5 text-center text-2xl font-bold bg-accentColor text-black">
          Tips for{" "}
          {resultData !== null &&
          resultData !== undefined &&
          resultData.data.length
            ? getOrdinalSuffix(resultData.data.length + 1, sunday)
            : "1st"}{" "}
          baji
        </h1>
        <Table className="cursor-pointer border-b dark:border-white text-center">
          <TableBody>
            <TableRow>
              <TableCell className="border-r border-b dark:border-white w-52">
                {resultData !== null &&
                resultData !== undefined &&
                resultData.data.length
                  ? getOrdinalSuffix(resultData.data.length + 1, sunday)
                  : "1st"}{" "}
                Baji Tips
              </TableCell>
              <TableCell>{resultData ? getOrdinalTip() : "--"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TodayTips;
