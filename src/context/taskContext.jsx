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
      // console.log(JSON.stringify(response))
      const sortedTasks = response.sort((a, b) => {
        // Si a es "pending" y b es "completed", a debería ir antes que b
        if (a.state === "pending" && b.state === "completed") {
          return -1;
        }
        // Si b es "pending" y a es "completed", b debería ir antes que a
        if (b.state === "pending" && a.state === "completed") {
          return 1;
        }
        // Para otras situaciones, no cambia el orden relativo entre a y b
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
    console.log("create user context", task)
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
