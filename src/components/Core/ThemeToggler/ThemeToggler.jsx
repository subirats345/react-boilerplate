import React from "react";
import { DarkIcon, LightIcon } from "../../../constants/icons";

//  TODO: improve this functionality with:
//   - useEffect()
//   - option to read the theme from the OS

// TODO: a list with all icons

const ThemeToggler = () => {
  const html = document.querySelector("html");

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  if (theme === "light") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
      {theme === "light" ? LightIcon : DarkIcon}
    </button>
  );
};

export default ThemeToggler;
