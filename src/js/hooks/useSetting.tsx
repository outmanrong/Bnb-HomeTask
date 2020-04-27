import { useContext } from "react";
import SettingContext from "../contexts/SettingContext";

export default function useSetting() {
  return useContext(SettingContext);
}
