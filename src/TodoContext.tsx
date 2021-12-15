import React, { useReducer } from "react";
import { iContext, iTodoContext, iTodos } from "./react-app-env";
import { todoReducer } from "./todoReducer";

const todoInitial: iTodos = [
  {
    id: 1,
    title: "testing",
    description: "testing functionality",
    status: "pending",
  },
  {
    id: 2,
    title: "Implement todoview component",
    description:
      "implementation of todo view component. this show a more elaborate view of todo items individually",
    status: "completed",
  },
];

export const todoContext = React.createContext<iContext>({} as iContext);

const TodoContext = ({ children }: iTodoContext) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: todoInitial,
    todo: todoInitial[0],
  });

  return (
    <todoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContext;
