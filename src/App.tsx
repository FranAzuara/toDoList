import "./App.css";
import { CreateTaskForm } from "./components/CreateTaskform/createTaskForm";
import { TaskList } from "./components/TaskList/taskList";
import { useState } from "react";
import type { ITask } from "./types/task";

const mockedTask = [
  {
    id: 1,
    name: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Task 2",
    isCompleted: true,
  },
];

function App() {
  const [tasks, setTasks] = useState<ITask[]>(mockedTask);

  const handleToggle = (state: boolean, id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask: ITask = {
          id: task.id,
          name: task.name,
          isCompleted: state,
        };
        return newTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddNewTask = (name: string) => {
    const newTask: ITask = {
      id: tasks.length + 1,
      name,
      isCompleted: false,
    };

    //const updatedTasks = tasks.concat(newTask);
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
  };

  return (
    <>
      Add your new task
      <CreateTaskForm onAddNewTask={handleAddNewTask} />
      <TaskList handleToggle={handleToggle} tasks={tasks} />
    </>
  );
}

export default App;
