interface CandleFlameProps {
  color: string;
  size?: number;
}

export function CandleFlame({ color, size = 120 }: CandleFlameProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Candle body */}
      <rect x="40" y="60" width="20" height="50" fill="#4A4A4A" />

      {/* Flame */}
      <ellipse cx="50" cy="35" rx="15" ry="25" fill={color} opacity="0.9" />
      <ellipse cx="50" cy="38" rx="10" ry="18" fill="#FFB347" opacity="0.7" />
      <ellipse cx="50" cy="42" rx="6" ry="12" fill="#FFF4E6" opacity="0.8" />

      {/* Wick */}
      <rect x="49" y="45" width="2" height="15" fill="#2A2A2A" />
    </svg>
  );
}
