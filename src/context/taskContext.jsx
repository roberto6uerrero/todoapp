import { createContext, useContext, useEffect, useState } from "react";
import taskService from "../services/taskServicie";
import useSnackbar from "../hooks/useSnackbar";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState();
  const [task, setTask] = useState(null);
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const snackbar = useSnackbar();

  // const [feedBackDeleteUser, setFeedBackDeleteUser] = useState(false)

  const getTask = async (id) => {
    const response = await taskService.getTask(id)
    if(response){
      localStorage.setItem("tasksStorage", JSON.stringify(response) )
      setTask(response)
      setLoading(false)
      return
    }
    setTask(null)
    setLoading(true)
  };

  const getTasks = async () => {
    const response = await taskService.getTasks();
    if (response) {
      const sortedTasks = response.sort((a, b) => {
        if (a.state === "pending" && b.state === "completed") {
          return -1;
        }
        if (b.state === "pending" && a.state === "completed") {
          return 1;
        }
        return 0;
      });
      
      setTasks(sortedTasks);
      setLoading(false);
      return;
    }
    setTasks([]);
    setLoading(true);
  };

  const createTask = async (task) => {
    const response = await taskService.createTask(task)
    if(response) getTasks()
    return response
  };

  const updateTask = async(id, task) => {
    const response = await taskService.updateTask(task, id)
    if(response) getTasks()
    return response
  };

  const deleteTask = async(id) => {
    const response = await taskService.deleteTask(id)
    if(response) getTasks()
    return response
  };

  return (
    <TaskContext.Provider
      value={{
        getTask,
        getTasks,
        tasks,
        task,
        setTask,
        setTasks,
        createTask,
        updateTask,
        deleteTask,
        errors,
        loading,
        data,
        snackbar,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
