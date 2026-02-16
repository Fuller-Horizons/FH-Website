import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata: Metadata = {
  title: "Perspectives | Fuller Horizons",
  description:
    "Strategic perspectives on technology alignment, vendor governance, and making technology decisions that hold up.",
}

export default function PerspectivesPage() {
  const posts = getAllPosts()

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-28 pb-6 lg:pt-36 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h1 className="text-[40px] lg:text-[56px] font-medium text-[#0A1628] text-center text-balance leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Perspectives
            </h1>
            <p className="mt-8 text-lg text-[#4B5563] leading-relaxed text-center">
              Strategic perspectives on technology alignment, vendor governance, and making technology decisions that hold up.
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post.slug} post={post} />)
            ) : (
              <p className="text-center text-[#6B7280]">
                New perspectives are on the way. Check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
