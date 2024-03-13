import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, Incrementby,Decrementby } from '../../Redux/Slices/CounterAppSlice';
import { useState } from 'react';

const CounterApp = () => {
    const dispatch = useDispatch();
    const number = useSelector(state => state.CounterAppSlice.value);
    const [input, setInput] = useState(0);
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => { dispatch(Increment()) }}>+</button>
            <button onClick={() => { dispatch(Decrement()) }}>-</button>
            <button onClick={() => { dispatch(Incrementby(parseInt(input, 10))) }}>Increment by</button>
            <button onClick={() => { dispatch(Decrementby(parseInt(input, 10))) }}>Decrementby by</button>
            <br/>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default CounterApp;
