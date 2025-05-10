import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Plus } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { StatusInput } from "./statusInput"
import { ToastUser } from "./toastUser"
import { IconItem } from "../header/iconItem"
import { useState } from "react"

export function SheetAddUser() {
    const [open, setOpen] = useState(false);

    const [isAtivo, setIsAtivo] = useState<boolean>(false);

    const closeSheet = () => {
        if(open === true) setOpen(false);
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="w-[117px] h-10 rounded-full bg-[#102822] py-2 px-4 flex items-center gap-2 text-[14px]">
                    <Plus />
                    Adicionar
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col min-w-[560px] p-10 gap-10">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle className="font-serif text-2xl font-normal">Adicionar usuário</SheetTitle>
                    <IconItem type="x" onClick={closeSheet} />
                </SheetHeader>
                <div className="flex flex-col justify-between h-full">
                    <form className="flex flex-col gap-5">
                        <div>
                            <Label htmlFor="nome">
                                Nome completo
                            </Label>
                            <Input id="nome" placeholder="Digite o nome" />
                        </div>
                        <div>
                            <Label htmlFor="email">
                                E-mail
                            </Label>
                            <Input id="email" placeholder="Digite o e-mail" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="tel">
                                Telefone
                            </Label>
                            <Input id="tel" placeholder="Digite o telefone" />
                            <div className="flex gap-2">
                                <Checkbox id="zap" />
                                <Label htmlFor="zap">
                                    WhatsApp
                                </Label>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-[16px]">
                            <span>
                                <Label htmlFor="cpf">
                                    CPF
                                </Label>
                                <Input id="cpf" placeholder="Informe o CPF" />
                            </span>
                            <span>
                                <Label htmlFor="rg">
                                    RG
                                </Label>
                                <Input id="rg" placeholder="Informe o RG" />
                            </span>
                        </div>

                        <div>
                            <Label htmlFor="email2">
                                E-mail
                            </Label>
                            <Input id="email2" placeholder="Informe o e-mail" />
                        </div>

                        <div>
                            <StatusInput isAtivo={isAtivo} setIsAtivo={setIsAtivo} />
                        </div>
                    </form>
                    <SheetFooter >
                        <SheetClose>
                            <Button variant={"ghost"} className="w-[89px] h-10 rounded-full border text-[14px] font-normal">Cancelar</Button>
                        </SheetClose>
                        <ToastUser />
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    )
}
