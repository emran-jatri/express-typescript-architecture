import { SUCCESS_MESSAGE } from "../constants/ResponseMessage"
import { STATUS_CODE_200 } from "../constants/StatusCode"


export const successResponse = (responseData: any = null, message: string = "", statusCode: number = 0) => {
	return {
		message: message || SUCCESS_MESSAGE,
		statusCode: statusCode || STATUS_CODE_200,
		data: responseData
	}
}