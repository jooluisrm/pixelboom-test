type Props = {
    type: "Ativo" | "Inativo";
}

export const AtivoAndInativo = ({ type }: Props) => {
    return (
        <span className="w-[49px] h-[20px] flex items-center justify-center bg-secondary rounded-full py-[0.5px] px-[2.5px] text-[12px font-semibold font-sans]">{type}</span>
    );
}