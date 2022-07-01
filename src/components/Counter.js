import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementActions, incrementActions, resetActions } from '../services/actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementActions())
    }
    const handleDecrement = () => {
        dispatch(decrementActions())
    }
    const handleReset = () => {
        dispatch(resetActions())
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement} >Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <br />
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;