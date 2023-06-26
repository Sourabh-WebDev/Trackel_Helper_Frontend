import axios from "axios"
import * as constant from "../../Constants/Dashboard/ServicesConstant"
import { API_URL } from "../../../config"
import { useEffect } from "react"


// to submit the new service 
export const AddService = (formdata) => {
    return async (dispatch) => {
        dispatch({ type: constant.SERVICE_API_LOADING })
        try {
            const response = await axios.post(API_URL + "/services/add", formdata, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 200) {
                dispatch({ type: constant.SERVICE_API_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: constant.SERVICE_API_ERROR })
        }
    }
}


export const GetAllServices = () => {
    return async (dispatch) => {
        dispatch({ type: constant.SERVICES_GET_API_LOADING })
        try {
            const response = await axios.get(API_URL + "/services/getall")
            if (response.status === 200) {
                dispatch({ type: constant.SERVICES_GET_API_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: constant.SERVICES_GET_API_ERROR })
        }
    }
}

