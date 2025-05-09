import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AvatarUser } from "./avatarUser";
import { Calendar, Clock, EllipsisVertical, Tag, User } from "lucide-react";
import { Button } from "../ui/button";
import { AtivoAndInativo } from "./ativoAndInativo";


export const UserItem = () => {
    return (
        <Card className="h-[80px] rounded-lg border p-3 gap-3">
            <div className="flex justify-between items-center h-full">
                <div className="flex gap-3">
                    <AvatarUser />
                    <div className="text-muted-foreground text-[12px]">
                        <div className="flex gap-3 items-center">
                            <h3 className="text-foreground text-[14px] font-sans">José Ricardo Gomes</h3>
                            <div className="flex gap-1 items-center">
                                <User size={12} />
                                <span>51 anos, Homem</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex gap-1 items-center">
                                <Calendar size={12} />
                                <span>22/03/2025 - 10:21am</span>
                            </span>
                            <span className="flex gap-1 items-center">
                                <Clock size={12} />
                                <span>38m22s</span>
                            </span>
                            <span className="flex gap-1 items-center">
                                <Tag size={12} />
                                <span>Usuário padrão</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <AtivoAndInativo type="Ativo"/>
                    <Button variant={"ghost"}>
                        <EllipsisVertical size={12}/>
                    </Button>
                </div>
            </div>
        </Card>
    );
}