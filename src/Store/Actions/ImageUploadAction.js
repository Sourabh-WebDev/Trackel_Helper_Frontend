import * as constant from "../Constants/ImageUploadConstants"
import axios from "axios"
import { API_URL } from "../../config"




export const ImageUploadAction = (e) => {
    return async (dispatch) => {
        dispatch({ type: constant.IMAGE_UPLOAD_LOADING })
        try {
            const file = e.target.files[0]

            const fd = new FormData()
            fd.append("myfile", file)

            const response = await axios.post(API_URL + "/util/uploadfile", fd, { method: "POST" })

            if (response.status === 200) {
                dispatch({ type: constant.IMAGE_UPLOAD_SUCCESS, payload: response })
            }
        } catch (error) {
            dispatch({ type: constant.IMAGE_UPLOAD_ERROR })
        }
    }
} 