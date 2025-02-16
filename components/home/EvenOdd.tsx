import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDayOfWeek } from "../helpers/DaysOfTheWeek";
import { Button } from "../ui/button";
import { EvenOddArrray } from "@/constants/EvenOdd";

const EvenOdd = ({ data }: { data: LatestUpdateDataType[] }) => {
  return (
    <section className="mt-7">
      <Table className="cursor-default border-b">
        <TableHeader className="bg-accentColor">
          <TableRow>
            {EvenOddArrray.map((item: string, index: number) => (
              <TableHead
                key={index}
                className={`text-black text-lg dark:text-black w-[200px] font-bold text-[0.80rem] md:text-lg text-center h-8 dark:border-black ${
                  index !== 9 && "border-r-2"
                } px-0 py-1 leading-4`}
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
    </section>
  );
};

export default EvenOdd;
