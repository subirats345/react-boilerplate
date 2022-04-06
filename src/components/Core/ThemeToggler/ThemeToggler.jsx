import React from "react";

//  TODO: improve this functionality with:
//   - useEffect()
//   - option to read the theme from the OS

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
      {theme === "light" ? <DarkButton /> : <LightButton />}
    </button>
  );
};

const LightButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

const DarkButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};

export default ThemeToggler;
