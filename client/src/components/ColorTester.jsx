import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const defaultColors = {
  primary: "155 100% 30.8%",
  action: "30 80% 52%",
  background: "0 0% 100%",
  "background-green": "158 35% 94%",
  accent: "240 4.8% 95.9%",
  secondary: "240 4.8% 95.9%",
  "primary-light": "155 100% 39.2%",
  ring: "155 100% 30.8%",
  "accent-dark": "240 4.8% 90.9%",
};

const ColorTester = ({ hidden, hideColors }) => {
  const [colorScheme, setColorScheme] = useState(defaultColors);

  useEffect(() => {
    // Load color scheme from local storage on component mount
    const storedColorScheme = localStorage.getItem("colorScheme");
    if (storedColorScheme) {
      setColorScheme(JSON.parse(storedColorScheme));
    }
  }, []);

  useEffect(() => {
    // Update CSS variables and store in local storage when colorScheme changes
    Object.entries(colorScheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    localStorage.setItem("colorScheme", JSON.stringify(colorScheme));
  }, [colorScheme]);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColorScheme((prev) => {
      const newColorScheme = { ...prev, [name]: value };

      if (name === "primary") {
        const [hue, saturation, lightness] = value.split(" ");
        const newLightness = Math.min(parseFloat(lightness) + 8.4, 100).toFixed(
          1,
        );
        newColorScheme["primary-light"] =
          `${hue} ${saturation} ${newLightness}%`;
        newColorScheme["ring"] = value;
      }

      if (name === "accent") {
        const [hue, saturation, lightness] = value.split(" ");
        const newLightness = Math.min(parseFloat(lightness) - 5, 100).toFixed(
          1,
        );
        newColorScheme["accent-dark"] = `${hue} ${saturation} ${newLightness}%`;
        newColorScheme["secondary"] = value;
      }
      return newColorScheme;
    });
  };

  const resetColors = () => {
    setColorScheme(defaultColors);
    localStorage.removeItem("colorScheme");
  };
  return (
    <div
      className={cn(
        "absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-md bg-accent-dark p-8 max-lg:-top-[100%] max-lg:w-5/6",
        hidden ? "" : "hidden",
      )}
    >
      <div className={cn("relative space-y-4 p-4")}>
        <Button className="absolute right-4 top-4" onClick={hideColors}>
          <X />
        </Button>
        <h2 className="text-2xl font-bold">ფერების დატესტვა</h2>
        {Object.entries(colorScheme).map(([key, value]) => (
          <div
            key={key}
            className={cn(
              "flex items-center space-x-2",
              key === "primary-light" && "hidden",
              key === "ring" && "hidden",
              key === "secondary" && "hidden",
              key === "accent-dark" && "hidden",
            )}
          >
            <Label htmlFor={key} className="w-32">
              {key}:
            </Label>
            <Input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleColorChange}
              className="flex-grow"
            />
            <div
              className="h-8 w-8 border border-gray-300"
              style={{ backgroundColor: `hsl(${value})` }}
            />
          </div>
        ))}
        <Button onClick={resetColors}>Reset Colors</Button>
      </div>
    </div>
  );
};

export default ColorTester;
