import { PortableText, PortableTextBlock } from "@portabletext/react";

type SanityTextProps = {
  blocks: PortableTextBlock[];
};

export default function SanityText({ blocks }: SanityTextProps) {
  return <PortableText value={blocks} />;
}
