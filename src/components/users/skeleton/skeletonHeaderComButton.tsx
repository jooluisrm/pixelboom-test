import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonHeaderComButton() {
  return (
    <div className="flex justify-between items-center pb-5">
      <Skeleton className="h-8 w-[120px]" /> {/* Título */}
      <Skeleton className="h-10 w-[117px] rounded-full" /> {/* Botão */}
    </div>
  )
}
