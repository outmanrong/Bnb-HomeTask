import React from "react";

export default function ToggleBtn({ children, handleClick, values }) {
  return <button onClick={() => handleClick(values)}>{children}</button>;
}
