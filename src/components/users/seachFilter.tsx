import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { IconItem } from "../header/iconItem";

export const SearchFilter = () => {
    return (
        <>
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                    placeholder="Buscar..."
                    className="pl-9 pr-3 py-2 rounded-md h-10 w-full"
                />
            </div>
            <IconItem type="filter" />
        </>
    );
}