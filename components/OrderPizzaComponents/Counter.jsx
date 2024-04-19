import React from "react";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/counter.css";

function Counter({ count, handleIncrement, handleDecrement }) {
  return (
    <div className="counter-container">
      <button
        className="counter-button"
        style={{ borderRadius: " 6px 0 0 6px " }}
        onClick={handleDecrement}
      >
        -
      </button>
      <h3 className="counter-value">{count}</h3>
      <button
        className="counter-button"
        style={{ borderRadius: " 0 6px 6px 0" }}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
