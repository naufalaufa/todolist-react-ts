import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Task } from "../utils/type";

type EditProps = {
  editTask: (id: number, task: string) => void;
  task: Task;
};

const EditTodo: React.FC<EditProps> = ({ editTask, task }) => {
  const [value, setValue] = useState<string>(task.todos);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTask(task.id, value);
    setValue("");
    toast.success("Success edit field");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        defaultValue={value}
        className="p-1 rounded-lg mx-0 text-black outline-none"
        type="text"
      />
      <button className="text-xs p-2 ml-2 rounded-lg bg-blue-800">
        Edit Task
      </button>
    </form>
  );
};

export default EditTodo;
