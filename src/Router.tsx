import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";

export const Router: React. FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  );
};
