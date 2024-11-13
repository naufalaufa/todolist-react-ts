export type Task = {
  originalIndex: number;
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
  editTask: (id: number, task: string) => void;
  handleStarValue: (id: number) => void;
  filteredSearchTodo: Task[];
};
