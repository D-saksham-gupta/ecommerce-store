export default function ProductLoading() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top section: Gallery + Info */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Gallery Skeleton */}
          <div className="space-y-4">
            <div className="aspect-square w-full animate-pulse rounded-xl bg-gray-200" />
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 w-20 animate-pulse rounded-lg bg-gray-200"
                />
              ))}
            </div>
          </div>

          {/* Info Skeleton */}
          <div className="mt-10 space-y-6 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="h-8 w-3/4 animate-pulse rounded-md bg-gray-200" />
            <div className="h-6 w-1/4 animate-pulse rounded-md bg-gray-200" />
            <div className="h-24 w-full animate-pulse rounded-md bg-gray-200" />

            <div className="space-y-4">
              <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
              <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
            </div>
          </div>
        </div>

        <hr className="my-10" />

        {/* Suggested Products Skeleton */}
        <div className="space-y-6">
          <div className="h-6 w-48 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3 rounded-xl border p-4">
                <div className="aspect-square w-full animate-pulse rounded-lg bg-gray-200" />
                <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200" />
                <div className="h-4 w-1/3 animate-pulse rounded-md bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
