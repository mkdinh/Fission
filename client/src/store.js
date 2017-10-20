// Import dependencies
//--------------------------------------------------------
import { createStore, applyMiddleware } from "redux";
import { createLogger as logger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./utils/reducers";

// create global redux state
//--------------------------------------------------------

// apply middleware to redux
const middleware = applyMiddleware(thunk, logger());

// create store to hold global variables w/ middleware
const store = createStore(reducers, middleware)

export default store;