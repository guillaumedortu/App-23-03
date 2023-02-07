import "./App.css";
import Input from "./Input.js";
import ToolBar from "./ToolBar.js";
import Item from "./Item.js";
import React, { useState } from "react";
import Header from "./Header";

export default function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const [displayedState, setDisplayedState] = useState("all");
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
        />
      );
    });
  return (
    <div className="app-global">
      <Header setSwitchTheme={setSwitchTheme} switchTheme={switchTheme} />
      <Input toDoArray={toDoArray} setToDoArray={setToDoArray} />
      {displayedState === "all" && allComponentArray}
      {displayedState === "completed" && completedComponentArray}
      {displayedState === "active" && activeComponentArray}
      <ToolBar
        toDoArray={toDoArray}
        setToDoArray={setToDoArray}
        setDisplayedState={setDisplayedState}
        displayedState={displayedState}
      />
    </div>
  );
}
