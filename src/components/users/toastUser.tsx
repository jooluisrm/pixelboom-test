"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "../ui/button"
import { ToastAction } from "../ui/toast"

export function ToastUser() {
    const { toast } = useToast()

    return (
        <Button
            className="w-[89px] h-10 rounded-full border bg-[#102822] text-[14px] font-normal"
            onClick={() => {
                toast({
                    title: "Usuário adicionado com sucesso!",
                    action: (
                        <ToastAction altText="Fechar" className="text-[14px] font-sans rounded-full w-[72px] h-10 py-2 px-4">Fechar</ToastAction>
                    ),
                })
            }}
        >
            Adicionar
        </Button>

    )
}
