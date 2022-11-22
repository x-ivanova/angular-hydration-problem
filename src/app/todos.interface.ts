export interface TodosListInterface {
  todos: TodoInterface[];
}

export interface TodoInterface {
  id?: number;
  todo?: string;
  completed?: boolean;
  userId?: number;
}
