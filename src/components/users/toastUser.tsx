"use client"

import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "../ui/toast"
import { Button } from "../ui/button"


export function ToastUser() {
    const { toast } = useToast()

    return (
        <Button
            type="submit"
            className="w-[89px] h-10 rounded-full border bg-[#102822] text-[14px] font-normal"
        >
            Adicionar
        </Button>

    )
}
