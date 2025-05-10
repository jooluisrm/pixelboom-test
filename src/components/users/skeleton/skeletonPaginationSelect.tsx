import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonPaginationSection() {
  return (
    <div className="flex justify-between items-center w-full mt-4">
      {/* Texto: 5 de 294 itens */}
      <Skeleton className="h-4 w-[100px]" />

      {/* Paginação */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>

      {/* Itens por página */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[70px] rounded-md" />
      </div>
    </div>
  )
}
