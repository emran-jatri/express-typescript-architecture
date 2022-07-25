import express, { Application, ErrorRequestHandler, json, NextFunction, Request, Response, urlencoded } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import dotenv from 'dotenv'

import {router} from './router'
import { commonMiddleware } from './middlewares/CommonMiddleware'


const bootstrap = async () => {
	try {
		const app: Application = express()
		
		// dot env init
		dotenv.config();


		const port: string | number = process.env.PORT || 5000

		// .env

		// all middlewares
		// app.set('trust proxy', true)
		app.use(helmet());
		app.use(json());
		app.use(urlencoded({extended: false}));
		app.use(morgan("dev"));
		app.use(cors());
		// zgip compression
		app.use(
			compression({
				level: 6,
				// threshold: 100 * 1000,
				filter: (req: Request, res: Response) => {
					if (req.headers["x-no-compression"] === "true") {
						return false;
					}
					return compression.filter(req, res);
				},
			})
		);

		// router
		app.use('/api', router)

		// common middlewares
		app.use(commonMiddleware)

		// 
		await app.listen(port)
		console.log(`Server running on http://localhost:${port}`);
	} catch (error) {
		console.log('Server has been stoppaged!');
		process.exit(1)
	}
}

bootstrap()
