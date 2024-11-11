import { Task } from "../utils/type";

const AllTaskCount = ({ task }: { task: Task[] }) => {
  return (
    <div>
      {task.length > 0 && (
        <div className="p-2 text-xs relative bg-yellow-200 w-20 my-3 rounded-lg">
          <p className="text-center">All Task</p>
          <span className="absolute text-xs text-white font-bold -right-6 -top-2 rounded-full w-5 h-5 grid place-content-center p-4 bg-yellow-600">
            {task.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default AllTaskCount;
