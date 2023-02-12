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
    props.setDisplayedTask("all");
  };

  const handleStyleAll = () => {
    if (props.displayedTask === "all" && props.switchTheme === "day") {
      return "filter-on-day";
    } else if (props.displayedTask !== "all" && props.switchTheme === "day") {
      return "filter-off-day";
    } else if (props.displayedTask === "all" && props.switchTheme === "night") {
      return "filter-on-night";
    } else if (props.displayedTask !== "all" && props.switchTheme === "night") {
      return "filter-off-night";
    }
  };

  const handleStyleActive = () => {
    if (props.displayedTask === "active" && props.switchTheme === "day") {
      return "filter-on-day";
    } else if (
      props.displayedTask !== "active" &&
      props.switchTheme === "day"
    ) {
      return "filter-off-day";
    } else if (
      props.displayedTask === "active" &&
      props.switchTheme === "night"
    ) {
      return "filter-on-night";
    } else if (
      props.displayedTask !== "active" &&
      props.switchTheme === "night"
    ) {
      return "filter-off-night";
    }
  };

  const handleStyleCompleted = () => {
    if (props.displayedTask === "completed" && props.switchTheme === "day") {
      return "filter-on-day";
    } else if (
      props.displayedTask !== "completed" &&
      props.switchTheme === "day"
    ) {
      return "filter-off-day";
    } else if (
      props.displayedTask === "completed" &&
      props.switchTheme === "night"
    ) {
      return "filter-on-night";
    } else if (
      props.displayedTask !== "completed" &&
      props.switchTheme === "night"
    ) {
      return "filter-off-night";
    }
  };

  const handleCompleted = () => {
    props.setDisplayedTask("completed");
  };

  const handleActive = () => {
    props.setDisplayedTask("active");
  };

  const handleStyleToolbar = () => {
    if (props.switchTheme === "day" && props.toDoArray.length === 0) {
      return "toolbar-empty-day";
    } else if (props.switchTheme === "day" && props.toDoArray.length !== 0) {
      return "toolbar-global-day";
    } else if (props.switchTheme === "night" && props.toDoArray.length === 0) {
      return "toolbar-empty-night";
    } else if (props.switchTheme === "night" && props.toDoArray.length !== 0) {
      return "toolbar-global-night";
    }
  };
  return (
    <div className={handleStyleToolbar()}>
      <p className="items-left">{props.toDoArray.length} items left</p>
      <div
        className={
          props.switchTheme === "day" ? "filters-day" : "filters-night"
        }
      >
        {" "}
        <button className={handleStyleAll()} onClick={handleAll}>
          All
        </button>
        <button className={handleStyleActive()} onClick={handleActive}>
          Active
        </button>
        <button className={handleStyleCompleted()} onClick={handleCompleted}>
          Completed
        </button>
      </div>
      <button className="clear-button" onClick={handleClear}>
        Clear Completed
      </button>
    </div>
  );
}
