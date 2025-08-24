import { PortableText, PortableTextBlock } from "@portabletext/react";

type SanityTextProps = {
  blocks: PortableTextBlock[];
};

const components = {
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-600 mb-4">{children}</p>
    ),
  },
};

export default function SanityText({ blocks }: SanityTextProps) {
  return <PortableText value={blocks} components={components} />;
}
