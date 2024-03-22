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

const LastTenDaysTable = ({ data }: { data: LatestUpdateDataType[] }) => {
  return (
    <section>
      <div>
        {/* table */}
        <Table className="cursor-default border-b">
          {/* Table Header */}
          <TableHeader className="bg-accentColor">
            <TableRow>
              <TableHead className="text-black border-r-2 dark:text-black w-[200px] font-semibold md:font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black px-0">
                Date
              </TableHead>
              {arr.map((_, index: number) => (
                <TableHead
                  key={index}
                  className={`text-black text-lg dark:text-black w-[200px] font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black ${
                    index !== arr.length - 1 && "border-r-2"
                  } px-0 py-1 leading-4`}
                >
                  {index + 1}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          {/* table body */}

          {data &&
            data.reverse().map((item: LatestUpdateDataType, index: number) => {
              const day = getDayOfWeek(item.date);

              return (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell
                      className="px-0 text-xs font-semibold text-center md:text-base md:font-bold bg-slate-300 dark:bg-slate-900 border-b"
                      id={index === data.length - 11 ? "last-ten-days" : ""}
                    >
                      {day} <br className="sm:hidden" />{" "}
                      {item.date.split("-").splice(0, 2).join("/")}
                    </TableCell>
                    {arr.map((_, index: number) => (
                      <TableCell
                        className="text-center border-x-2 p-0 py-1 font-bold border-b border-b-slate-300 dark:border-b-slate-500"
                        key={index}
                      >
                        {item.data[index]
                          ? item.data[index].gameResultPatti
                          : "--"}
                        <br />
                        {item.data[index] ? item.data[index].gameNumber : "--"}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              );
            })}
        </Table>
      </div>
    </section>
  );
};

export default LastTenDaysTable;
