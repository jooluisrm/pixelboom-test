import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonFiltre = () => {
  return (
    <div className="flex gap-2 w-full items-center">
      <Skeleton className="h-10 w-full rounded-md" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  );
};
