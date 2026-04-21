import { useState, useEffect } from "react";
import { HourConfig } from "../data/hours";
import { TemplarCross } from "./TemplarCross";
import { CandleFlame } from "./CandleFlame";
import { App } from '@capacitor/app';

interface HourScreenProps {
  hourConfig: HourConfig;
  content: string;
  onSettingsOpen: () => void;
}

export function HourScreen({ hourConfig, content, onSettingsOpen }: HourScreenProps) {
  const { name, greeting, colors } = hourConfig;
  const isVigil = name === "VIGIL";
    const isNone = name === "NONE";
  const [answerRevealed, setAnswerRevealed] = useState(false);
  useEffect(() => {
  setAnswerRevealed(false);
}, [name]);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 py-8 transition-colors duration-1000"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      {/* Hour name - top left */}
      <div className="w-full">
        <h2
          className="text-xs tracking-[0.2em] uppercase opacity-60"
          style={{
            color: colors.text,
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
          }}
        >
          {name}
        </h2>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8 max-w-2xl w-full">
        {/* Cross or Candle */}
        <div className="mb-2 md:mb-4 transition-all duration-700">
          {isVigil ? (
            <CandleFlame color={colors.accent} size={100} />
          ) : (
            <TemplarCross color={colors.cross} size={100} />
          )}
        </div>

        {/* Greeting */}
        {!isVigil && (
          <h1
            className="text-xl md:text-2xl lg:text-3xl tracking-wide text-center px-4 transition-all duration-500"
            style={{
              color: colors.text,
              fontFamily: "'Cinzel', serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            {greeting}
          </h1>
        )}

        {/* Content area */}
        {!isVigil && content && (
          <div
            className="text-center whitespace-pre-line leading-relaxed text-sm md:text-base lg:text-lg max-w-xl px-4 transition-all duration-500"
            style={{
              color: colors.text,
              fontFamily: "'Crimson Text', serif",
              fontWeight: 400,
              lineHeight: "1.8",
            }}
          >
            {isNone ? (
  <>
    <span>{content.split("Answer:")[0].trim()}</span>
    {answerRevealed && (
      <span style={{ opacity: 0.7, marginTop: "1rem", display: "block" }}>
        Answer: {content.split("Answer:")[1].trim()}
      </span>
    )}
  </>
) : (
  content
)}
          </div>
        )}

        {isVigil && (
          <p
            className="text-sm tracking-wide opacity-80 text-center transition-all duration-500"
            style={{
              color: colors.text,
              fontFamily: "'Cinzel', serif",
            }}
          >
            {greeting}
          </p>
        )}
      </div>

      {/* Bottom action area */}
      {!isVigil && (
        <div className="w-full flex justify-center pb-4">
          <button
  className="px-6 md:px-8 py-2.5 md:py-3 tracking-wide uppercase text-xs md:text-sm transition-all duration-300 hover:opacity-80 border-2 hover:scale-105"
  style={{
    backgroundColor: "transparent",
    borderColor: colors.accent,
    color: colors.accent,
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    letterSpacing: "0.15em",
  }}
 onClick={async () => {
  if (isNone && !answerRevealed) {
    setAnswerRevealed(true);
  } else {
    await App.minimizeApp();
  }
}}
>
  {isNone && !answerRevealed ? "Reveal Answer" : "Acknowledged"}
</button>
        </div>
      )}

      {/* Settings icon - subtle, top right */}
      <div className="absolute top-8 right-6">
        <button
        onClick={onSettingsOpen}
          className="opacity-30 hover:opacity-60 transition-opacity"
          style={{ color: colors.text }}
          aria-label="Settings"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="10" cy="10" r="3" />
            <path d="M10 1v2m0 14v2M18 10h-2M4 10H2m13.66-5.66l-1.42 1.42M7.76 12.24l-1.42 1.42m11.32 0l-1.42-1.42M7.76 7.76L6.34 6.34" />
          </svg>
        </button>
      </div>
    </div>
  );
}
