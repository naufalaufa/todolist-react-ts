import { Task } from "../utils/type";

const BtnDeleteAll = ({
  deleteAll,
  filteredSearchTodo,
}: {
  task: Task[];
  deleteAll: () => void;
  filteredSearchTodo: Task[];
}) => {
  return (
    <>
      {filteredSearchTodo.length === 0 && (
        <p className="py-8 text-white text-center">Your task is empty</p>
      )}
      {filteredSearchTodo.length > 1 && (
        <button
          onClick={deleteAll}
          className="p-2 rounded-lg my-4 shadow-md shadow-slate-800 bg-red-400 hover:bg-red-300 hover:transition w-full text-white"
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default BtnDeleteAll;
