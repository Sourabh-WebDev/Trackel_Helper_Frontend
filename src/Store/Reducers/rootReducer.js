import { combineReducers } from "redux";
import SeviceAddReducer from "./Dashboard/ServiceAddReducer";


const rootReducer = combineReducers({
    SeviceAddReducer: SeviceAddReducer,
})



export default rootReducer