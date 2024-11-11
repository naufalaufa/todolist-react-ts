import React, { useState } from "react";

const FormTodo = ({ addTask }: { addTask: (task: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTask(value);
    setValue("");
  };
  return (
    <form
      className="bg-blue-700 p-3 rounded-lg flex gap-4"
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        required
        placeholder="Add Task"
        onChange={(e) => setValue(e.target.value)}
        className="p-2 rounded-lg border-black border-2"
        type="text"
      />
      <button className="bg-blue-600 text-sm whitespace-nowrap p-2 rounded-lg text-white">
        Add task
      </button>
    </form>
  );
};

export default FormTodo;
