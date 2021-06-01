import "./Button.css";

const Button = (prop) => {
  return (
    <div
      onClick={() => prop.handleClick(prop.symbol)}
      className="button_wrapper"
      style={{ backgroundColor: prop.color }}
    >
      {prop.symbol}
    </div>
  );
};

export default Button;
