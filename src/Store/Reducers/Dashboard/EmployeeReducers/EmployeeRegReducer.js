import * as constant from "../../../Constants/Dashboard/EmployeConstant/EmployeeReg";

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

const GetEmployeeRegReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.EMPLOYEE_REG_API_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case constant.EMPLOYEE_REG_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case constant.EMPLOYEE_REG_API_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

// Update the Employee
const UpdateEmployeeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.UPDATE_EMPLOYEE_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case constant.UPDATE_EMPLOYEE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case constant.UPDATE_EMPLOYEE_DATA_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export { GetEmployeeRegReducer, UpdateEmployeeDataReducer };
