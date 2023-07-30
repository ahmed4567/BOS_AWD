import express  from "express";
import {
    creatUser,getAllUsers,getUserByID
} from "../controllers/user.controller.js"

const router = express.Router()

router.route("/").get(getAllUsers)
router.route("/").post(creatUser)
router.route("/:id").get(getUserByID)

export default router
