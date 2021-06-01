import "./Input.css";

const Input = (prop) => {
  return (
    <div className="input_wrapper">
      <div className="result">
        <h1>{prop.result}</h1>
      </div>
      <div className="text">
        <h3>{prop.text}</h3>
      </div>
    </div>
  );
};

export default Input;
