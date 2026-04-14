import { useState, useEffect } from "react";
import { getCurrentHour, getDailyContent, HOURS } from "./data/hours";
import { HourScreen } from "./components/HourScreen";
import { HourTester } from "./components/HourTester";
import { DevModeHint } from "./components/DevModeHint";

export default function App() {
  const [currentHour, setCurrentHour] = useState(() => getCurrentHour());
  const [content, setContent] = useState(() => getDailyContent(currentHour));
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    // Set document title
    document.title = `VIGIL✛ — ${currentHour.name}`;
  }, [currentHour]);

  useEffect(() => {
    // Update hour every minute to catch transitions
    const interval = setInterval(() => {
      if (!devMode) {
        const newHour = getCurrentHour();
        if (newHour.name !== currentHour.name) {
          setCurrentHour(newHour);
          setContent(getDailyContent(newHour));
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [currentHour, devMode]);

  // Toggle dev mode with keyboard shortcut (Ctrl/Cmd + D)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "d") {
        e.preventDefault();
        setDevMode((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleHourSelect = (hourName: string) => {
    const selectedHour = HOURS.find((h) => h.name === hourName);
    if (selectedHour) {
      setCurrentHour(selectedHour);
      setContent(getDailyContent(selectedHour));
    }
  };

  return (
    <>
      <HourScreen hourConfig={currentHour} content={content} />
      {!devMode && <DevModeHint />}
      {devMode && (
        <HourTester
          onHourSelect={handleHourSelect}
          currentHourName={currentHour.name}
        />
      )}
    </>
  );
}