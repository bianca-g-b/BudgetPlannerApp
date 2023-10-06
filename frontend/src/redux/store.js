import { configureStore } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";

export default configureStore ({
    reducer: {
        budget: budgetSlice,
    },
})