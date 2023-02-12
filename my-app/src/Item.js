import "./Item.css";
import cross from "./img/icon-cross.svg";
import React, { useState } from "react";

export default function Item(props) {
  const [hoverDisplay, setHoverDisplay] = useState("not-hover");
  const handleEnter = () => {
    setHoverDisplay("hover");
  };

  const handleLeave = () => {
    setHoverDisplay("not-hover");
  };

  const handleCheck = (e) => {
    const newArr1 = [];

    props.toDoArray.map((item) =>
      props.id === item.id
        ? newArr1.push({
            name: props.toDoName,
            state: props.state === "active" ? "checked" : "active",
            id: props.id,
          })
        : newArr1.push(item)
    );
    props.setToDoArray(newArr1);
  };

  const handleClick = () => {
    const newArr = [];
    props.toDoArray.map((item) => {
      if (item.id !== props.id) {
        newArr.push({ name: item.name, state: item.state, id: newArr.length });
      }
      return props.setToDoArray(newArr);
    });
  };

  const handleStyleItem = () => {
    if (props.switchTheme === "day" && props.id === 0) {
      return "item-day-1";
    } else if (props.switchTheme === "day" && props.id !== 0) {
      return "item-day";
    } else if (props.switchTheme === "night" && props.id !== 0) {
      return "item-night";
    } else {
      return "item-night";
    }
  };

  const handleStyleCheck = () => {
    if (props.state === "checked" && props.switchTheme === "day") {
      return "checked-day-button";
    } else if (props.state === "checked" && props.switchTheme === "night") {
      return "checked-night-button";
    } else if (props.state === "active" && props.switchTheme === "day") {
      return "active-day-button";
    } else {
      return "active-night-button";
    }
  };

  const handleStyleTodo = () => {
    if (props.state === "checked" && props.switchTheme === "day") {
      return "checked-day-todo";
    } else if (props.state === "checked" && props.switchTheme === "night") {
      return "checked-night-todo";
    } else if (props.state === "active" && props.switchTheme === "day") {
      return "active-day-todo";
    } else {
      return "active-night-todo";
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={handleStyleItem()}
    >
      <div className="check-task">
        <button
          className={handleStyleCheck()}
          type="checkbox"
          onClick={handleCheck}
          checked={props.state === "checked" ? true : false}
        ></button>

        <p className={handleStyleTodo()} onClick={handleCheck}>
          {props.toDoName}
        </p>
      </div>
      <button className={hoverDisplay} onClick={handleClick}>
        <img src={cross} alt="cross for to do list"></img>
      </button>
    </div>
  );
}
