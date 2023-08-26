import recet from "../mongodb/models/recet.js"
import User from "../mongodb/models/user.js"
import Barcode from "react-jsbarcode"
import mongoose from "mongoose"

const getAllrcet  = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)  
        const recet = await Promise.all(
        user.allItems.map((id) => recet.findById(id))
      );
      const fixedItemlest = []
      recet.forEach(elements => {
        if (elements !== null) {
            fixedItemlest.push(elements);
        }
       });
       console.log(fixedItemlest)
      const formatteditems = fixedItemlest.map(
        ({ _id,Iname,
            SPrice ,
            qunt ,
            printD ,
            creator }) => {
          return {_id,Iname,
            SPrice ,
            qunt ,
            printD ,
            creator  };
        }
    );
      res.status(200).json(formatteditems)
    }
    catch (error) {
        res.status(404).json({message: error.message}) 
    }
}
const getrecetDetail  = async (req,res)=>{}
const creatrecet  = async (req,res)=>{
    try {
        const { 
            Iname,
            SPrice ,
            qunt ,
            printD ,
            creator
    } = req.body
        const id = req.body.creator
        const user = await User.findById(id)
        console.log(user)
        const newItem = await item.create(
            { 
                Iname,
            SPrice ,
            qunt ,
            printD ,
            creator
            })
        user.allItems.push(newItem._id)
        console.log(user.allItems)
        user.save()
        res.status(202).json(newItem)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
const updaterecet  = async (req,res)=>{
    try {
        const {
            Iname,
            SPrice ,
            qunt ,
            printD ,
            creator
    } = req.body
        const itemId = req.body._id
        await item.findByIdAndUpdate(itemId, {
            Iname,
            SPrice ,
            qunt ,
            printD ,
            creator
    })
    res.status(200).json({ message: "item updated successfully" });
} catch (error) {
        res.status(404).json({message: error.message})
    }
}
const deletrecet  = async (req,res)=>{
    const id = req.body.creator
    const user = await User.findById(id)
    const itemId = req.body._id
    const target = await recet.findById(itemId)
    
    
    const session = await mongoose.startSession();
    session.startTransaction();

    await recet.findOneAndDelete({ _id: target._id})
    const isLargeNumber = (element) => element === itemId;
    const index = user.allItems.findIndex(isLargeNumber)
    console.log(user.allItems)
    user.allItems.splice(index,1)
    console.log(user.allItems)
    await session.commitTransaction();

    res.status(200).json({ message: "item deleted successfully"})
}

export {
    getAllrcet,
    getrecetDetail,
    creatrecet,
    updaterecet,
    deletrecet,
}