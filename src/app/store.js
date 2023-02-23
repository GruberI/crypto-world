import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});

//Step 1: import configureStore
//Step 2 export default configureStore() w/ object that holds the reducer
//Step 3 import Provider and store in index.js
//Step 4 wrap app in Provider