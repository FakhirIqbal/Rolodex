// store.js
import { configureStore } from '@reduxjs/toolkit';
import userslice from './reducers/userslice';

const store = configureStore({
    reducer: {
        userDetail: userslice,
        // Add other reducers here
    },
});

export default store;
