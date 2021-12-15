import { iState, iTodoAction } from "./react-app-env";

export const todoReducer = (state: iState, action: iTodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [action.payload, ...state.todos] };
    case "SELECT_TODO":
      return { ...state, todo: action.payload };
    case "DELETE_TODO":
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: newTodos };
    case "SELECT_FIRST_ITEM":
      return { ...state, todo: state.todos[0] };
    case "MARK_COMPLETED":
      const latestTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = "completed";
          return todo;
        }
        return todo;
      });
      return { ...state, todos: latestTodos };
    default:
      return state;
  }
};
