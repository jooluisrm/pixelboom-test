import { Bell, CircleHelp } from "lucide-react";

type Props = {
    type: string;
}

export const IconItem = ({ type }: Props) => {
    return (
        <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            {type === "help" ? <CircleHelp size={16}/> : <Bell size={16}/>}
        </div>
    );
}