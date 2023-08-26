import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema({
    Iname : {type:String , required : true},
    companuName : {type:String , required : true},
    description : {type:String , required : true},
    wight : {type:String , required : false},
    lingth : {type:String , required : false},
    BPrice : {type:String , required : true},
    SPrice : {type:String , required : true},
    amount : {type:String , required : true},
    Exdate : {type :String , required: false},
    creator :{type: mongoose.Schema.Types.ObjectId, ref:"User"},
/** ذيادة سعرية بنسبة
 *
 */
},{timestamps:true})
 const itemModel = mongoose.model("Item", ItemsSchema)

 export default itemModel