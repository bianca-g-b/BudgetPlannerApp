import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  budgetSlice  from "./budgetSlice";
import budgetFieldsSlice from "./budgetFieldsSlice";
import csrfSlice  from "./csrfSlice";
import userSlice from "./userSlice";
import authenticatedSlice from "./authenticatedSlice";
import logoutSlice from "./logoutSlice";
import themeSlice from "./themeSlice";
import chartSlice  from "./chartSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const appReducer = combineReducers({
    budget: budgetSlice,
    budgetFields: budgetFieldsSlice,
    csrf: csrfSlice,
    user: userSlice,
    authenticated: authenticatedSlice,
    logout: logoutSlice,
    theme: themeSlice,
    chart: chartSlice,
});

const rootReducer = (state, action) => {
    // console.log(action, "action")
    if (action.type === "logout/setLogout") {
        // console.log("signout request");
        storage.removeItem("persist:root");
        localStorage.removeItem("persist:root");
        return appReducer(undefined, action);
    }
    // console.log("root reducer not signout request");
    return appReducer(state, action);
}

// include redux-persist in the existing code
const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);