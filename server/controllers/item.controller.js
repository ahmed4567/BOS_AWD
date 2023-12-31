import item from "../mongodb/models/items.js"
import User from "../mongodb/models/user.js"
import Barcode from "react-jsbarcode"
import mongoose from "mongoose"

const getAllItems  = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)  
        const items = await Promise.all(
        user.allItems.map((id) => item.findById(id))
      );
      const fixedItemlest = []
      items.forEach(elements => {
        if (elements !== null) {
            fixedItemlest.push(elements);
        }
       });
       console.log(fixedItemlest)
      const formatteditems = fixedItemlest.map(
        ({ _id,Iname,
            description,
            SPrice ,
            BPrice,
            companuName,
            wight , 
            lingth ,
            amount ,
            Exdate ,
            creator }) => {
          return {_id, Iname,
            description,
            SPrice ,
            BPrice,
            companuName,
            wight , 
            lingth ,
            amount ,
            Exdate ,
            creator };
        }
    );
      res.status(200).json(formatteditems)
    }
    catch (error) {
        res.status(404).json({message: error.message}) 
    }
}
const getItemDetail  = async (req,res)=>{}
const creatItem  = async (req,res)=>{
    try {
        const { 
            Iname,
            description,
            SPrice ,
            BPrice,
            companuName,
            wight , 
            lingth ,
            amount ,
            Exdate ,
            creator
    } = req.body
        const id = req.body.creator
        const user = await User.findById(id)
        console.log(user)
        const newItem = await item.create(
            { 
                Iname,
                description,
                SPrice ,
                BPrice,
                companuName,
                wight , 
                lingth ,
                amount ,
                Exdate ,
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
const updateItem  = async (req,res)=>{
    try {
        const {
            Iname,
            description,
            SPrice ,
            BPrice,
            companuName,
            wight , 
            lingth ,
            amount ,
            Exdate ,
            creator
    } = req.body
        const itemId = req.body._id
        await item.findByIdAndUpdate(itemId, {
            Iname,
            description,
            SPrice ,
            BPrice,
            companuName,
            wight , 
            lingth ,
            amount ,
            Exdate ,
            creator
    })
    res.status(200).json({ message: "item updated successfully" });
} catch (error) {
        res.status(404).json({message: error.message})
    }
}
const deletItem  = async (req,res)=>{
    const id = req.body.creator
    const user = await User.findById(id)
    const itemId = req.body._id
    const target = await item.findById(itemId)
    
    
    const session = await mongoose.startSession();
    session.startTransaction();

    await item.findOneAndDelete({ _id: target._id})
    const isLargeNumber = (element) => element === itemId;
    const index = user.allItems.findIndex(isLargeNumber)
    console.log(user.allItems)
    user.allItems.splice(index,1)
    console.log(user.allItems)
    await session.commitTransaction();

    res.status(200).json({ message: "item deleted successfully"})
}

export {
    getAllItems,
    getItemDetail,
    creatItem,
    updateItem,
    deletItem,
}