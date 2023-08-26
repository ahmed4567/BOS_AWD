import mongoose from "mongoose";

const recetSchema = new mongoose.Schema({
    Iname : {type:String , required : true},
    SPrice : {type:String , required : true},
    qunt : {type:String , required : true},
    printD : {type :String , required: false},
    seler :{type: mongoose.Schema.Types.ObjectId, ref:"User"},
/** ذيادة سعرية بنسبة
 *
 */
},{timestamps:true})
 const recetModel = mongoose.model("recet", recetSchema)

 export default recetModel