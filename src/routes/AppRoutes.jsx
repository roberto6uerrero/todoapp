import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages";
import AppLayout from "../layouts/app";
import { TasksPage } from "../pages/TasksPage";
import { TaskPage } from "../pages/TaskPage";
import { CreateTaskPage } from "../pages/CreateTaskPage";
import { UpdateTaskPage } from "../pages/UpdateTaskPage";

export const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/task/create" element={<CreateTaskPage />} />
        <Route path="/task/update/:id" element={<UpdateTaskPage />} />
      </Routes>
    </AppLayout>
  );
};