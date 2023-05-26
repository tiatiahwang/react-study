import { useState } from 'react';

const Calculator = () => {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();

  const handleButton = () => {
    if (!firstNum || !secondNum || !operation) {
      alert('you should fill all inputs');
    }

    if (operation === 'plus') {
      setResult(firstNum + secondNum);
    } else if (operation === 'minus') {
      setResult(firstNum - secondNum);
    } else if (operation === 'multiple') {
      setResult(firstNum * secondNum);
    } else {
      setResult(firstNum / secondNum);
    }
  };

  return (
    <div>
      <div>
        <input
          type='number'
          placeholder='👉🏻 write a number'
          onChange={(e) => setFirstNum(e.target.value)}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='👉🏻 write another number'
          onChange={(e) => setSecondNum(e.target.value)}
        />
      </div>
      <div>
        <select
          onChange={(e) => setOperation(e.target.value)}
        >
          <option>👉🏻 select operation</option>
          <option value='plus'>+</option>
          <option value='minus'>-</option>
          <option value='multiple'>*</option>
          <option value='divide'>/</option>
        </select>
      </div>
      <button onClick={handleButton}>Calculate!</button>
      {result && <p>The result is: ${result}</p>}
    </div>
  );
};

export default Calculator;
