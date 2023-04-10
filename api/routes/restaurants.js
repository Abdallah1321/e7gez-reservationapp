import express from "express";
import Restaurant from "../models/Restaurant.js";
import {
    countByCity,
    countByType,
    createRestaurant,
    deleteRestaurant,
    getRestaurant,
    getRestaurantTables,
    getRestaurants,
    updateRestaurant
} from "../controllers/restaurant.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createRestaurant)

//UPDATE
router.put("/:id", verifyAdmin, updateRestaurant)

//DELETE
router.delete("/:id", verifyAdmin, deleteRestaurant)

//GET
router.get("/find/:id", getRestaurant)

//GET ALL
router.get("/", getRestaurants)

router.get("/countByCity", countByCity)

router.get("/countByType", countByType)

router.get("/table/:id", getRestaurantTables)

export default router