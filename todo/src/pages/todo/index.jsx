import React, { useState, useEffect } from "react";
import { BsFillTrash2Fill } from "react-icons/bs";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

//   Function that will add tasks
  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      setTasks([...tasks, { taskname: taskText, completed: false }]);
      setTaskText("");
    }
  };

  // Function that will change task to complete
  const toggleTaskCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Edit task
  const handleTaskEdit = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, taskname: newText } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <main className="h-screen bg-green-400">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-10 text-5xl font-semibold">TODO APP</h1>
          <form className="inline-flex gap-2 mt-10" onSubmit={addTask}>
            <input
              className="pl-4 text-black rounded-md"
              type="text"
              placeholder="Enter Tasks..."
              value={taskText}
              onChange={handleTaskTextChange}
            />
            <button className="w-10 text-2xl text-white bg-black rounded" type="submit">
              +
            </button>
          </form>
          <table className="mt-5">
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompleted(index)}
                    />
                  </td>
                  <td>
                    <div
                      className={`text-black ${
                        task.completed ? "line-through" : ""
                      }`}
                      contentEditable={!task.completed}
                      onBlur={(e) =>
                        handleTaskEdit(index, e.target.textContent)
                      }
                    >
                      {task.taskname}
                    </div>
                  </td>
                  <td>
                    <button onClick={() => deleteTask(index)}>
                      <BsFillTrash2Fill size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
