// eslint-disable-next-line
import React, {useState} from 'react';
import calculate from'../logic/calculate'

// eslint-disable-next-line
function MathsMagician()  {
  const [iniObj, setObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });
    return (
      <div className="App">
        <div className="cacul-section">
          <div className="input-numbers">
            <input type="text" placeholder="0" />
          </div>
          <div className="content">
            <div className="function-calcul">
              <div className="top-calcul">
                <button type="button">AC</button>
                <button type="button">+/-</button>
                <button type="button">%</button>
              </div>
              <div className="numbers">
                <button type="button">7</button>
                <button type="button">8</button>
                <button type="button">9</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">6</button>
                <button type="button">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
              </div>
              <div className="bottom-calcul">
                <button type="button" className="button0">0</button>
                <button type="button">
                  .
                </button>
              </div>

            </div>

            <div className="operation">
              <button type="button">÷</button>
              <button type="button">x</button>
              <button type="button">-</button>
              <button type="button">+</button>
              <button type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MathsMagician;
