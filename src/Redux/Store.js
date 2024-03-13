import { configureStore } from "@reduxjs/toolkit";
import CounterAppSlice from "./Slices/CounterAppSlice";

const Store = configureStore({
    reducer:{
        CounterAppSlice:CounterAppSlice,
    }
})

export default Store