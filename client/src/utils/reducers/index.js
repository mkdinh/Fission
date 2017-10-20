// import reducers dependencies
//--------------------------------------------------------
import { combineReducers } from "redux";
import user_reducer from "./user_reducer";

// combine reducers into one object
//--------------------------------------------------------

const reducers = combineReducers({
    user: user_reducer
});

export default reducers;