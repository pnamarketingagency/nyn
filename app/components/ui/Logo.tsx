/**
 * NYN Detailing logo.
 *
 * Uses the official artwork at `public/nyn-logo.png`, pre-processed to
 * white-on-transparent so it sits cleanly on the dark UI (no CSS invert needed).
 * The PNG already contains the full "NYN Detailing" lockup.
 */
import Image from "next/image";

interface LogoProps {
  className?: string;
  /** Rendered height in pixels (width auto-scales — artwork is square). */
  height?: number;
  /** Priority-load (use in the header / above the fold). */
  priority?: boolean;
}

export function Logo({ className, height = 48, priority = false }: LogoProps) {
  return (
    <Image
      src="/nyn-logo.png"
      alt="NYN Detailing"
      width={height}
      height={height}
      priority={priority}
      sizes={`${height}px`}
      className={["select-none object-contain", className]
        .filter(Boolean)
        .join(" ")}
      style={{ height, width: height }}
    />
  );
}

/**
 * Header lockup — the square logo mark. The artwork already includes the
 * "NYN Detailing" wordmark, so no extra text is needed.
 */
export function LogoLockup({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  return <Logo className={className} height={height} priority />;
}
