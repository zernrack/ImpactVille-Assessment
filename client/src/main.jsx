import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Todo from "./pages/todo";
import LandingPage from "./pages/landingpage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
