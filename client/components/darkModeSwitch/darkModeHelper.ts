import { useWindowDimensions } from "react-native";

export const useSwitchScale = () => {
  const width = useWindowDimensions().width;
  return width < 640 ? { X: 1, Y: 1 } : { X: 2, Y: 2 };
};
