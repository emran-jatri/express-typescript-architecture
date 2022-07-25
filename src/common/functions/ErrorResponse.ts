import { ERROR_MESSAGE } from "../constants/ResponseMessage"
import { STATUS_CODE_500 } from "../constants/StatusCode"


export const errorResponse = (responseData: any = null, message: string = "", statusCode: number = 0) => {
	return {
		message: message || ERROR_MESSAGE,
		statusCode: statusCode || STATUS_CODE_500,
		data: responseData
	}
}