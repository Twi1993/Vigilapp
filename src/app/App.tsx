import { useState, useEffect } from "react";
import { getCurrentHour, getDailyContent, HOURS } from "./data/hours";
import { HourScreen } from "./components/HourScreen";
import { HourTester } from "./components/HourTester";
import { DevModeHint } from "./components/DevModeHint";
import { SettingsScreen } from "./components/SettingsScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { FirebaseMessaging } from '@capacitor-firebase/messaging';

export default function App() {
  const [currentHour, setCurrentHour] = useState(() => getCurrentHour());
  const [content, setContent] = useState(() => getDailyContent(currentHour));
  const [devMode, setDevMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(
    () => localStorage.getItem("vigil_onboarded") !== "true"
  );

  const initPushNotifications = async () => {
    await FirebaseMessaging.requestPermissions();
    await FirebaseMessaging.addListener('notificationReceived', (event) => {
      console.log('Notification received:', event);
    });
    await FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
      console.log('Notification action performed:', event);
    });
    const { token } = await FirebaseMessaging.getToken();
    console.log('FCM Token:', token);
  };

  useEffect(() => {
    initPushNotifications();
  }, []);

  useEffect(() => {
    document.title = `VIGIL✛ — ${currentHour.name}`;
  }, [currentHour]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!devMode) {
        const newHour = getCurrentHour();
        if (newHour.name !== currentHour.name) {
          setCurrentHour(newHour);
          setContent(getDailyContent(newHour));
        }
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [currentHour, devMode]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "d" && import.meta.env.DEV) {
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
      <HourScreen
        hourConfig={currentHour}
        content={content}
        onSettingsOpen={() => setShowSettings(true)}
      />
      {showOnboarding && (
        <OnboardingScreen
          onComplete={() => setShowOnboarding(false)}
          colors={currentHour.colors}
        />
      )}
      {showSettings && (
        <SettingsScreen onClose={() => setShowSettings(false)} />
      )}
      {devMode && (
        <HourTester
          onHourSelect={handleHourSelect}
          currentHourName={currentHour.name}
        />
      )}
    </>
  );
}