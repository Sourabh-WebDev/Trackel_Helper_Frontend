import axios from 'axios'
import * as constant from '../../../Constants/customersConstant'
import { API_URL } from '../../../../config'



export const GetAllCustomers = () => {
    return async (dispatch) => {
        dispatch({ type: constant.GET_ALL_CUSTOMER_LOADING })
        try {
            const response = await axios.get(API_URL + '/customer/getall ')
            if (response.status === 200) {
                dispatch({ type: constant.GET_ALL_CUSTOMER_SUCCESS, payload: response.data })
            }
        } catch (error) {
            dispatch({ type: constant.GET_ALL_CUSTOMER_ERROR })
        }
    }
}








