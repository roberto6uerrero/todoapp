import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export const Router = () => {
  return (
    <Routes>
      {/* Rutas privadas */}
      <Route
        path="/*"
        element={
          <AppRoutes />
        }
      />
    </Routes>
  );
};
