import Container from "@/components/ui/container";

const CartLoading = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="h-8 w-48 animate-pulse rounded-md bg-gray-200" />

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            {/* Cart items skeleton */}
            <div className="lg:col-span-7 space-y-4">
              {/* Simulate a few cart items */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4 rounded-xl border p-4">
                  {/* Product image */}
                  <div className="h-24 w-24 shrink-0 animate-pulse rounded-lg bg-gray-200" />

                  {/* Text area */}
                  <div className="flex flex-1 flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 animate-pulse rounded-md bg-gray-200" />
                      <div className="h-4 w-1/3 animate-pulse rounded-md bg-gray-200" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200" />
                      <div className="h-8 w-20 animate-pulse rounded-md bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary skeleton */}
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="rounded-xl border p-6 space-y-4">
                <div className="h-5 w-32 animate-pulse rounded-md bg-gray-200" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200" />
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200" />
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200" />
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200" />
                  </div>
                  <div className="flex justify-between pt-2">
                    <div className="h-4 w-20 animate-pulse rounded-md bg-gray-200" />
                    <div className="h-5 w-20 animate-pulse rounded-md bg-gray-200" />
                  </div>
                </div>

                <div className="h-11 w-full animate-pulse rounded-md bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartLoading;
