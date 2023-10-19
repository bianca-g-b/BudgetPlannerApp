import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";
import csrfSlice  from "./csrfSlice";
import authSlice  from "./authSlice";

const rootReducer = combineReducers({
    budget: budgetSlice,
    csrf: csrfSlice,
    auth: authSlice,
});

export default configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})