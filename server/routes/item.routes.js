import express from "express"
import {
    getAllItems,
    getItemDetail,
    creatItem,
    updateItem,
    deletItem,
} from "../controllers/item.controller.js"

const router = express.Router()

router.route("/").get(getAllItems)
router.route("/:id").post(getItemDetail)
router.route("/").post(creatItem)
router.route("/:id").patch(updateItem)
router.route("/:id").delete(deletItem)

export default router