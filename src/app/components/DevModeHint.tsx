import { useState, useEffect } from "react";

export function DevModeHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white/60 text-xs px-3 py-2 rounded animate-fade-in">
      Press <kbd className="bg-white/20 px-1.5 py-0.5 rounded text-white/80">Cmd/Ctrl+D</kbd> to test hours
    </div>
  );
}
