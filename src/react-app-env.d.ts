/// <reference types="react-scripts" />

export type iTodo = {
  id: number;
  title: string;
  description: string;
  status: "completed" | "pending";
};

export type iTodos = iTodo[];

export type iState = {
  todos: iTodos;
  todo: iTodo;
};

export type iTodoAction = {
  type: "ADD_TODO" | "REMOVE_TODO" | "DELETE_TODO";
  payload: iTodo;
};

export type iTodoContext = {
  children: React.ReactNode;
};

export interface iContext extends iState {
  dispatch: React.Dispatch<todoAction>;
}
