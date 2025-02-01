import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div
      className="bg-[#0a0a0a] text-white shadow-lg rounded-xl overflow-hidden 
      border border-gray-800"
    >
      {/* Image Placeholder */}
      <div className="p-0 relative">
        <Skeleton className="w-full h-60 bg-gray-800" />
        <div className="absolute top-2 right-2 bg-black/70 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <Skeleton className="h-4 w-4 bg-gray-700 rounded-full" />
          <Skeleton className="h-4 w-8 bg-gray-700 rounded-full" />
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <Skeleton className="h-8 w-3/4 bg-gray-800 rounded-lg" />
          <Skeleton className="h-4 w-1/2 bg-gray-800 rounded-lg" />
        </div>
        <Skeleton className="h-6 w-1/4 bg-gray-800 rounded-lg" />

        {/* Features Placeholder */}
        <div className="flex space-x-2 text-sm text-gray-400">
          <Skeleton className="h-4 w-16 bg-gray-800 rounded-lg" />
          <Skeleton className="h-4 w-16 bg-gray-800 rounded-lg" />
          <Skeleton className="h-4 w-16 bg-gray-800 rounded-lg" />
        </div>
      </div>

      {/* Buttons Placeholder */}
      <div className="p-6 pt-0">
        <div className="flex gap-4 w-full">
          <Skeleton className="w-full h-12 bg-gray-800 rounded-lg" />
          <Skeleton className="w-full h-12 bg-gray-800 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
