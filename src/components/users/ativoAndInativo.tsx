type Props = {
    type: "Ativo" | "Inativo";
}

export const AtivoAndInativo = ({ type }: Props) => {
    return (
        <span className={`w-[49px] h-[20px] flex items-center justify-center bg-secondary rounded-full py-[2px] px-[3px] text-[12px] font-semibold font-sans
            ${type === "Inativo" && "border border-[#E4E4E7] bg-white px-1 text-muted-foreground"}
            `}
            >{type}</span>
    );
}