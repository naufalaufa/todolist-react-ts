import React, { useState } from "react";
import { toast } from "react-toastify";

const FormTodo = ({ addTask }: { addTask: (task: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTask(value);
    toast.success("Success Add Task");
    setValue("");
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={value}
        required
        placeholder="Add Task"
        onChange={(e) => setValue(e.target.value)}
        className="p-2 text-sm rounded-lg border-black border-1 outline-none"
        type="text"
      />

      <button className="bg-blue-600 text-sm whitespace-nowrap p-2 rounded-lg text-white">
        Add task
      </button>
    </form>
  );
};

export default FormTodo;
