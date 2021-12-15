import React, { SetStateAction } from "react";
import { iTodo, iTodos } from "../react-app-env";
import Button from "./Button";

type TodoListProps = {
  todos: iTodos;
  selectedId: number;
  setShowAddForm: React.Dispatch<SetStateAction<boolean>>;
  handleSelectTodo: (todo: iTodo) => void;
};

function TodoList({
  todos,
  selectedId,
  handleSelectTodo,
  setShowAddForm,
}: TodoListProps) {
  return (
    <div style={styles.container}>
      <div>
        <Button
          title="Add New"
          handler={() => setShowAddForm(true)}
          style={{ margin: 20 }}
        />
      </div>
      <div style={styles.todoList}>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => {
            return (
              <div
                style={
                  selectedId === todo.id ? styles.selectedItem : styles.todoItem
                }
                onClick={() => handleSelectTodo(todo)}
              >
                <h3>{todo.title.substring(0, 40)}</h3>
                <p>{todo.description.substring(0, 35)}...</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;

const styles = {
  container: {
    width: "25vw",
    height: "100%",
    paddingRight: 20,
  },
  todoList: {
    borderRadius: 5,
    height: "100%",
    overflowY: "auto" as "auto",
  },
  todoItem: {
    border: "1px solid #2B6293",
    color: "#2B6293",
    marginBottom: 10,
    borderRadius: 5,
    padding: 15,
    cursor: "pointer",
  },
  selectedItem: {
    border: "1px solid #2B6293",
    color: "white",
    background: "#2B6293",
    marginBottom: 10,
    borderRadius: 5,
    padding: 15,
    cursor: "pointer",
  },
};
