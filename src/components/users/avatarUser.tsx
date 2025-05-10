import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type Props = {
    nome: string;
}

export function AvatarUser({ nome }: Props) {

    const getInitials = (nome: string) => {
        const nomes = nome.trim().split(" ");
        if (nomes.length === 1) return nomes[0][0].toUpperCase();
        return (nomes[0][0] + nomes[nomes.length - 1][0]).toUpperCase();
    }
    
    return (
        <Avatar>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>{getInitials(nome)}</AvatarFallback>
        </Avatar>
    )
}
