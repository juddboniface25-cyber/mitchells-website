import Link from "next/link";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

/**
 * The one CTA vocabulary for the site. Before this existed the same olive
 * button string was copy-pasted in seven places across four files, which is
 * why the contrast defect had to be fixed in seven places too.
 */
const base =
  "inline-block text-center font-display font-medium rounded-lg border-2 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-olive text-white border-olive-dark hover:bg-olive-dark",
  secondary: "bg-white text-body border-control hover:border-olive hover:text-olive",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Set for links leaving the site — adds target/rel automatically. */
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: Props) {
  const cn = classes(variant, size, className);

  // tel: and mailto: are not routable, and external links need rel guards —
  // both cases have to bypass next/link.
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={cn}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn}>
      {children}
    </Link>
  );
}
