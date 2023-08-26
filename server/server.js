import * as dotenv from "dotenv"
import express from "express"
import conectDB from "./mongodb/conect.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import itemRouter from "./routes/item.routes.js"
import { createCanvas } from "canvas"
import Barcode from "jsbarcode"
import {register,login} from "./controllers/auth.js"
import pdf from "html-pdf"
import bodyParser from "body-parser"
import pdfTemplate from "./docs/index.js"
import { fileURLToPath } from 'url'
import path from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import {
    getAllItems,
    getItemDetail,
    creatItem,
    updateItem,
    deletItem,
} from "./controllers/item.controller.js"
import {
    getAllrcet,
    getrecetDetail,
    creatrecet,
    updaterecet,
    deletrecet,
}from "./controllers/recet.controller.js"
import { log } from "console"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("bak end server")
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**auth routers*/
app.post("/auth/register",register)
app.post("/auth/login",login)

app.post("/items",creatItem)
app.get("/items/:id",getAllItems)
app.post("/items/:id",updateItem)
app.post("/items/delet/:id",deletItem)
app.use("/users",userRouter)

/**doc creation */
app.post('/parcodePdf', (req, res) => {
 console.log("post",req.body)   
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        console.log(res)
        res.send(Promise.resolve());
    });    

});

app.get('/fetchParcodPdf', (req, res) => {
        console.log(req.body)
        const fillname = `result.pdf`
        res.sendFile(fillname, {root: path.join(__dirname)}, (err) => {
            if (err) {
                next(err);
            } else {
                console.log('File Sent:', fillname);
            }
        });})


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