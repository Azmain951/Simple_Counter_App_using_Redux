import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button>Increment</button>
            <button>Decrement</button>
            <br />
            <button>Reset</button>
        </div>
    );
};

export default Counter;