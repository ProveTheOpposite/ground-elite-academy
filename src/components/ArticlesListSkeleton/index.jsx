export const ArticlesListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-lg border p-4 shadow-sm">
          <div className="h-40 w-full rounded bg-gray-300"></div>
          <div className="mt-4 h-4 w-3/4 rounded bg-gray-300"></div>
          <div className="mt-2 h-12 w-5/6 rounded bg-gray-300"></div>
          <div className="mt-4 h-4 w-1/2 rounded bg-gray-300"></div>
        </div>
      ))}
    </>
  );
};

export default ArticlesListSkeleton;
