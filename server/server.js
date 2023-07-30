import * as dotenv from "dotenv"
import express from "express"
import conectDB from "./mongodb/conect.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import itemRouter from "./routes/item.routes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("bak end server")
})

app.get("/Login",(req,res)=>{
    res.send("login tregerd")
})


const startServer = async ()=>{
    try {
        //db 
        conectDB(process.env.MONGODB_URL)       
        app.listen(8080,()=>{
            console.log("server startet at http://localhost:8080/")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()