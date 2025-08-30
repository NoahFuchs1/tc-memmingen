import { PortableTextBlock } from "next-sanity";

 export default function truncateBlocks(blocks: PortableTextBlock[], maxWords = 20) {
    let wordCount = 0;
    const truncated = [];

    for (const block of blocks) {
      if (block._type !== "block") continue;
      const newChildren = [];

      for (const child of block.children) {
        const words = child.text.split(/\s+/);
        if (wordCount + words.length <= maxWords) {
          newChildren.push(child);
          wordCount += words.length;
        } else {
          const remaining = maxWords - wordCount;
          if (remaining > 0) {
            newChildren.push({
              ...child,
              text: words.slice(0, remaining).join(" ") + " ...",
            });
          }
          wordCount = maxWords;
          break;
        }
      }

      truncated.push({ ...block, children: newChildren });
      if (wordCount >= maxWords) break;
    }
    return truncated;
  }