import { useState } from "react";
import { TodoProps } from "../utils/type";

const Todo: React.FC<TodoProps> = ({
  todos,
  handleDelete,
  todoCompleted,
  handleEdit,
}) => {
  const [edit, setEdit] = useState("");

  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div
            className="p-2 text-white my-4 bg-blue-600 rounded-lg flex items-center justify-between"
            key={idx}
          >
            {item.isEdit ? (
              <div onClick={handleEdits}>
                <input
                  onChange={(e) => setEdit(e.target.value)}
                  name="edit"
                  className="text-black p-2 rounded-lg"
                  defaultValue={item.todos}
                />
              </div>
            ) : (
              <p
                className={`${
                  item.isCompleted
                    ? " line-through cursor-pointer text-xs"
                    : "bg-blue-600 cursor-pointer text-xs"
                }`}
                onClick={() => todoCompleted(item.id)}
              >
                {item.isEdit ? edit : item.todos}
              </p>
            )}
            <div className="flex gap-4">
              {item.isEdit ? (
                <button
                  onClick={() => (item.isEdit === true ? false : true)}
                  className="text-xs whitespace-nowrap p-2 rounded-lg bg-blue-900 mx-2"
                >
                  Clear Edit
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(item.id)}
                  className="p-2 rounded-lg text-xs text-white bg-blue-900"
                >
                  Edit
                </button>
              )}
              <button
                className="p-2 rounded-lg text-xs text-white bg bg-red-600"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
