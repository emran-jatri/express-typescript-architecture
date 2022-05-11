import express, { Application } from 'express'
import {router} from './router'


const bootstrap = async () => {
	try {
		const app: Application = express()
		const port: string | number = process.env.PORT || 5000

		// use
		app.use('/api', router)

		// 
		await app.listen(port)
		console.log(`Server running on http://localhost:${port}`);
	} catch (error) {
		process.exit(1)
	}
}

bootstrap()
