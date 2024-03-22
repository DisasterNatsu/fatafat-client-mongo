"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { arr } from "@/constants/DummyArray";

interface DataProp {
  message: string;
  displayDashes: boolean;
}

const CurrentDayTable = ({ data }: { data?: LatestUpdateDataType }) => {
  const Router = useRouter();

  const handleRefresh = () => {
    return Router.refresh();
  };

  return (
    <div>
      <Table className="cursor-default border-b dark:border-black">
        <TableHeader className="bg-accentColor">
          <TableRow>
            {arr?.map((_item, index) => (
              <TableHead
                className="w-[200px] text-black font-extrabold text-center h-8 dark:border-black border-x-2 text-lg px-0 py-2"
                key={index}
              >
                {index + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {data
              ? arr.map((_, index) => {
                  return (
                    <TableCell
                      className="text-center font-bold text-black dark:text-white dark:border-black border-x-2 p-0 py-1"
                      key={index}
                    >
                      {data.data[index] ? (
                        <>
                          <p className="text-[1.05rem] py-2 px-0">
                            {data.data[index].gameResultPatti}
                          </p>
                          <hr />
                          <p className="text-[1.05rem] py-2 px-0">
                            {data.data[index].gameNumber}
                          </p>
                        </>
                      ) : (
                        <>
                          {data.data.length === index && index !== 8 ? (
                            <Link
                              href={"/tips"}
                              className="hover:text-accentColor"
                            >
                              Tips
                            </Link>
                          ) : (
                            <>{"--"}</>
                          )}
                        </>
                      )}
                    </TableCell>
                  );
                })
              : arr.map((_, index) => (
                  <TableCell
                    className="text-center dark:border-black border-x-2 p-0"
                    key={index}
                  >
                    {"--"}
                    <hr />
                    {"--"}
                  </TableCell>
                ))}
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex justify-center items-center gap-3 mt-3">
        <Button
          variant={"secondary"}
          className="font-semibold text-lg lg:hidden"
          onClick={() => Router.push("/tips")}
        >
          Tips
        </Button>
        <button
          className="py-2 px-3 text-black bg-accentColor rounded-md hover:bg-accentColor/75 font-semibold"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CurrentDayTable;