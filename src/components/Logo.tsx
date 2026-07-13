export function Logo({ size = 44 }: { size?: number }) {
  return (
    <span
      className="rounded-full border-[2.5px] border-olive text-olive flex items-center justify-center text-center font-bold leading-none font-script shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.26 }}
      aria-hidden
    >
      MITCH
      <br />
      ELL&apos;S
    </span>
  );
}
