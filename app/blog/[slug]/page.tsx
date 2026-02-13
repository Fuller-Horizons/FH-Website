import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxComponents } from "@/components/blog/mdx-components"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return {
    title: `${post.title} | Fuller Horizons`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] pt-8 pb-6 lg:pt-12 lg:pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-block text-[#D4AF37] font-medium hover:text-[#F59E0B] transition-colors mb-8"
            >
              &larr; Back to Insights
            </Link>
            <h1 className="font-serif text-3xl lg:text-5xl font-normal tracking-tight text-[#0A1628] text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-[#6B7280]">
              {formattedDate} &middot; {post.author}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-[#F3F2EF] py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <article className="prose-custom">
              <MDXRemote source={post.content} components={mdxComponents} />
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
