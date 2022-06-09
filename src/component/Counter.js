import React, { useState } from 'react';

function Counter(props) {
    const [counter, setcounter] = useState(0);
    const plus = () => {
        if (counter < 10) {
            setcounter(counter + 1);
        }
    }
    const minus = () => {
        if (counter > 0) {
            setcounter(counter - 1);
        }
    }
    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => plus()}>Increment</button> &nbsp;
                <button onClick={() => minus()}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;