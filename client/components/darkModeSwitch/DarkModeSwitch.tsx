import { Switch } from "react-native";
import { useTheme } from "next-themes";
import { useSwitchScale } from "./darkModeHelper";
import { DARK, LIGHT } from "@utils/constants";

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme()
  const switchScale = useSwitchScale();

  return (
    <div className="m-2 sm:m-10">
      <Switch
        thumbColor={"#ffd966"}
        trackColor={{
          false: "#ff876f",
          true: "#939393"
        }}
        value={theme === LIGHT ? false : true}
        style={{ transform: [{ scaleX: switchScale.X }, { scaleY: switchScale.Y }] }}
        onValueChange={() => setTheme(theme === LIGHT ? DARK : LIGHT)}
      />
    </div>
  );
}

export default DarkModeSwitch;
