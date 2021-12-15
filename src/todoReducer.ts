import { iState, iTodoAction } from "./react-app-env";

export const todoReducer = (state: iState, action: iTodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};
