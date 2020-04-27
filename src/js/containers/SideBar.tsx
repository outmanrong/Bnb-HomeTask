import React from "react";

export default function SideBar({ color, children, minHeight }) {
  return (
    <div
      className={"sidebar"}
      style={{ backgroundColor: color, minHeight: minHeight }}
    >
      {children}
    </div>
  );
}
