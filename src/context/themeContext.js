import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [primaryColor, setPrimaryColor] = useState(102);
  useEffect(() => {
    localStorage.setItem("theme", `${isDarkTheme ? "dark" : "light"}`);
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDarkTheme]);

  useEffect(() => {
    switch (primaryColor) {
      case 252:
        document.documentElement.classList.remove("green");
        document.documentElement.classList.remove("red");
        document.documentElement.classList.add("purple");
        break;

      case 131:
        document.documentElement.classList.remove("red");
        document.documentElement.classList.remove("purple");
        document.documentElement.classList.add("green");
        break;
      case 360:
        document.documentElement.classList.remove("green");
        document.documentElement.classList.remove("purple");
        document.documentElement.classList.add("red");
        break;
      default:
        document.documentElement.classList.add("purple");
        document.documentElement.classList.remove("green");
        document.documentElement.classList.remove("red");
        break;
    }
  }, [primaryColor]);

  const switchDarkMode = () => setIsDarkTheme(!isDarkTheme);

  const changePrimaryColor = (colorVal) => setPrimaryColor(colorVal);

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, switchDarkMode, changePrimaryColor, primaryColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
