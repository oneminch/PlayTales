import { Switch } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useThemeContext } from "@/context/theme-context";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center py-4 gap-x-4">
      <p className="font-bold">Theme:</p>
      <Switch
        color="secondary"
        isSelected={theme === "dark"}
        aria-label="Toggle Theme"
        size="lg"
        startContent={<Icon icon="heroicons:moon-20-solid" />}
        endContent={<Icon icon="heroicons:sun-20-solid" />}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;
