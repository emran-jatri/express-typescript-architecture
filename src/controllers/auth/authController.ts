
import {Request, Response, NextFunction} from 'express'
import { successResponse } from './../../common/functions/SuccessResponse';
import { errorResponse } from './../../common/functions/ErrorResponse';


export const login = async (request: Request, response: Response, next: NextFunction) => {
	next(successResponse())
	// next(errorResponse())
}