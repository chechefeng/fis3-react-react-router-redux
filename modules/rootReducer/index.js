import {combineReducers} from "redux";
import Reducer from "../reduce/index"

const rootReducer =combineReducers( {
    values:Reducer,
});
export default rootReducer

