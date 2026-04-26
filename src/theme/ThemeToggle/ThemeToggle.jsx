import { useTheme } from "../ThemeContext";
import './ThemeToggle.css'
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}