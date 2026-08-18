import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Determines theme based on user's current local time:
 * - Daytime (6:00 AM to 7:00 PM / 19:00) -> "light"
 * - Nighttime (7:00 PM / 19:00 to 6:00 AM) -> "dark"
 */
export function getTimeBasedTheme(): "dark" | "light" {
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 19 || currentHour < 6;
  return isNight ? "dark" : "light";
}

export function TimeBasedThemeSync() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Initial auto-sync based on local time
    const initialAutoTheme = getTimeBasedTheme();
    
    // Check if user has explicitly manually overridden during this session
    const manualSessionOverride = sessionStorage.getItem("sociolites-manual-theme");
    if (!manualSessionOverride) {
      setTheme(initialAutoTheme);
    }

    // Check periodically (every 1 minute) to auto-transition when day turns to night or vice-versa
    const timer = setInterval(() => {
      const isManual = sessionStorage.getItem("sociolites-manual-theme");
      if (!isManual) {
        setTheme(getTimeBasedTheme());
      }
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, [setTheme]);

  return null;
}
