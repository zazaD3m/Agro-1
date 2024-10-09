import { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const defaultColors = {
  primary: "148 37% 34%",
  action: "20 65% 35%",
  background: "0 0% 100%",
  "background-green": "158 35% 94%",
  accent: "240 4.8% 95.9%",
  secondary: "240 4.8% 95.9%",
  "primary-light": "148 37% 45%",
  ring: "148 37% 34%",
  "accent-dark": "240 4.8% 90.9%",
};

const ColorTester = ({ hidden, hideColors }) => {
  const [colorScheme, setColorScheme] = useState(defaultColors);
  const [savedSchemes, setSavedSchemes] = useState({
    default: { ...defaultColors },
  });

  useEffect(() => {
    // Load color scheme from local storage on component mount
    const storedColorScheme = localStorage.getItem("colorScheme");
    const storedSavedSchemes = localStorage.getItem("savedColorSchemes");

    if (storedColorScheme) {
      setColorScheme(JSON.parse(storedColorScheme));
    }
    if (storedSavedSchemes) {
      setSavedSchemes(JSON.parse(storedSavedSchemes));
    }
  }, []);

  useEffect(() => {
    // Update CSS variables and store in local storage when colorScheme changes
    Object.entries(colorScheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    localStorage.setItem("colorScheme", JSON.stringify(colorScheme));
  }, [colorScheme]);

  useEffect(() => {
    // Update CSS variables and store in local storage when colorScheme changes
    localStorage.setItem("savedColorSchemes", JSON.stringify(savedSchemes));
  }, [savedSchemes]);

  const saveScheme = () => {
    const numOfSchemes = Object.keys(savedSchemes).length + 1;
    const newSchemeName = `ver-${numOfSchemes}`;
    setSavedSchemes((p) => ({
      ...p,
      [newSchemeName]: colorScheme,
    }));
  };

  const loadScheme = (e) => {
    const selectedScheme = savedSchemes[e];
    console.log(e);
    console.log(selectedScheme);
    if (selectedScheme) {
      setColorScheme(selectedScheme);
    }
  };

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
        "absolute left-1/2 top-36 -translate-x-1/2 transform rounded-md bg-accent-dark p-8 max-lg:-top-[100%] max-lg:w-5/6 max-lg:translate-y-44",
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
        <div className="flex gap-x-4">
          <Button onClick={resetColors}>დარესეტება</Button>
          <Button onClick={saveScheme}>შენახვა</Button>
        </div>
        <div>
          <Select onValueChange={loadScheme} defaultValue="default">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="შენახულები" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(savedSchemes).map((name, i) => (
                  <SelectItem key={i} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ColorTester;
