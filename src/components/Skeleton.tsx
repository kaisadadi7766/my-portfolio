export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="h-10 w-48 mx-auto lg:mx-0 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-16 w-full max-w-md mx-auto lg:mx-0 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-6 w-80 max-w-lg mx-auto lg:mx-0 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <div className="h-14 w-36 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-14 w-28 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="h-56 bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 w-32 bg-gray-200 rounded-lg animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-14 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-10 w-48 mx-auto bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-80 mx-auto bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} bg-gray-100 animate-pulse`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
          <div className="hidden md:flex gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </header>

      <HeroSkeleton />
      <ProjectsSkeleton />
      <SectionSkeleton height="h-96" />
    </div>
  );
}