import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircleMore } from "lucide-react";

const Message = ({ data }: { data: MessageDataType | null }) => {
  return (
    <div className="fixed md:right-5 right-2 bottom-5 z-50 aria-hidden">
      {data ? (
        <Dialog>
          <DialogTrigger className="flex items-center justify-center px-3 py-2 bg-red-600 text-white rounded-full">
            Message{" "}
            <MessageCircleMore className="h-15 w-15 ml-1 rounded-full overflow-visible" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">
                {data.heading}
              </DialogTitle>
              <DialogDescription className="text-lg font-semibold">
                {data.message}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

export default Message;
