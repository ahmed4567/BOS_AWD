import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
    name : {type:String , required : true},
    description : {type:String , required : true},
    wight : {type:Number , required : false},
    lingth : {type:Number , required : false},
    Bprice : {type:Number , required : true},
    Aprice : {type:Number , required : true},
    amount : {type:Number , required : true},
    BarCode :{type:String , required : true},
    creator :{type: mongoose.Schema.Types.ObjectId, ref:"User"},

},{timestamps:true})
 const itemModel = mongoose.model("Item", ItemsSchema)

 export default itemModel