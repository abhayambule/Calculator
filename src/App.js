import { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";
const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addtoText = (val) => {
    setText((text) => [...text, val + ""]); //previous all value + current value + empty space
  };
  const clearText = () => {
    setText("");
    setResult("");
  };

  const calcResult = () => {
    const input = text.join(""); //remove comma
    setResult(evaluate(input));
  };
  const bgcolor = "#3874d6";

  return (
    <div className="App">
      <div className="calc_wrapper">
        <Input text={text} result={result} />
        <div className="button_row">
          <Button symbol="0" handleClick={addtoText} />
          <Button symbol="Clear" color={bgcolor} handleClick={clearText} />
          <Button symbol="*" color={bgcolor} handleClick={addtoText} />
          <Button symbol="/" color={bgcolor} handleClick={addtoText} />
        </div>
        <div className="button_row">
          <Button symbol="7" handleClick={addtoText} />
          <Button symbol="8" handleClick={addtoText} />
          <Button symbol="9" handleClick={addtoText} />
          <Button symbol="+" color={bgcolor} handleClick={addtoText} />
        </div>
        <div className="button_row">
          <Button symbol="4" handleClick={addtoText} />
          <Button symbol="5" handleClick={addtoText} />
          <Button symbol="6" handleClick={addtoText} />
          <Button symbol="-" color={bgcolor} handleClick={addtoText} />
        </div>
        <div className="button_row">
          <Button symbol="1" handleClick={addtoText} />
          <Button symbol="2" handleClick={addtoText} />
          <Button symbol="3" handleClick={addtoText} />
          <Button symbol="=" color={bgcolor} handleClick={calcResult} />
        </div>
      </div>
    </div>
  );
};

export default App;
