// eslint-disable-next-line
import React, {useState} from 'react';
import calculate from '../../logic/calculate';

import Quote from './Quote';

function MathsMagician() {
  const [initObj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const btnEventHandler = (event) => {
    setObj(calculate(initObj, event.target.textContent));
  };

  return (
    <div className="App">

      <div className="cacul-section">
        <div className="input-numbers">
          <input type="text" readOnly value={`${initObj.next || initObj.operation || initObj.total || 0}`} />
        </div>
        <div className="content">
          <div className="function-calcul">
            <div className="top-calcul">
              <button type="button" onClick={btnEventHandler}>AC</button>
              <button type="button" onClick={btnEventHandler}>+/-</button>
              <button type="button" onClick={btnEventHandler}>%</button>
            </div>
            <div className="numbers">
              <button type="button" onClick={btnEventHandler}>7</button>
              <button type="button" onClick={btnEventHandler}>8</button>
              <button type="button" onClick={btnEventHandler}>9</button>
              <button type="button" onClick={btnEventHandler}>4</button>
              <button type="button" onClick={btnEventHandler}>5</button>
              <button type="button" onClick={btnEventHandler}>6</button>
              <button type="button" onClick={btnEventHandler}>1</button>
              <button type="button" onClick={btnEventHandler}>2</button>
              <button type="button" onClick={btnEventHandler}>3</button>
            </div>
            <div className="bottom-calcul">
              <button type="button" className="button0" onClick={btnEventHandler}>0</button>
              <button type="button" onClick={btnEventHandler}>
                .
              </button>
            </div>

          </div>

          <div className="operation">
            <button type="button" onClick={btnEventHandler}>÷</button>
            <button type="button" onClick={btnEventHandler}>x</button>
            <button type="button" onClick={btnEventHandler}>-</button>
            <button type="button" onClick={btnEventHandler}>+</button>
            <button type="button" onClick={btnEventHandler}>=</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MathsMagician;
