import { useEffect, useState } from "react";
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import { Task } from "./utils/type";
import { toast } from "react-toastify";
import BtnDeleteAll from "./components/BtnDeleteAll";
import TextSection from "./components/TextSection";
import AllTaskCount from "./components/AllTaskCount";
import HeaderSection from "./components/HeaderSection";
import SearchTodo from "./components/SearchTodo";

const App = () => {
  const storedItems = localStorage.getItem("task");
  const storageItems: Task[] = storedItems ? JSON.parse(storedItems) : [];

  const [task, setTask] = useState<Task[]>(storageItems);
  const [searchText, setSearchText] = useState("");

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

  const editTask = (id: number, task: string) => {
    setTask((prevTask) =>
      prevTask.map((item) =>
        item.id === id ? { ...item, todos: task, isEdit: !item.isEdit } : item
      )
    );
  };

  const deleteAll = () => {
    setTask([]);
    toast.success("All tasks deleted successfully");
  };

  const filteredSearchTodo = task.filter((todo) =>
    todo.todos.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid bg-blue-200 min-h-screen place-content-center w-screen max-w-full overflow-hidden m-auto ">
      <div className="grid sm:grid-cols-2 min-h-screen p-4 px-9 place-content-center place-items-center">
        <div className="p-4 rounded-lg bg-blue-900">
          <HeaderSection />
          <AllTaskCount filteredSearchTodo={filteredSearchTodo} task={task} />
          <SearchTodo searchText={searchText} setSearchText={setSearchText} />
          <FormTodo addTask={addTask} />
          <Todo
            filteredSearchTodo={filteredSearchTodo}
            editTask={editTask}
            handleStarValue={handleStarValue}
            handleEdit={handleEdit}
            todoCompleted={todoCompleted}
            todos={task}
            handleDelete={handleDelete}
          />
          <BtnDeleteAll task={task} deleteAll={deleteAll} />
        </div>
        <TextSection />
      </div>
    </div>
  );
};

export default App;
