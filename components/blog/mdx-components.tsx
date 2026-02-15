import type { MDXComponents } from "mdx/types"

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-[28px] lg:text-[40px] font-medium text-[#0A1628] mt-10 mb-4 leading-snug"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-[24px] lg:text-[28px] font-medium text-[#0A1628] mt-10 mb-4 leading-snug"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-[20px] lg:text-[24px] font-medium text-[#0A1628] mt-8 mb-3 leading-snug"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-[18px] lg:text-[20px] font-medium text-[#0A1628] mt-6 mb-2 leading-snug"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-base text-[#4B5563] leading-relaxed mb-6 font-sans" {...props} />
  ),
  a: (props) => (
    <a
      className="text-[#D4AF37] underline hover:text-[#F59E0B] transition-colors"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-[3px] border-[#D4AF37] pl-6 italic text-[#4B5563] my-6"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-6 gap-2 text-[#4B5563]" {...props} />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-6 gap-2 text-[#4B5563]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed text-base font-sans" {...props} />,
  code: (props) => (
    <code className="bg-[#F3F2EF] rounded px-2 py-1 text-sm" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-[#F3F2EF] rounded p-4 overflow-x-auto mb-6 text-sm"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-[#0A1628]" {...props} />
  ),
  hr: () => <hr className="border-t border-[#D4AF37]/30 my-10" />,
}
