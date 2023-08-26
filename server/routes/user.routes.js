import express  from "express";
import {
    getAllUsers,
    creatUser,
    getUserByID,
    createBell,
    selItem,
    restorItem,
    getAllUserItems
    } from "../controllers/user.controller.js"
import {
    getAllItems,
    getItemDetail,
    creatItem,
    updateItem,
    deletItem,
    } from "../controllers/item.controller.js"
import {verifyToken} from "../middleware/auth.js"

const router = express.Router()
router.get("/",verifyToken,getAllUsers)
router.post("/",verifyToken,creatUser)
router.get("/:id",verifyToken,getUserByID)
router.get("/:id/items",verifyToken,getAllUserItems,getUserByID)
router.post("/:id/sellItem",verifyToken,selItem,getUserByID,getItemDetail)
router.post("/:id/creatBell",verifyToken,createBell,getUserByID)
router.post("/:id/restore/:id",verifyToken,restorItem,getUserByID,getItemDetail)
router.post("/:id/creatItem",verifyToken,creatItem,getUserByID)


export default router
