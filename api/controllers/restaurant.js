import Restaurant from "../models/Restaurant.js";
import Table from "../models/Table.js";

export const createRestaurant = async (req, res, next) => {
  const newRestaurant = new Restaurant(req.body);

  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    next(err);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).json("Restaurant has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRestaurants = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const restaurants = await Restaurant.find({
      ...others,
      price: { $gt: min | 1, $lt: max || 99999 },
    }).limit(req.query.limit);
    res.status(200).json(restaurants);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Restaurant.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const fdCount = await Restaurant.countDocuments({ type: "FineDining" });
    const ffCount = await Restaurant.countDocuments({ type: "FastFood" });
    const orientalCount = await Restaurant.countDocuments({ type: "Oriental" });
    const sfCount = await Restaurant.countDocuments({ type: "Seafood" });
    const bfCount = await Restaurant.countDocuments({ type: "Breakfast" });

    res.status(200).json([
      { type: "FineDining", count: fdCount },
      { type: "FastFood", count: ffCount },
      { type: "Oriental", count: orientalCount },
      { type: "Seafood", count: sfCount },
      { type: "Breakfast", count: bfCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getRestaurantTables = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    const list = await Promise.all(
      restaurant.tables.map((table) => {
        return Table.findById(table);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next;
  }
};
