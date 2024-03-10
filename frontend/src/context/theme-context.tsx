import { createContext, useContext, useEffect } from "react";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { ChildrenNodes, ThemeContext } from "@/types";

const initialThemeContext: ThemeContext = {
  theme: "light",
  toggleTheme: () => {}
};

const ThemeCtx = createContext(initialThemeContext);

export const ThemeProvider = ({ children }: ChildrenNodes) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    defaultValue: colorScheme
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeCtx);
