import { Route, Routes } from "react-router-dom";
import { MainPage, TasksPage, UpdateTaskPage } from "../pages";
import AppLayout from "../layouts/app";

export const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task/update/:id" element={<UpdateTaskPage />} />
      </Routes>
    </AppLayout>
  );
};