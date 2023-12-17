import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoFilter } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Trips() {
  return (
    <Dialog>
      <div className="flex justify-center items-center h-full">
        <Input
          type="text"
          placeholder="Search for a trip"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-transparent"
        />
        <DialogTrigger asChild>
          <Button className="ml-2">
            <IoFilter />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Are you sure absolutely sure?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </div>
    </Dialog>
  );
}
