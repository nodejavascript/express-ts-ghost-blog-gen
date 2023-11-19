import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'

import routes from './routes'

dotenv.config()

const app: express.Application = express()

app.disable('x-powered-by')

app.use(helmet())

app.get('/favicon.ico', (req: Request, res: Response) => res.sendStatus(204))

app.use(routes)

// Error route handler
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  next(new Error('Internal Server Error'))
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found')
})

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send('Internal Server Error')
})

export default app
