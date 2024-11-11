export type Task = {
  originalIndex: unknown;
  id: number;
  todos: string;
  isCompleted: boolean;
  isEdit: boolean;
  starValue: boolean;
};

export type TodoProps = {
  todos: Task[];
  handleDelete: (id: number) => void;
  todoCompleted: (id: number) => void;
  handleEdit: (id: number) => void;
  editTodo: (id: number, task: Task[]) => void;
  handleStarValue: (id: number) => void;
};
