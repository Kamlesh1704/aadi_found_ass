/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root element from your HTML
const rootElement = document.getElementById("app");

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);
