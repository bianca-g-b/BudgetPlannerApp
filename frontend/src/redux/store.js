import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";
import csrfSlice  from "./csrfSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    budget: budgetSlice,
    csrf: csrfSlice,
    user: userSlice,
});

export default configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})