import { Bell, CircleHelp, ListFilter } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    type: string;
}

export const IconItem = ({ type }: Props) => {
    return (
        <Button variant={"ghost"} className="w-10 h-10 rounded-full border flex items-center justify-center">
            {type === "help" && <CircleHelp size={16} />}
            {type === "bell" && <Bell size={16} />}
            {type === "filter" && <ListFilter size={16} />}
        </Button>
    );
}