
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set initial theme before render to prevent flickering
const initTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
  }
};

initTheme();
createRoot(document.getElementById("root")!).render(<App />);
