import type { Tag } from "@/data/menu";

const labels: Record<Tag, { text: string; cls: string }> = {
  favorite: { text: "Favorite", cls: "stamp green" },
  new: { text: "New", cls: "stamp" },
  gf: { text: "GF option", cls: "stamp green" },
};

export default function Stamp({ tag }: { tag: Tag }) {
  const l = labels[tag];
  return <span className={l.cls}>{l.text}</span>;
}
