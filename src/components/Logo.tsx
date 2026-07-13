import Image from "next/image";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Mitchell's Restaurant & Pizzeria logo"
      width={size}
      height={size}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
