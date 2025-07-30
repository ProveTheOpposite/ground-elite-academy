import { Badge } from "@/components/ui/badge";

import {
  Calendar,
  ChevronRightIcon,
  Clock,
  Home,
  Share2,
  User,
} from "lucide-react";

export default function ArticleDetailPageSkeleton() {
  return (
    <>
      {/* Article Header Skeleton */}
      <section className="mb-10 text-center">
        <div className="mx-auto mb-4 h-10 w-3/4 animate-pulse rounded bg-gray-200"></div>
        <div className="mx-auto mb-6 h-8 w-1/2 animate-pulse rounded bg-gray-200"></div>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4 text-gray-300" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-gray-300" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4 text-gray-300" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Badge className="h-6 w-20 animate-pulse rounded bg-gray-200"></Badge>
          <Badge className="h-6 w-24 animate-pulse rounded bg-gray-200"></Badge>
        </div>
      </section>

      {/* Image Carousel Skeleton */}
      <section className="relative mb-12 overflow-hidden rounded-lg shadow-xl">
        <div className="flex h-[400px] w-full animate-pulse items-center justify-center bg-gray-200 md:h-[500px]">
          <span className="text-lg text-gray-400">Image Placeholder</span>
        </div>
      </section>

      {/* Article Content Skeleton */}
      <section className="mb-12 rounded-lg bg-white p-8 shadow-md">
        <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
          <div className="mb-4 h-6 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-11/12 animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-10/12 animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-9/12 animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-11/12 animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="mb-4 h-6 w-10/12 animate-pulse rounded bg-gray-200"></div>
        </div>
      </section>

      {/* Share and Author Section Skeleton */}
      <section className="mb-12 flex flex-col items-center justify-between rounded-lg bg-white p-6 shadow-md md:flex-row">
        <div className="mb-4 flex items-center space-x-4 md:mb-0">
          <Share2 className="h-6 w-6 text-gray-300" />
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200"></div>
          <div>
            <div className="mb-1 h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            <div className="h-3 w-32 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
      </section>

      {/* Related Articles Skeleton */}
      <section className="mb-12">
        <div className="mx-auto mb-6 h-8 w-64 animate-pulse rounded bg-gray-200"></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group block">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="h-40 w-full animate-pulse bg-gray-200"></div>
                <div className="p-4">
                  <Badge className="mb-2 h-6 w-20 animate-pulse rounded bg-gray-200"></Badge>
                  <div className="mb-2 h-5 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="mb-2 h-5 w-10/12 animate-pulse rounded bg-gray-200"></div>
                  <div className="mt-2 h-4 w-32 animate-pulse rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
