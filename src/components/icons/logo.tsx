import type { InlineSVGProps } from "@interfaces/inlineSvg";

export function Logo({
  className = "",
  width = 24,
  height = 24,
  fill = "#1f2937",
}: InlineSVGProps) {
  return (
    <svg
      width={width.toString()}
      height={height.toString()}
      className={className}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="14" r="8" stroke="#f1f5f9" stroke-width="2" />
      <path
        d="M12 14L12 11"
        stroke="#f1f5f9"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M17.5 7.5L19 6"
        stroke="#f1f5f9"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059"
        stroke="#f1f5f9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
