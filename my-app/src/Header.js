import "./Header.css";
import day from "./img/icon-sun.svg";
import night from "./img/icon-moon.svg";

export default function Header(props) {
  const handleClick = () => {
    props.setSwitchTheme(props.switchTheme === "day" ? "night" : "day");
  };
  return (
    <div className="header">
      <h1>To Do</h1>
      <button onClick={handleClick}>
        <img
          className="img"
          alt="icon for switch theme feature"
          src={props.switchTheme === "day" ? day : night}
        ></img>
      </button>
    </div>
  );
}
