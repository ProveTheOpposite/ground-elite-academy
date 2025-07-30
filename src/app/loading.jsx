export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative">
          <div className="border-muted h-32 w-32 rounded-full border-4"></div>
          <div className="border-primary absolute top-0 left-0 h-32 w-32 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}
