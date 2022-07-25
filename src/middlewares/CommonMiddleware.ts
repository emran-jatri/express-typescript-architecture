import { Request, Response, NextFunction } from "express";



export const commonMiddleware = (data: any, request: Request, response: Response, next: NextFunction) => {
	return response.status(data.statusCode).json(data)
}