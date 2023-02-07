import "./ToolBar.css";

export default function ToolBar(props) {
  const handleClear = () => {
    const newArr = [];
    props.toDoArray.map((item) => {
      if (item.state === "active") {
        newArr.push({
          name: item.name,
          state: "active",
          id: newArr.length,
        });
      }
      return props.setToDoArray(newArr);
    });
  };

  const handleAll = () => {
    props.setDisplayedState("all");
  };

  const handleCompleted = () => {
    props.setDisplayedState("completed");
  };

  const handleActive = () => {
    props.setDisplayedState("active");
  };
  return (
    <div className="toolbar-global">
      <p>{props.toDoArray.length} items left</p>
      <button onClick={handleAll}>All</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleCompleted}>Completed</button>
      <button onClick={handleClear}>Clear Completed</button>
    </div>
  );
}
