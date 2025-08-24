import { PortableText } from "@portabletext/react";

export default function SanityText({ blocks }: any) {
  return <PortableText value={blocks} />;
}
