import React, { useContext, useState } from "react";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import TodoNew from "./components/TodoNew";
import TodoView from "./components/TodoView";
import { iTodo } from "./react-app-env";
import { todoContext } from "./TodoContext";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const { todo, todos, dispatch } = useContext(todoContext);

  const handleSelectTodo = (todo: iTodo) => {
    dispatch({
      type: "SELECT_TODO",
      payload: todo,
    });
  };

  const handleDelete = (todo: iTodo) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo,
    });
    dispatch({
      type: "SELECT_FIRST_ITEM",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.todoSec}>
        {showAddForm ? (
          <div style={{...styles.noTodos, paddingTop: 0}}>
            <div style={styles.newTodo}>
              <TodoNew setShowAddForm={setShowAddForm} />
            </div>
          </div>
        ) : todos.length > 0 ? (
          <>
            <TodoList
              todos={todos}
              selectedId={todo.id}
              handleSelectTodo={handleSelectTodo}
              setShowAddForm={setShowAddForm}
            />
            <TodoView todo={todo} handleDelete={handleDelete} />
          </>
        ) : (
          <div style={styles.noTodos}>
            <h1>Nothing to display...</h1>
            <Button
              title="Add New"
              handler={() => setShowAddForm(true)}
              style={{ margin: 20 }}
            />
          </div>
        )}
        {}
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
  newTodo: {
    width: "50%",
    height: "100%"
  },
};
