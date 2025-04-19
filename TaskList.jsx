import { useState } from "react";
import Task from "./Task";
import TaskData from "../Data/TaskData";

export default function TaskList() {
  const [Tasks, setTask] = useState(TaskData);

  const handleChnageTask = (task) => {
    const changeTasks = Tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          text: task.text,
          done: task.done,
        };
      } else {
        return t;
      }
    });
    setTask(changeTasks);
  };
  const handleDeleteTask = (taskId) => {
    setTask(Tasks.filter((t) => t.id !== taskId));
  };
  return (
    <ul>
      {Tasks.map((task) => (
        <li key={task.id}>
          <Task
            tasks={task}
            onChangeTask={handleChnageTask}
            onDeleteTask={handleDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
