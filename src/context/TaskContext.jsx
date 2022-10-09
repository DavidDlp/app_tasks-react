import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../database/tasks";

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContextProvider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContextProvider>
  );
};

export default TaskContext;
