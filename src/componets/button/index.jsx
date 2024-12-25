import "./style.css";
function Button({ name, click, choosed }) {
  return (
    <button
      className={`button ${choosed === name ? "active" : ""}`}
      onClick={() => click(name)}
    >
      {name}
    </button>
  );
}

export default Button;
