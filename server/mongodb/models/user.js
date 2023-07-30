import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {type:String , required : true},
    userName : {type:String , required : true},
    emaile : {type:String , required : true},
    phone : {type:String , required : true,min :8},
    passWord :{type: String ,required : true },
    allItems : [{type: mongoose.Schema.Types.ObjectId, ref:"Item"}],
},{timestamps:true}) 

const userModel = mongoose.model("User" , UserSchema)   

export default userModel