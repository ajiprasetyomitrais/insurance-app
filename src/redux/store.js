import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "../pages/Dashboard/DashboardSlice";

// export const rootReducer = combineReducers({
    
// });

export const store = configureStore({
    reducer: {
        DashboardReducer
    }
});

