import React, { useState } from "react";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import TodoView from "./components/TodoView";
import { iTodo, iTodos } from "./react-app-env";

const todoInitial: iTodos = [
  {
    id: 1,
    title: "testing",
    description: "testing functionality",
    status: "completed",
  },
  {
    id: 2,
    title: "Implement todoview component",
    description:
      "implementation of todo view component. this show a more elaborate view of todo items individually",
    status: "completed",
  },
];

function App() {
  const [todos, setTodos] = useState<iTodos | []>(todoInitial);
  const [todo, setTodo] = useState<iTodo>(todos[0]);

  const handleSelectTodo = (todo: iTodo) => {
    setTodo(todo);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setTodo(newTodos[0]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.todoSec}>
        {todos.length > 0 ? (
          <>
            <TodoList
              todos={todos}
              selectedId={todo.id}
              handleSelectTodo={handleSelectTodo}
            />
            <TodoView todo={todo} handleDelete={handleDelete} />
          </>
        ) : (
          <div style={styles.noTodos}>
            <h1>Nothing to display...</h1>
            <Button title="Add New" handler={() => {}} style={{ margin: 20 }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    background: "#052847",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  todoSec: {
    height: "90vh",
    width: "70vw",
    background: "#fff",
    borderRadius: 5,
    display: "flex",
    overflow: "hidden",
    border: "20px solid white",
  },
  noTodos: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    paddingTop: 100,
  },
};
