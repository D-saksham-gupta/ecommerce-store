// app/(routes)/category/[categoryId]/loading.tsx

import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="bg-white">
      <Container>
        {/* Billboard skeleton */}
        <div className="mt-8 mb-6 h-52 w-full animate-pulse rounded-xl bg-gray-300" />

        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Filters skeleton */}
            <div className="hidden lg:block">
              <div className="mb-4 h-8 w-29 animate-pulse rounded bg-gray-400">
                <div className="mb-4 h-8 w-24 animate-pulse rounded bg-gray-400" />
                <div className="mb-2 h-8 w-32 animate-pulse rounded bg-gray-400" />
                <div className="mb-2 h-8 w-28 animate-pulse rounded bg-gray-400" />
              </div>
            </div>

            {/* Products skeleton */}
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-72 rounded-xl bg-gray-300 animate-pulse flex flex-col"
                  >
                    {/* Push this to bottom */}
                    <div className="mt-auto h-12 bg-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
