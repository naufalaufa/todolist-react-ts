import { useState } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [edit, setEdit] = useState(task.todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(edit, task.id);
    setEdit("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        defaultValue={task.todos}
        value={edit}
        className="p-2 rounded-lg text-black"
        onChange={(e) => setEdit(e.target.value)}
      />
      <button className="bg-blue-900 p-2 rounded-lg text-xs mx-4">
        Clear Edit
      </button>
    </form>
  );
};

export default EditTodo;
