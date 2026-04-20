import { useState } from "react";

const slides = [
  {
    title: "VIGIL✛",
    heading: "The ancient hours,\nfor modern life.",
    body: "For centuries, the day was divided into sacred hours — moments set apart for prayer, reflection, and presence.",
  },
  {
    title: "THE HOURS",
    heading: "Each hour carries\nits own intention.",
    body: "From Lauds at dawn to Compline at night, Vigil+ meets you where you are with a word, a challenge, or a moment of stillness.",
  },
  {
    title: "BEGIN",
    heading: "Your first hour\nawaits.",
    body: "Open the app at any hour of the day. What you find will be meant for that moment.",
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
  colors: {
    background: string;
    text: string;
    accent: string;
  };
}

export function OnboardingScreen({ onComplete, colors }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const isLast = current === slides.length - 1;
  const slide = slides[current];

  const handleNext = () => {
    if (isLast) {
      setFading(true);
      setTimeout(() => {
        localStorage.setItem("vigil_onboarded", "true");
        onComplete();
      }, 800);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between px-6 py-12 transition-all duration-1000"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        opacity: fading ? 0 : 1,
      }}
    >
      {/* Top label */}
      <h2
        className="text-xs tracking-[0.2em] uppercase opacity-60 w-full"
        style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, color: colors.text }}
      >
        {slide.title}
      </h2>

      {/* Center content */}
      <div className="flex flex-col items-center gap-8 max-w-sm w-full text-center">
        <h1
          className="text-2xl leading-snug whitespace-pre-line"
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: colors.text,
          }}
        >
          {slide.heading}
        </h1>
        <p
          className="opacity-70 leading-relaxed"
          style={{
            fontFamily: "'Crimson Text', serif",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: colors.text,
          }}
        >
          {slide.body}
        </p>
      </div>

      {/* Bottom area */}
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: colors.accent,
                opacity: i === current ? 1 : 0.2,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleNext}
          className="px-8 py-3 tracking-wide uppercase text-xs border-2 transition-all duration-300 hover:opacity-80 hover:scale-105"
          style={{
            backgroundColor: "transparent",
            borderColor: colors.accent,
            color: colors.accent,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          {isLast ? "Enter" : "Continue"}
        </button>
      </div>
    </div>
  );
}