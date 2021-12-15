import React, { SetStateAction, useContext, useState } from "react";
import { iTodo } from "../react-app-env";
import { todoContext } from "../TodoContext";
import Button from "./Button";

type iTodoNew = {
  setShowAddForm: React.Dispatch<SetStateAction<boolean>>;
};

const TodoNew = ({ setShowAddForm }: iTodoNew) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { todos, dispatch } = useContext(todoContext);

  const handleSubmit = () => {
    const newTodo: iTodo = {
      id: todos.length + 1,
      title,
      description,
      status: "pending",
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    dispatch({
      type: "SELECT_FIRST_ITEM",
    });
    setShowAddForm(false);
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.textArea}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div style={styles.buttonSec}>
        <Button
          title="Cancel"
          handler={() => setShowAddForm(false)}
          style={{ background: "red" }}
        />
        <Button title="Add Todo" handler={handleSubmit} />
      </div>
    </div>
  );
};

export default TodoNew;

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",

    padding: 30,
    paddingTop: 50,
  },
  input: {
    height: 40,
    outline: "none",
    padding: 10,
    borderRadius: 5,
    border: "1px solid #052847",
    color: "#052847",
    marginBottom: 20,
  },
  textArea: {
    minHeight: 100,
    outline: "none",
    padding: 10,
    borderRadius: 5,
    border: "1px solid #052847",
    color: "#052847",
    marginBottom: 20,
  },
  buttonSec: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
