import cookieParser from 'cookie-parser'
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
const app : Application = express()

//parsers
app.use(express.json())
app.use(cookieParser())

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

app.use("/api/v1",router)

app.get('/',(req: Request, res: Response)=> {
res.send('This is the root of Shukria Agro')
})

export default app