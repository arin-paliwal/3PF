import React, { useState, useEffect } from "react";
import "./App.css";

const localStorage = window.localStorage;

function handleThemeChange() {
    // Step 1: Get the current theme
    const newTheme = theme === "light" ? "dark" : "light";

    // Step 2: Update the state with the new theme
    setTheme(newTheme);

    // Step 3: Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);
}
