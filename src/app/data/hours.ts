export interface HourConfig {
  name: string;
  timeRange: string;
  startHour: number;
  endHour: number;
  greeting: string;
  contentType: string;
  purpose: string;
  colors: {
    background: string;
    accent: string;
    cross: string;
    text: string;
  };
  content: string[];
}

export const HOURS: HourConfig[] = [
  {
    name: "PRIME",
    timeRange: "5:00 AM - 9:00 AM",
    startHour: 5,
    endHour: 9,
    greeting: "Begin with intention.",
    contentType: "Quote / Psalm / Scripture",
    purpose: "Ignition. A reason to rise and be someone today.",
    colors: {
      background: "#F5F0E0",
      accent: "#D4580A",
      cross: "#C8991A",
      text: "#1A1005",
    },
    content: [
      "The LORD is my light and my salvation — whom shall I fear? The LORD is the stronghold of my life — of whom shall I be afraid?\n— Psalm 27:1",
      "He who is not courageous enough to take risks will accomplish nothing in life.\n— Muhammad Ali",
      "Do not pray for an easy life. Pray for the strength to endure a difficult one.\n— Bruce Lee",
      "The impediment to action advances action. What stands in the way becomes the way.\n— Marcus Aurelius",
      "A man who stands for nothing will fall for anything.\n— Malcolm X",
      "The Lord is a warrior; the Lord is his name.\n— Exodus 15:3",
      "Blessed be the Lord, my rock, who trains my hands for war, and my fingers for battle.\n— Psalm 144:1",
      "For God gave us a spirit not of fear but of power and love and self-control.\n— 2 Timothy 1:7",
      "It is not the critic who counts; not the man who points out how the strong man stumbles... The credit belongs to the man who is actually in the arena.\n— Theodore Roosevelt",
      "The only easy day was yesterday.\n— Navy SEALs",
    ],
  },
  {
    name: "TERCE",
    timeRange: "9:00 AM - 12:00 PM",
    startHour: 9,
    endHour: 12,
    greeting: "Get moving.",
    contentType: "Physical Activator",
    purpose: "Blood pumping. Calibrate your state before the day hits you.",
    colors: {
      background: "#1C1208",
      accent: "#E8650A",
      cross: "#E8650A",
      text: "#F0E8D8",
    },
    content: [
      "IGNITION PROTOCOL\n\n20 pushups. Right now. No warmup needed. Your body is the vehicle. Start the engine.",
      "COLD SHOCK\n\nSplash cold water on your face. 30 seconds. Feel your nervous system wake up. This is calibration.",
      "BLOOD FLOW\n\n10 jump squats. Explosive. Get your heart rate up. You're not warming up — you're activating.",
      "SHARPENING FOCUS\n\n5-4-3-2-1: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Ground yourself in reality.",
      "ACTIVATION CHALLENGE\n\nHow many burpees can you do in 60 seconds? Stop thinking. Start moving. The forge is hot.",
      "WALL SIT PROTOCOL\n\n60 seconds against the wall. Your legs will burn. Your mind will tell you to quit. Don't. This is mental conditioning.",
      "BREATH + STRENGTH\n\n10 push-ups, breath held at the top for 3 seconds each rep. Feel the tension. Own it.",
      "SHADOWBOXING\n\n90 seconds. Combinations. Move like you're in a fight. Because you are — with yourself.",
      "PLANK HOLD\n\n60 seconds minimum. The shaking is your body adapting. Adaptation is growth. Hold the line.",
      "SPRINT IN PLACE\n\n30 seconds, maximum intensity. Then 30 seconds rest. Repeat 3 times. Your heart is a muscle. Train it.",
    ],
  },
  {
    name: "SEXT",
    timeRange: "12:00 PM - 3:00 PM",
    startHour: 12,
    endHour: 15,
    greeting: "Reset.",
    contentType: "Breathwork",
    purpose: "Midday recalibration. The day has happened to you. Center yourself.",
    colors: {
      background: "#2A2A2A",
      accent: "#FFFFFF",
      cross: "#FFFFFF",
      text: "#E8E8E8",
    },
    content: [
      "BOX BREATHING\n\nUsed by Navy SEALs before operations.\n\nInhale: 4 counts\nHold: 4 counts\nExhale: 4 counts\nHold: 4 counts\n\nRepeat 4 cycles. Recalibrate your state.",
      "BELLY BREATHING\n\nOne hand on chest, one on stomach.\n\nInhale through nose: 4 counts (belly rises)\nExhale through mouth: 6 counts (belly falls)\n\nRepeat 5 times. Reset your nervous system.",
      "TENSION RELEASE PROTOCOL\n\nClench your fists hard for 5 seconds. Release.\nTense your shoulders. Release.\nClench your jaw. Release.\n\nYou were holding tension you didn't know about.",
      "COMBAT BREATHING\n\n4-4-4-4. In-hold-out-hold.\n\nThis is what operators use under fire. You're using it at your desk. Same tool, different battlefield.",
      "PHYSIOLOGICAL SIGH\n\nDouble inhale through nose (short + long)\nLong exhale through mouth\n\nRepeat 3 times. Fastest way to calm your nervous system.",
    ],
  },
  {
    name: "NONE",
    timeRange: "3:00 PM - 6:00 PM",
    startHour: 15,
    endHour: 18,
    greeting: "Hold the line.",
    contentType: "Endurance / Stoic Line",
    purpose: "Final stretch of work. Impatience. This is where character is built.",
    colors: {
      background: "#1A0505",
      accent: "#CC2200",
      cross: "#CC2200",
      text: "#E8D8D8",
    },
    content: [
      "You are exactly where you're supposed to be.\n\nThe discomfort is the work. The impatience is the test. Hold the line.",
      "The gem cannot be polished without friction, nor man perfected without trials.\n— Seneca",
      "Pressure makes diamonds. You're feeling the pressure. Good. Stay in it.",
      "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.\n— Seneca",
      "This is the hour that separates who you say you are from who you actually are. Character is built here.",
      "You have power over your mind — not outside events. Realize this, and you will find strength.\n— Marcus Aurelius",
      "If you are going through hell, keep going.\n— Winston Churchill",
      "The resistance you feel is the universe asking: how bad do you want this?",
      "A smooth sea never made a skilled sailor.\n— Franklin D. Roosevelt",
      "What you do in this hour — when no one is watching, when it would be easier to quit — this is what defines you.",
    ],
  },
  {
    name: "VESPERS",
    timeRange: "6:00 PM - 9:00 PM",
    startHour: 18,
    endHour: 21,
    greeting: "The day is done.",
    contentType: "Examination Question",
    purpose: "Reflection. One honest question looking back at the day.",
    colors: {
      background: "#1A0F2E",
      accent: "#C8820A",
      cross: "#C8820A",
      text: "#E8D8B8",
    },
    content: [
      "When did you feel most alive today?",
      "What would you do differently if you could replay this day?",
      "Who did you serve today besides yourself?",
      "What did you avoid that you knew you should have done?",
      "When did you act out of fear instead of conviction?",
      "What truth did you tell today that was hard to say?",
      "Where did you compromise what you know is right?",
      "Did you become the man you want to be today, or did you settle?",
      "What choice did you make today that you'll be proud of in a year?",
      "When did you choose the easy path when you knew the right path was harder?",
    ],
  },
  {
    name: "COMPLINE",
    timeRange: "9:00 PM - 12:00 AM",
    startHour: 21,
    endHour: 24,
    greeting: "Settle.",
    contentType: "Carry Into Sleep",
    purpose: "Wind down. One sentence intention for tomorrow.",
    colors: {
      background: "#0D0D0D",
      accent: "#8B6914",
      cross: "#8B6914",
      text: "#C8B888",
    },
    content: [
      "Tomorrow, I will start before I feel ready.",
      "Tomorrow, I will do the hard thing first.",
      "Tomorrow, I will speak the truth even when my voice shakes.",
      "Tomorrow, I will serve someone who cannot repay me.",
      "Tomorrow, I will act as if my actions create the world I want to live in.",
      "Tomorrow, I will remember that discipline is choosing what you want most over what you want now.",
      "Tomorrow, I will treat my word as sacred — what I say, I will do.",
      "Tomorrow, I will remember that comfort is not the goal. Growth is.",
      "Tomorrow, I will face what I've been avoiding.",
      "Tomorrow, I will be the man my younger self needed.",
    ],
  },
  {
    name: "VIGIL",
    timeRange: "12:00 AM - 5:00 AM",
    startHour: 0,
    endHour: 5,
    greeting: "Put the phone down.",
    contentType: "Black Screen + Candle",
    purpose: "The darkness. No engagement bait. Just a candle and silence.",
    colors: {
      background: "#000000",
      accent: "#FF8C00",
      cross: "#FF8C00",
      text: "#FF8C00",
    },
    content: [""],
  },
];

export function getCurrentHour(): HourConfig {
  const now = new Date();
  const hour = now.getHours();

  // Find the matching hour based on current time
  for (const hourConfig of HOURS) {
    if (hourConfig.startHour <= hourConfig.endHour) {
      // Normal range (doesn't cross midnight)
      if (hour >= hourConfig.startHour && hour < hourConfig.endHour) {
        return hourConfig;
      }
    } else {
      // Range crosses midnight (like VIGIL: 0-5 or potential 21-3 scenarios)
      if (hour >= hourConfig.startHour || hour < hourConfig.endHour) {
        return hourConfig;
      }
    }
  }

  // Default to PRIME if somehow no match
  return HOURS[0];
}

export function getDailyContent(hourConfig: HourConfig): string {
  if (hourConfig.content.length === 0) return "";

  // Rotate based on day of year for 30-day cycle
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % hourConfig.content.length;

  return hourConfig.content[index];
}
