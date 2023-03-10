import React from "react";
import { Navbar } from "../view/Navbar";
import { AppRoutes } from "../routes/AppRoutes";

export const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};
