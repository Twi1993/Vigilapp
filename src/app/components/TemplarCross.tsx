interface TemplarCrossProps {
  color: string;
  size?: number;
}

export function TemplarCross({ color, size = 120 }: TemplarCrossProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bold equal-armed Templar cross - geometric, solid, immovable */}
      <g>
        {/* Vertical bar */}
        <rect x="38" y="5" width="24" height="38" fill={color} />
        {/* Horizontal bar */}
        <rect x="5" y="38" width="90" height="24" fill={color} />
        {/* Center reinforcement */}
        <rect x="38" y="38" width="24" height="24" fill={color} />
        {/* Bottom vertical */}
        <rect x="38" y="62" width="24" height="33" fill={color} />
      </g>
    </svg>
  );
}
