import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";
import csrfSlice  from "./csrfSlice";
import userSlice from "./userSlice";
import authenticatedSlice from "./authenticatedSlice";

const rootReducer = combineReducers({
    budget: budgetSlice,
    csrf: csrfSlice,
    user: userSlice,
    authenticated: authenticatedSlice,
});

export default configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})