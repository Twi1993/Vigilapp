import { HOURS } from "../data/hours";

interface HourTesterProps {
  onHourSelect: (hourName: string) => void;
  currentHourName: string;
}

export function HourTester({ onHourSelect, currentHourName }: HourTesterProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white rounded-lg p-4 flex flex-wrap gap-2 items-center justify-center max-w-3xl z-50">
      <span className="text-xs opacity-70 mr-2">DEV MODE:</span>
      {HOURS.map((hour) => (
        <button
          key={hour.name}
          onClick={() => onHourSelect(hour.name)}
          className={`px-3 py-1 text-xs rounded transition-all ${
            currentHourName === hour.name
              ? "bg-white text-black font-bold"
              : "bg-white/20 hover:bg-white/30"
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          {hour.name}
        </button>
      ))}
    </div>
  );
}
