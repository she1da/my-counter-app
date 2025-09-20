import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(0, prevCount - 1));
    };
    return (
        <div className="app">
            <h1>Counter</h1>
            <div className="card">
                <div className="count-display">{count}</div>
                <div className="button-group">
                    <button
                        onClick={decrement}
                        className="button"
                        disabled={count === 0}
                    >
                        Decrement
                    </button>
                    <button onClick={increment} className="button">
                        Increment
                    </button>
                </div>
                <p className="note">The count will never go below zero</p>
            </div>
        </div>
    );
};

export default Counter;
