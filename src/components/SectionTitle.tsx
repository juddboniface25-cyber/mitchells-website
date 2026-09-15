export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <Tag className="display text-5xl sm:text-6xl lg:text-7xl">{title}</Tag>
      <div className={`rule2 mt-3 ${center ? "mx-auto" : "left"} max-w-[8rem] text-moss`} />
    </div>
  );
}
