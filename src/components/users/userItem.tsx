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
import { DialogEditUser } from "./dialogEditUser";
import { Usuario } from "@/types/usuariosType";


type Props = {
    item: Usuario;
}

export const UserItem = ({ item }: Props) => {
    return (
        <Card className="h-[80px] rounded-lg border p-3 gap-3">
            <div className="flex justify-between items-center h-full">
                <div className="flex gap-3">
                    <AvatarUser />
                    <div className="text-muted-foreground text-[12px]">
                        <div className="flex gap-3 items-center">
                            <h3 className="text-foreground text-[14px] font-sans">{item.nome}</h3>
                            <div className="flex gap-1 items-center">
                                <User size={12} />
                                <span>{item.idade} anos, {item.genero}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex gap-1 items-center">
                                <Calendar size={12} />
                                <span>{item.dataCadastro} - {item.horaCadastro}</span>
                            </span>
                            <span className="flex gap-1 items-center">
                                <Clock size={12} />
                                <span>{item.tempoAtivo}</span>
                            </span>
                            <span className="flex gap-1 items-center">
                                <Tag size={12} />
                                <span>{item.tipoUsuario}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <AtivoAndInativo type={item.status} />
                    <DialogEditUser item={item}/>
                </div>
            </div>
        </Card>
    );
}