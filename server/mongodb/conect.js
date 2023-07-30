import mongoose from "mongoose";

const conectDB = (url)=>{
    mongoose.set("strictQuery",true)
    mongoose.connect(url)
    .then(()=>{
        console.log("DB conected")
    })
    .catch((err)=>{console.log(err)})
}


export default conectDB