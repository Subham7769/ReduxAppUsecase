import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

const CounterSlice = createSlice({
    name:"CounterSlice",
    initialState: initialState,
    reducers:{
        Increment(state,action){
                state.value++;
        },
        Decrement(state,action){
            state.value--;
        },
        Incrementby(state,action){
            state.value += action.payload;
        },
        Decrementby(state,action){
            state.value -= action.payload;
        }
    }
})

export const {Increment,Decrement,Incrementby,Decrementby} = CounterSlice.actions;
export default CounterSlice.reducer