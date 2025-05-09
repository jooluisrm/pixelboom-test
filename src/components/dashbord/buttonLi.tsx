import { Activity, FileCheck, Settings, User } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    text: string;
    active: boolean;
}

export const ButtonLi = ({ text, active }: Props) => {
    return (
        <li className={`w-full cursor-pointer text-[14px] h-[40px] text-start flex items-center gap-3 py-2 px-3 rounded-full list-none ${active && "bg-[#102822] text-[#F4F4F5]"} `}>
            {
                text === "Dashbord" && <Activity size={16}/>
            }
            {
                text === "Usuários" && <User size={16}/>
            }
            {
                text === "Documentos" && <FileCheck size={16}/>
            }
            {
                text === "Geral" && <Settings size={16}/>
            }
            {text}
        </li>
    );
}