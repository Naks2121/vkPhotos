import { combineReducers } from "redux";
import { pageReducer } from "../reducers/page";
import { userReducer } from "../reducers/user";

export const initialState = {
  user: {
    name: "Василий",
    surname: "Реактов",
    age: 27,
  },
};

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});
