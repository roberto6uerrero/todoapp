import { useLocation } from "react-router-dom"
import { UpdateTaskView } from "../views";

export const UpdateTaskPage = () => {
  const path = useLocation().pathname.split("/")
  const idTask = path[path.length - 1]
  return (
    <>
      <UpdateTaskView id={idTask} />
    </>
  )
};
