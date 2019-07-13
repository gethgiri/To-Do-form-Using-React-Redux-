import {combineReducers} from "redux";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
	reduxData: userReducers
});

export default rootReducer;

