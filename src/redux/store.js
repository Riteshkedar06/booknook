import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getBookReducer, getBookDetailsReducer } from "./reducers/bookReducer";

const reducer = combineReducers({
    getBooks: getBookReducer,
    getBook: getBookDetailsReducer
});

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;