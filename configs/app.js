'use strict'
import express from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import publicationRoutes from "../src/publication/publication.routes.js"
import commentRoutes from "../src/comment/comment.routes.js"
import { addCourses } from "./setup.js"


const configs = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/publication',publicationRoutes)
    app.use('/v1/comment',commentRoutes)
}


export const initServer = async()=>{
    const app = express()
    try {
        addCourses()
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (err) {
        console.error('Server init failed',err)
    }
} 