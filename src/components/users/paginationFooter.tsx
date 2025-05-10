import { Label } from "../ui/label";
import { PaginationUser } from "./paginationUser";
import { SelectItens } from "./select";

export const PaginationFooter = () => {
    return (
        <>
            <div className="text-[14px] font-sans text-muted-foreground">
                5 de 294 itens
            </div>
            <div>
                <PaginationUser />
            </div>
            <div className="flex items-center gap-2">
                <Label className="text-muted-foreground font-sans text-[14px] font-normal">Itens por página</Label>
                <SelectItens />
            </div>
        </>
    );
}