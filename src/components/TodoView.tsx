import React from "react";
import { iTodo } from "../react-app-env";
import Button from "./Button";

type TodoViewProps = {
  todo: iTodo;
  handleDelete: (todo: iTodo) => void;
  markCompleted: (todo: iTodo) => void;
};

function TodoView({ todo, handleDelete, markCompleted }: TodoViewProps) {
  return (
    <div style={styles.container}>
      <div style={styles.todoView}>
        <h3 style={styles.title}>{todo.title}</h3>
        <div style={styles.description}>
          <h4>Description: </h4>
          <p>{todo.description}</p>
        </div>
        <div style={styles.buttons}>
          <Button
            title="Delete"
            handler={() => handleDelete(todo)}
            style={{ background: "red", width: "100px", marginRight: 20 }}
          />
          {todo.status !== "completed" && (
            <Button
              title="Mark Completed"
              handler={() => markCompleted(todo)}
              style={{ background: "green", width: "150px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoView;

const styles = {
  container: {
    width: "45vw",
    height: "100%",
    background: "#2B6293",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    border: "1px solid #2B6293",
  },
  todoView: {
    width: "80%",
    height: "80%",
    background: "white",
    borderRadius: 5,
    padding: 20,
    textAlign: "center" as "center",
    border: "1px solid #2B6293",
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase" as "uppercase",
    marginBottom: 40,
  },
  description: {
    textAlign: "left" as "left",
  },
  buttons: {
    marginTop: 20,
    display: "flex",
  },
};
