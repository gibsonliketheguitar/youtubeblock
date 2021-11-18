import { Switch } from "react-native";
import { useSwitchScale } from "./darkModeHelper";
//store
import useDarkMode from "@store/useDarkMode";

function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useDarkMode();
  const switchScale = useSwitchScale();

  return (
    <div className="m-2 sm:m-10">
      <Switch
        //thumbColor={"#fad6a5"}
        //trackColor={"#464646"}
        style={{
          transform: [{ scaleX: switchScale.X }, { scaleY: switchScale.Y }],
        }}
        onValueChange={(value: Boolean) => setDarkMode(value)}
      />
    </div>
  );
}

export default DarkModeSwitch;
