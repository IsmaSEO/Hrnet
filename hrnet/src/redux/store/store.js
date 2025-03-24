import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import employeeReducer from "../slice/employeeSlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
