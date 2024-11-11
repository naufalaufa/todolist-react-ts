import { useEffect, useState } from "react";
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import { Task } from "./utils/type";
import { toast } from "react-toastify";

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
        starValue: false,
        originalIndex: task.length,
      },
    ]);
  };

  const handleDelete = (id: number) => {
    setTask((prevTask) => prevTask.filter((item) => item.id !== id));
    toast.error(`Task deleted successfully`);
  };

  const todoCompleted = (id: number) => {
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleStarValue = (id: number) => {
    setTask((prevTask) => {
      const updatedTasks = prevTask.map((item) =>
        item.id === id ? { ...item, starValue: !item.starValue } : item
      );
      return updatedTasks.sort((a, b) => {
        if (a.starValue === b.starValue) {
          return a.originalIndex - b.originalIndex;
        }
        return b.starValue ? 1 : -1;
      });
    });
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
    toast.success("All tasks deleted successfully");
  };

  return (
    <div className="grid bg-blue-200 min-h-screen place-content-center w-screen max-w-full overflow-hidden m-auto p-4">
      <div className="grid sm:grid-cols-2 min-h-screen p-4 px-9 place-content-center place-items-center">
        <div className="p-4 rounded-lg bg-blue-900">
          <h1 className="text-center py-4 font-bold text-white">
            Todolist Naufal
          </h1>
          {task.length > 0 && (
            <div className="p-2 text-xs relative bg-yellow-200 w-20 my-3 rounded-lg">
              <p className="text-center">All Task</p>
              <span className="absolute text-xs text-white font-bold -right-6 -top-2 rounded-full w-5 h-5 grid place-content-center p-4 bg-yellow-600">
                {task.length}
              </span>
            </div>
          )}
          <FormTodo addTask={addTask} />
          <Todo
            handleStarValue={handleStarValue}
            editTodo={handleEdit}
            handleEdit={handleEdit}
            todoCompleted={todoCompleted}
            todos={task}
            handleDelete={handleDelete}
          />
          {task.length === 0 && (
            <p className="py-8 text-white text-center">Your task is empty</p>
          )}
          {task.length > 1 && (
            <button
              onClick={deleteAll}
              className="p-2 rounded-lg my-4 shadow-md shadow-slate-800 bg-red-400 hover:bg-red-300 hover:transition w-full text-white"
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
