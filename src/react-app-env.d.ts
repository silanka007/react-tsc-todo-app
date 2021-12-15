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

type iTodoActionNoPayload = {
  type: "SELECT_FIRST_ITEM";
};

type iTodoActionWithPayload = {
  type: "ADD_TODO" | "DELETE_TODO" | "SELECT_TODO" | "MARK_COMPLETED";
  payload: iTodo;
};

export type iTodoAction = iTodoActionWithPayload | iTodoActionNoPayload;

export type iTodoContext = {
  children: React.ReactNode;
};

export interface iContext extends iState {
  dispatch: React.Dispatch<iTodoAction>;
}
