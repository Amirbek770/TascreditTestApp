import { configureStore } from "@reduxjs/toolkit";
import  eventStateSlice  from "./eventSlice";

export const store = configureStore({
    reducer:{
        eventState: eventStateSlice
    }
})