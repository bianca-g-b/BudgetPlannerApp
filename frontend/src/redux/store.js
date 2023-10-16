import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";
import csrfSlice  from "./csrfSlice";

const rootReducer = combineReducers({
    budget: budgetSlice,
    csrf: csrfSlice,
});

export default configureStore ({
    reducer: rootReducer,
})