"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { EllipsisVertical } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { StatusInput } from "./statusInput";
import { Usuario } from "@/data/usersList";
import { useState } from "react";

type Props = {
    item: Usuario;
}

export const DialogEditUser = ({ item }: Props) => {

    const [nome, setNome] = useState(item.nome);
    const [email, setEmail] = useState(item.email);
    const [telefone, setTelefone] = useState(item.telefone);
    const [cpf, setCpf] = useState(item.cpf);
    const [rg, setRg] = useState(item.rg);
    const [email2, setEmail2] = useState(item.email);
    const [isZap, setIsZap] = useState<boolean>(item.zap); 
    const [isAtivo, setIsAtivo] = useState<boolean>(item.status === 'Ativo' ? true : false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"ghost"}>
                    <EllipsisVertical size={12} />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-4">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl font-normal">Editar usuário</DialogTitle>
                    <DialogDescription>
                        Edite as informações do usuário.
                    </DialogDescription>
                </DialogHeader>

                <form className="flex flex-col gap-5 mt-6">
                    <div>
                        <Label htmlFor="nome">Nome completo</Label>
                        <Input
                            id="nome"
                            placeholder="Digite o nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            placeholder="Digite o e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="tel">Telefone</Label>
                        <Input
                            id="tel"
                            placeholder="Digite o telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <Checkbox
                                id="zap"
                                checked={isZap}
                                onCheckedChange={(checked) => setIsZap(checked === true)}
                            />
                            <Label htmlFor="zap">WhatsApp</Label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[16px]">
                        <div>
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                                id="cpf"
                                placeholder="Informe o CPF"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="rg">RG</Label>
                            <Input
                                id="rg"
                                placeholder="Informe o RG"
                                value={rg}
                                onChange={(e) => setRg(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email2">E-mail</Label>
                        <Input
                            id="email2"
                            placeholder="Informe o e-mail"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                        />
                    </div>

                    <StatusInput isAtivo={isAtivo} setIsAtivo={setIsAtivo}/>
                </form>
            </DialogContent>

        </Dialog>
    );
}