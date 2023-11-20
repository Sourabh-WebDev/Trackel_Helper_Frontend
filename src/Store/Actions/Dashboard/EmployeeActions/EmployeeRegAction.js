import axios from "axios";
import * as constant from "../../../Constants/Dashboard/EmployeConstant/EmployeeReg";
import { API_URL } from "../../../../config";
import Swal from "sweetalert2";

export const GetRegEmployee = (formdata) => {
  return async (dispatch) => {
    dispatch({ type: constant.EMPLOYEE_REG_API_LOADING });
    try {
      const response = await axios.post(API_URL + "/employee/add", formdata);
      if (response.status === 200) {
        dispatch({
          type: constant.EMPLOYEE_REG_API_SUCCESS,
          payload: response.data,
        });
        showSuccess(false, "Employee Registered Successfully");
      }
    } catch (error) {
      dispatch({ type: constant.EMPLOYEE_REG_API_ERROR });
      showSuccess(true, "something error try again ");
    }
  };
};

// Update the employee data
export const UpdateEmployeeData = (id, formdata) => {
  return async (dispatch) => {
    dispatch({ type: constant.UPDATE_EMPLOYEE_DATA_LOADING });
    try {
      const response = await axios.patch(
        API_URL + "/employee/update/" + id,
        formdata
      );
      if (response.status === 200) {
        dispatch({
          type: constant.UPDATE_EMPLOYEE_DATA_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: constant.UPDATE_EMPLOYEE_DATA_ERROR });
    }
  };
};

const showSuccess = (error, message) => {
  return Swal.fire({
    icon: error ? "error" : "success",
    title: message,
  });
};
