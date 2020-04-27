import React from "react";
import "./styles.css";
import "./style/lightTheme.css";
import Header from "./js/containers/Header";
import Main from "./js/containers/Main";
import Footer from "./js/containers/Footer";
import { SettingProvider } from "./js/contexts/SettingContext";

export default function App() {
  return (
    <SettingProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </SettingProvider>
  );
}
