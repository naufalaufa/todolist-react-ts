import { useEffect, useState } from "react";
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import { Task } from "./utils/type";

const App = () => {
  const storedItems = localStorage.getItem("task");
  const storageItems: Task[] = storedItems ? JSON.parse(storedItems) : [];

  const [task, setTask] = useState<Task[]>(storageItems);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const addTask = (todo: string) => {
    setTask([
      ...task,
      {
        id: new Date().getTime(),
        todos: todo,
        isCompleted: false,
        isEdit: false,
      },
    ]);
    console.log(task);
  };

  const handleDelete = (id: number) => {
    setTask((prevTask) => prevTask.filter((item) => item.id !== id));
  };

  const todoCompleted = (id: number) => {
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleEdit = (id: number) => {
    setTask((prevTask) =>
      prevTask.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  const deleteAll = () => {
    setTask([]);
  };

  return (
    <div className="grid bg-blue-200  min-h-screen place-content-center ">
      <div className="grid sm:grid-cols-2 min-h-screen p-4 px-9 place-content-center place-items-center">
        <div className="p-4 rounded-lg bg-blue-900">
          <h1 className="text-center py-4 font-bold text-white">
            Todolist Naufal
          </h1>
          <FormTodo addTask={addTask} />
          <Todo
            handleEdit={handleEdit}
            todoCompleted={todoCompleted}
            todos={task}
            handleDelete={handleDelete}
          />
          {task.length > 1 && (
            <button
              onClick={deleteAll}
              className="p-2 rounded-lg my-4 bg-red-300 w-full text-white"
            >
              Delete All
            </button>
          )}
        </div>
        <p className="mx-4 text-sm hidden sm:grid">
          To-Do List is an application that helps you organize, manage, and
          complete daily tasks. With a simple and intuitive interface, this app
          allows you to add new tasks, set priorities, assign deadlines, and
          mark tasks as completed. It’s perfect for students, professionals, or
          anyone who wants to boost productivity and keep their daily activities
          organized.
        </p>
      </div>
    </div>
  );
};

export default App;
