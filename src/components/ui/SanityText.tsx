import { PortableText, PortableTextBlock } from "@portabletext/react";

export default function SanityText(blocks: PortableTextBlock[]) {
  return <PortableText value={blocks} />;
}
