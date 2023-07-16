import * as constant from "../../Constants/LandingPage/AuthConstants";
import { API_URL } from "../../../config";
import axios from "axios";
import Swal from "sweetalert2";
import { UseStateManager } from "../../../Context/StateManageContext";




const users = {
    Admin: "Admin",
    vendor: "vendor",
    Office: "Office",
    Customer: "Customer"
}


export const GetLogIn = (formdata, loginPerson) => {
    return async (dispatch) => {
        dispatch({ type: constant.LOGIN_API_LOADING })
        try {
            let response;
            if (loginPerson === users.Customer) {
                response = await axios.post(API_URL + "/customer/login", formdata, { method: "POST" })
            } else if (loginPerson === users.vendor) {
                response = await axios.post(API_URL + "/supervisor/login", formdata, { method: "POST" })
            }
            if (response.status === 200) {
                dispatch({ type: constant.LOGIN_API_SUCCESS, payload: response.data })
                sessionStorage.setItem('user', JSON.stringify(response.data))
            }
        } catch (error) {
            dispatch({ type: constant.LOGIN_API_ERROR })

        }
    }
}

