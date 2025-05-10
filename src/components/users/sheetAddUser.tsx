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
import { IconItem } from "../header/iconItem"
import { useState } from "react"
import { FormAddUser } from "./formAddUser"

export function SheetAddUser() {
    const [open, setOpen] = useState(false);

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
            <SheetContent className="flex flex-col min-w-[560px] px-10 py-5 2xl:p-10 gap-5 2xl:gap-10">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle className="font-serif text-2xl font-normal">Adicionar usuário</SheetTitle>
                    <IconItem type="x" onClick={closeSheet} />
                </SheetHeader>
                <div className="flex flex-col justify-between h-full">
                    <FormAddUser />
                </div>
            </SheetContent>
        </Sheet>
    )
}
