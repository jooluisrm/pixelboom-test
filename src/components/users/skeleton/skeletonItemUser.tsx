import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "../../ui/card"

export const SkeletonItemUser = () => {
    return (
        <Card className="h-[80px] rounded-lg border p-3 gap-3">
            <div className="flex justify-between items-center h-full">
                <div className="flex gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex flex-col gap-2 text-[12px] text-muted-foreground">
                        <div className="flex gap-3 items-center">
                            <Skeleton className="h-4 w-[140px]" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>
                        <div className="flex gap-3 items-center">
                            <Skeleton className="h-3 w-[120px]" />
                            <Skeleton className="h-3 w-[60px]" />
                            <Skeleton className="h-3 w-[100px]" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-[50px] rounded-full" />
                    <Skeleton className="h-5 w-5 rounded" />
                </div>
            </div>
        </Card>
    )
}
