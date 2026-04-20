interface SettingsScreenProps {
  onClose: () => void;
}

export function SettingsScreen({ onClose }: SettingsScreenProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col px-6 py-8"
      style={{
        backgroundColor: "#0a0a0f",
        color: "#e8e0d0",
        fontFamily: "'Cinzel', serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-12">
        <h2
          className="text-xs tracking-[0.2em] uppercase opacity-60"
        >
          Settings
        </h2>
        <button
          onClick={onClose}
          className="opacity-30 hover:opacity-60 transition-opacity"
          aria-label="Close settings"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
      </div>

      {/* Settings content */}
      <div className="flex flex-col gap-8 max-w-md w-full mx-auto">

        {/* About section */}
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.15em] uppercase opacity-40">About</p>
          <div className="flex justify-between items-center py-3 border-b border-white border-opacity-10">
            <span className="text-sm opacity-70" style={{ fontFamily: "'Crimson Text', serif" }}>Vigil+</span>
            <span className="text-xs opacity-30">v1.0.0</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white border-opacity-10">
            <span className="text-sm opacity-70" style={{ fontFamily: "'Crimson Text', serif" }}>The Liturgy of the Hours</span>
          </div>
        </div>

        {/* More sections coming soon */}
        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-[0.15em] uppercase opacity-40">Coming Soon</p>
          <div className="flex justify-between items-center py-3 border-b border-white border-opacity-10">
            <span className="text-sm opacity-70" style={{ fontFamily: "'Crimson Text', serif" }}>Push Notifications</span>
            <span className="text-xs opacity-30">Soon</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white border-opacity-10">
            <span className="text-sm opacity-70" style={{ fontFamily: "'Crimson Text', serif" }}>Remove Ads</span>
            <span className="text-xs opacity-30">Soon</span>
          </div>
        </div>

      </div>
    </div>
  );
}