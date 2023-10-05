import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarCustom from "./components/navbar/NavBarCustom";
import RegisterPage from "./pages/RegisterPage";
import DetailGame from "./pages/DetailGame";

const user = {
  log: true,
  role: "admin",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBarCustom />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            user.log && user.role === "admin" ? <AdminPage /> : <ErrorPage />
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detailgame/:id" element={<DetailGame />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
