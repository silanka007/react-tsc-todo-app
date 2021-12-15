import { iState, iTodoAction } from "./react-app-env";

export const todoReducer = (state: iState, action: iTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload,...state.todos] };
    case "SELECT_TODO":
      return { ...state, todo: action.payload };
    case "DELETE_TODO":
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: newTodos };
    case "SELECT_FIRST_ITEM":
      return { ...state, todo: state.todos[0] };
    default:
      return state;
  }
};
