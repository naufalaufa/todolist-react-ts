import { Task } from "../utils/type";

const BtnDeleteAll = ({
  task,
  deleteAll,
}: {
  task: Task[];
  deleteAll: () => void;
}) => {
  return (
    <>
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
    </>
  );
};

export default BtnDeleteAll;
