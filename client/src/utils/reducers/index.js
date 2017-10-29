// import reducers dependencies
//--------------------------------------------------------
import { combineReducers } from "redux";
import user_reducer from "./user_reducer";
import component_reducer from "./component_reducer";
import project_reducer from "./project_reducer";

// combine reducers into one object
//--------------------------------------------------------

const reducers = combineReducers({
    user: user_reducer,
    component: component_reducer,
    project: project_reducer
});

export default reducers;