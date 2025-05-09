
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set initial theme before render to prevent flickering
const initTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // Default to dark theme if no theme is stored or theme is dark
    document.documentElement.classList.add("dark");
    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
    }
  }
};

initTheme();
createRoot(document.getElementById("root")!).render(<App />);
