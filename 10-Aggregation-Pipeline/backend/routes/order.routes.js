const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

const pipeline = [
  {
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "user",
    },
  },
  {
    $set: {
      user: { $arrayElemAt: ["$user", 0] },
    },
  },
];

router.get("/", async (req, res) => {
  console.log("Find All Order");
  try {
    const result = await Order.aggregate(pipeline);
    res.json(result);
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.get("/:id", async (req, res) => {
  console.log("Find All Order");
  try {
    const result = await Order.findById(req?.params?.id).populate(
      "products.product"
    );
    res.json(result);
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.post("/", async (req, res) => {
  console.log("Create Product Body", req.body);
  const newUser = new Order(req.body);
  try {
    await newUser.save({});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ err: error });
  }
});

router.put("/:id", async (req, res) => {
  console.log("Update Order" + req?.params?.id);
  try {
    await Order.findByIdAndUpdate(req?.params?.id, { $set: req.body });
    res.status(202).json({ success: true });
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.delete("/:id", async (req, res) => {
  console.log("Delete Order" + req?.params?.id);
  try {
    await Order.findByIdAndDelete(req?.params?.id);
    res.status(204).json({});
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

module.exports = router;
