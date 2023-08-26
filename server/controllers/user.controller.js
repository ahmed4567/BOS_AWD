import { json } from "react-router-dom"
import User from "../mongodb/models/user.js"

const getAllUsers = async (req,res)=>{}
const creatUser = async (req,res)=>{}
const getUserByID = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findOne({ _id: id }).populate("allProperties");
        res.status(202).json(user)
    } catch (error) {
        res.status(404).json({message: err.message})
    }
}
const createBell = async (req,res)=>{}
const selItem = async(req,res)=>{}
const restorItem =async(req,res)=>{}
const getAllUserItems = async (Req,res)=>{}

export {
    getAllUsers,
    creatUser,
    getUserByID,
    createBell,
    selItem,
    restorItem,
    getAllUserItems
}