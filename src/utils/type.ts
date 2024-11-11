export type Task = {
  id: number;
  todos: string;
  isCompleted: boolean;
  isEdit: boolean;
};

export type TodoProps = {
  todos: Task[];
  handleDelete: (id: number) => void;
  todoCompleted: (id: number) => void;
  handleEdit: (id: number) => void;
};
