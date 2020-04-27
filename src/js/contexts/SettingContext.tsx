import React, { useState } from "react";

const defaultSetting = {
  theme: "light",
  lang: "en",
  currency: "dollar"
};

const SettingContext = React.createContext({});

export function SettingProvider({ children }) {
  const [currentSetting, setSetting] = useState(defaultSetting);

  function resetSetting(values) {
    return setSetting(values);
  }

  return (
    <SettingContext.Provider value={{ setting: currentSetting, resetSetting }}>
      {children}
    </SettingContext.Provider>
  );
}

export default SettingContext;
