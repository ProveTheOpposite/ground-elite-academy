import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header Section Skeleton */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-y-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 animate-pulse rounded-full bg-gray-200"></div>
                <div className="space-y-2">
                  <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>
              <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information Section Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
            </div>
            <div className="h-4 w-64 animate-pulse rounded bg-gray-200"></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="mb-1 h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 animate-pulse rounded bg-gray-100"></div>
              </div>
              <div>
                <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 animate-pulse rounded bg-gray-100"></div>
              </div>
            </div>

            <div>
              <div className="mb-1 h-4 w-28 animate-pulse rounded bg-gray-200"></div>
              <div className="h-12 animate-pulse rounded bg-gray-100"></div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="mb-1 h-4 w-36 animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 animate-pulse rounded bg-gray-100"></div>
              </div>
              <div>
                <div className="mb-1 h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                <div className="h-12 animate-pulse rounded bg-gray-100"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reset Password */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-40 animate-pulse rounded bg-gray-200"></div>
            </div>
            <div className="h-4 w-64 animate-pulse rounded bg-gray-200"></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-y-4 rounded-lg border p-4 md:flex-row md:items-center md:justify-between">
              <div className="gap-4">
                <div className="flex items-center gap-2">
                  <div className="mb-1 h-8 w-8 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-6 w-96 animate-pulse rounded bg-gray-100"></div>
                </div>
              </div>

              <div className="h-6 w-full animate-pulse rounded bg-gray-200 md:w-[118px]"></div>
            </div>
          </CardContent>
        </Card>

        {/* Registered Children Section Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200"></div>
            </div>
            <div className="h-4 w-56 animate-pulse rounded bg-gray-200"></div>
          </CardHeader>
          <CardContent className="md:flex md:gap-x-4">
            <div className="rounded-lg border bg-white p-4 md:flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="space-y-1">
                    <div className="h-5 w-24 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
                <div className="h-8 w-16 animate-pulse rounded bg-gray-200"></div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-white p-4 md:mt-0 md:flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="space-y-1">
                    <div className="h-5 w-24 animate-pulse rounded bg-gray-200"></div>
                    <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
                <div className="h-8 w-16 animate-pulse rounded bg-gray-200"></div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consents Section Skeleton */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b py-3 last:border-b-0"
              >
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-48 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                </div>
                <div className="ml-4 h-6 w-24 animate-pulse rounded bg-gray-200"></div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
