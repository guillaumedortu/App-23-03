import "./App.css";
import Input from "./Input.js";
import ToolBar from "./ToolBar.js";
import Item from "./Item.js";
import React, { useState } from "react";
import Header from "./Header";

export default function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const [displayedTask, setDisplayedTask] = useState("all");
  const [switchTheme, setSwitchTheme] = useState("day");

  const allComponentArray = toDoArray.map((item) => {
    return (
      <Item
        toDoName={item.name}
        key={item.id}
        id={item.id}
        state={item.state}
        setToDoArray={setToDoArray}
        toDoArray={toDoArray}
        switchTheme={switchTheme}
      />
    );
  });

  const completedComponentArray = toDoArray
    .filter((item) => item.state === "checked")
    .map((item) => {
      return (
        <Item
          toDoName={item.name}
          key={item.id}
          id={item.id}
          state={item.state}
          setToDoArray={setToDoArray}
          toDoArray={toDoArray}
          switchTheme={switchTheme}
          setSwitchTheme={setSwitchTheme}
        />
      );
    });

  const activeComponentArray = toDoArray
    .filter((item) => item.state === "active")
    .map((item) => {
      return (
        <Item
          toDoName={item.name}
          key={item.id}
          id={item.id}
          state={item.state}
          setToDoArray={setToDoArray}
          toDoArray={toDoArray}
          switchTheme={switchTheme}
        />
      );
    });
  return (
    <div
      className={switchTheme === "day" ? "app-global-day" : "app-global-night"}
    >
      <div
        className={
          switchTheme === "day"
            ? "backgrounded-part-day"
            : "backgrounded-part-night"
        }
      >
        <Header setSwitchTheme={setSwitchTheme} switchTheme={switchTheme} />
        <Input
          toDoArray={toDoArray}
          setToDoArray={setToDoArray}
          switchTheme={switchTheme}
        />
      </div>
      <div
        className={switchTheme === "day" ? "list-todo-day" : "list-todo-night"}
      >
        {displayedTask === "all" && allComponentArray}
        {displayedTask === "completed" && completedComponentArray}
        {displayedTask === "active" && activeComponentArray}

        <ToolBar
          toDoArray={toDoArray}
          setToDoArray={setToDoArray}
          setDisplayedTask={setDisplayedTask}
          displayedTask={displayedTask}
          switchTheme={switchTheme}
        />
      </div>
    </div>
  );
}
