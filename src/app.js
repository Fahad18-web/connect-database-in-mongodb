import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true 
    }))

 app.use(express.json({limit: '16k'}))
 app.use(express.urlencoded({extended:true, limit:'16k'}))
 app.use(express.static('public'))   
 app.use(cookieParser())
// next param use hota hai middleware mai kyun ke jb ap multiple checkins lagate ho to us se pahle next yani flag apna km khtam kere ga phr agle middleware mai jaye ga

export default express