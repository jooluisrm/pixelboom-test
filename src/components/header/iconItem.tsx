"use client"

import { Bell, CircleHelp, ListFilter, X } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    type: string;
    onClick?: any;
}

export const IconItem = ({ type, onClick }: Props) => {
    return (
        <Button onClick={onClick} variant={"ghost"} className="w-10 h-10 rounded-full border flex items-center justify-center">
            {type === "help" && <CircleHelp size={16} />}
            {type === "bell" && <Bell size={16} />}
            {type === "filter" && <ListFilter size={16} />}
            {type === "x" && <X />}
        </Button>
    );
}