import { Task } from "../Task/task";
import type { ITask } from "../../types/task";

type TaskListProps = {
  handleToggle: (state: boolean, id: number) => void;
  tasks: ITask[];
};

export const TaskList = (props: TaskListProps) => {
  return (
    <div>
      <h1>Task List</h1>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          isCompleted={task.isCompleted}
          name={task.name}
          onToggle={(state: boolean) => props.handleToggle(state, task.id)}
        />
      ))}
    </div>
  );
};
