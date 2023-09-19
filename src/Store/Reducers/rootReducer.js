import { combineReducers } from "redux";
import SeviceAddReducer from "./Dashboard/ServiceAddReducer";
import GetAllServicesReducer from "./Dashboard/GetAllServicesReducer";
import ImageUploadReducer from "./ImageUploadReducers";
import GetLogInReducers from "./LandingPage/AuthReducer";
import DeleterTheServiceReducer from "./Dashboard/DeleteServiceReducer";
import GetSearchReducer from "./LandingPage/SearchReducer";
import GetEmployeeRegReducer from "./Dashboard/EmployeeReducers/EmployeeRegReducer";
import GetAllEmployeeDataReducer from "./Dashboard/EmployeeReducers/GetAllEmployeeReducer";
import GetAllServiceProviderReducer from "./Dashboard/Authentication/AllServiceProviderReducer";
import GetAllCustomerReducer from "./CustomersReducers.js/GetAllCustomerReducers";
import GetCustomerUpdateReducer from "./CustomersReducers.js/GetCustomerUpdateReducer";
import { GetAddHeadExpReducers, GetAllHeadExpReducer, GetAddExpenseReducer, GetAddCollectionReducer, GetAllExpenseReducers, GetAllCollectionReducers } from "./Dashboard/ExpensesReducers/headExpReducers";

const rootReducer = combineReducers({
    SeviceAddReducer: SeviceAddReducer,
    GetAllServicesReducer: GetAllServicesReducer,
    ImageUploadReducer: ImageUploadReducer,
    DeleterTheServiceReducer: DeleterTheServiceReducer,
    GetEmployeeRegReducer: GetEmployeeRegReducer,

    GetAllEmployeeDataReducer: GetAllEmployeeDataReducer,
    GetAllServiceProviderReducer: GetAllServiceProviderReducer,
    GetAllCustomerReducer: GetAllCustomerReducer,
    GetCustomerUpdateReducer: GetCustomerUpdateReducer,
    GetAddHeadExpReducers: GetAddHeadExpReducers,
    GetAllHeadExpReducer: GetAllHeadExpReducer,
    GetAddExpenseReducer: GetAddExpenseReducer,
    GetAddCollectionReducer: GetAddCollectionReducer,
    GetAllExpenseReducers: GetAllExpenseReducers,
    GetAllCollectionReducers: GetAllCollectionReducers,
    // Landing Page 
    GetLogInReducers: GetLogInReducers,
    GetSearchReducer: GetSearchReducer,
})



export default rootReducer