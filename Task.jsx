import { useState } from "react";

export default function Task({ tasks, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing ? (
    <>
      <input
        type="text"
        value={tasks.text}
        onChange={(e) =>
          onChangeTask({
            ...tasks,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {tasks.text}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={tasks.done}
        onChange={(e) =>
          onChangeTask({
            ...tasks,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => onDeleteTask(tasks.id)}>Delete</button>
    </>
  );
}
