import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "../ui/switch";
import { Label } from "@radix-ui/react-label";


export const StatusInput = () => {
    return (
        <Card className="w-[480px] h-[66px] bg-primary-foreground rounded-md p-4 gap-4 flex items-center justify-between">
            <div>
                <h1 className="text-[14px] font-sans">Status</h1>
                <p className="text-[12px] text-muted-foreground">Definia se o usuário estará ativo ao ser adicionado.</p>
            </div>
            <span className="flex items-center gap-2">
                <Switch id="ativo"/>
                <Label htmlFor="ativo">
                    Ativo
                </Label>
            </span>
        </Card>
    );
}