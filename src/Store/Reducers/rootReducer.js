import { combineReducers } from "redux";
import SeviceAddReducer from "./Dashboard/ServiceAddReducer";
import GetAllServicesReducer from "./Dashboard/GetAllServicesReducer";
import ImageUploadReducer from "./ImageUploadReducers";
import GetLogInReducers from "./LandingPage/AuthReducer";
import DeleterTheServiceReducer from "./Dashboard/DeleteServiceReducer";
import GetSearchReducer from "./LandingPage/SearchReducer";
import GetEmployeeRegReducer from "./Dashboard/EmployeeReducers/EmployeeRegReducer";
import GetAllEmployeeDataReducer from "./Dashboard/EmployeeReducers/GetAllEmployeeReducer";


const rootReducer = combineReducers({
    SeviceAddReducer: SeviceAddReducer,
    GetAllServicesReducer: GetAllServicesReducer,
    ImageUploadReducer: ImageUploadReducer,
    DeleterTheServiceReducer: DeleterTheServiceReducer,
    GetEmployeeRegReducer: GetEmployeeRegReducer,

    GetAllEmployeeDataReducer:
        GetAllEmployeeDataReducer,

    // Landing Page 
    GetLogInReducers: GetLogInReducers,
    GetSearchReducer: GetSearchReducer,
})



export default rootReducer