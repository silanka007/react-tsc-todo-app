import React from "react";

type iProps = {
  title: string;
  style?: React.CSSProperties;
  handler: () => void;
};

function Button({ title, handler, style }: iProps) {
  return (
    <button onClick={handler} style={{ ...styles.button, ...style }}>
      {title}
    </button>
  );
}

export default Button;

const styles = {
  button: {
    width: 200,
    background: "#2B6293",
    color: "white",
    border: "none",
    outline: "none",
    borderRadius: 5,
    padding: "15px 10px",
    cursor: "pointer",
  },
};
