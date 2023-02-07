import "./Item.css";
import cross from "./img/icon-cross.svg";

export default function Item(props) {
  const handleCheck = (e) => {
    const newArr1 = [];

    props.toDoArray.map((item) =>
      props.id === item.id
        ? newArr1.push({
            name: props.toDoName,
            state: e.target.checked ? "checked" : "active",
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

  return (
    <div className="item">
      <input
        type="checkbox"
        onChange={handleCheck}
        checked={props.state === "checked" ? true : false}
      ></input>
      <p
        className={
          props.state === "checked" ? "to-do-completed" : "to-do-active"
        }
      >
        {props.toDoName}
      </p>
      <button className="cross-button" onClick={handleClick}>
        <img src={cross} alt="cross for to do list"></img>
      </button>
    </div>
  );
}
