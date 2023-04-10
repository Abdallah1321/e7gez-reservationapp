import express from "express";
import {verifyAdmin} from "../utils/verifyToken.js";
import {createTable, deleteTable, getTable, updateTable, getTables, updateTableAvailability} from "../controllers/table.js";

const router = express.Router()

//CREATE
router.post("/:restaurantid", verifyAdmin, createTable)

//UPDATE
router.put("/:id", verifyAdmin, updateTable)
router.put("/availability/:id", updateTableAvailability)

//DELETE
router.delete("/:id/:restaurantid", verifyAdmin, deleteTable)

//GET
router.get("/:id", getTable)

//GET ALL
router.get("/", getTables)

export default router
