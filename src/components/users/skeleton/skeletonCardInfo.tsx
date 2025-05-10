import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCardInfo = () => {
  return (
    <div className="w-[225px] h-[100px] bg-primary-foreground rounded-lg p-6 flex flex-col gap-2">
      <Skeleton className="h-[14px] w-[60px]" />
      <Skeleton className="h-[32px] w-[70px]" />
    </div>
  );
};
