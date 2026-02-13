import Link from "next/link"
import type { BlogPostMeta } from "@/lib/blog"

export function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-white border-l-[3px] border-[#D4AF37] p-8">
      <p className="text-sm text-[#6B7280]">{formattedDate}</p>
      <h2 className="mt-2 text-xl font-medium text-[#0A1628]">
        <Link href={`/blog/${post.slug}`} className="hover:text-[#D4AF37] transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-[#4B5563] leading-relaxed">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-[#D4AF37] font-medium hover:text-[#F59E0B] transition-colors"
      >
        Read more &rarr;
      </Link>
    </article>
  )
}
