import "./Input.css";
import React, { useState } from "react";

export default function Input(props) {
  const [inputText, setInputText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      props.setToDoArray([
        ...props.toDoArray,
        { name: e.target.value, state: "active", id: props.toDoArray.length },
      ]);
      setInputText("");
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    console.log();
    if (inputText !== "") {
      props.setToDoArray([
        ...props.toDoArray,
        { name: inputText, state: "active", id: props.toDoArray.length },
      ]);
      setInputText("");
    }
  };

  return (
    <div
      className={
        props.switchTheme === "day" ? "input-global-day" : "input-global-night"
      }
    >
      <button
        className={
          props.switchTheme === "day" ? "add-task-day" : "add-task-night"
        }
        onClick={handleClick}
      >
        +
      </button>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputText}
        className={
          props.switchTheme === "day" ? "add-input-day" : "add-input-night"
        }
        placeholder="Create a new todo..."
      ></input>
    </div>
  );
}
