import { PortableText } from "@portabletext/react";
import type {
  PortableTextComponents,
  PortableTextMarkComponent,
  PortableTextBlockComponent,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

/** Props deines Components */
type SanityTextProps = {
  blocks: PortableTextBlock[];
};

/** Annotation für die Standard-„link“-Marke im Studio
 *  (passe sie an, wenn du weitere Felder nutzt, z.B. rel/blank/internal etc.)
 */
interface LinkAnnotation {
  _type: "link";
  href: string;
}

/** Mark-Komponenten (ohne any) */
const StrongMark: PortableTextMarkComponent = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

const EmMark: PortableTextMarkComponent = ({ children }) => (
  <em className="italic">{children}</em>
);

const LinkMark: PortableTextMarkComponent<LinkAnnotation> = ({
  value,
  children,
}) => {
  const href = value?.href ?? "#";
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      className="text-blue-600 underline hover:text-blue-800"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

/** Block-Komponenten (ohne any) */
const H1Block: PortableTextBlockComponent = ({ children }) => (
  <h1 className="text-3xl font-bold mb-4">{children}</h1>
);

const H2Block: PortableTextBlockComponent = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-3">{children}</h2>
);

const ParagraphBlock: PortableTextBlockComponent = ({ children }) => (
  <p className="text-gray-600 mb-4">{children}</p>
);

/** Komplettes Components-Objekt mit korrekten Typen */
const components: PortableTextComponents = {
  marks: {
    strong: StrongMark,
    em: EmMark,
    link: LinkMark,
  },
  block: {
    h1: H1Block,
    h2: H2Block,
    normal: ParagraphBlock,
  },
};

export default function SanityText({ blocks }: SanityTextProps) {
  return <PortableText value={blocks} components={components} />;
}
