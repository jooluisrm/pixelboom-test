import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const SelectItens = () => {
    return (
        <Select defaultValue="10">
            <SelectTrigger className="w-[70px] h-10 rounded-md border py-2 px-3">
                <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="10">10</SelectItem>
            </SelectContent>
        </Select>

    );
}