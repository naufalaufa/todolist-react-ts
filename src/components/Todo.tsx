import { toast } from "react-toastify";
import { TodoProps } from "../utils/type";
import EditTodo from "./EditTodo";
import { FaStar } from "react-icons/fa";
const Todo: React.FC<TodoProps> = ({
  todos,
  handleDelete,
  todoCompleted,
  handleEdit,
  editTodo,
  handleStarValue,
}) => {
  return (
    <div>
      {todos.map((item, idx) => {
        return (
          <div
            className="p-2 text-white my-4 flex gap-3 bg-blue-600 rounded-lg  justify-between"
            key={idx}
          >
            {item.isEdit ? (
              <EditTodo task={item} editTodo={editTodo} />
            ) : (
              <>
                <div className="flex gap-3 items-center">
                  <span
                    onClick={() => {
                      handleStarValue(item.id);
                      if (!item.starValue) {
                        toast.success(
                          `Success add ${item.todos} to priority task`
                        );
                      } else {
                        toast.error(
                          `Success remove ${item.todos} to priority task`
                        );
                      }
                    }}
                  >
                    <FaStar
                      className={`${
                        item.starValue ? "text-yellow-400" : "text-white"
                      }`}
                    />
                  </span>
                  <p
                    className={`${
                      item.isCompleted
                        ? " line-through cursor-pointer text-xs"
                        : "bg-blue-600 cursor-pointer text-xs"
                    }`}
                    onClick={() => todoCompleted(item.id)}
                  >
                    {item.todos}
                  </p>
                </div>
              </>
            )}
            <div className="flex gap-4">
              {!item.isEdit && (
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
