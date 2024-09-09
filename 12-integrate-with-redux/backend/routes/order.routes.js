const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const mongoose = require("mongoose");

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
  {
    $lookup: {
      from: "products",
      localField: "products.product",
      foreignField: "_id",
      as: "product_array",
    },
  },
  {
    $addFields: {
      products: {
        $map: {
          input: "$products",
          as: "inside_product",
          in: {
            $mergeObjects: [
              "$$inside_product",
              {
                product: {
                  $arrayElemAt: [
                    "$product_array",
                    {
                      $indexOfArray: [
                        "$product_array._id",
                        "$$inside_product.product",
                      ],
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    $project: {
      product_array: 0,
    },
  },
];

const findOnePipeline = (id) => [
  {
    $match: {
      _id: new mongoose.Types.ObjectId(id),
    },
  },
  ...pipeline,
];

router.get("/", async (req, res) => {
  console.log("Find All Order");
  try {
    const result = await Order.aggregate(pipeline);
    res.json({ rows: result });
  } catch (error) {
    console.error(error?.message);
    res.status(404).json({ err: error });
  }
});

router.get("/:id", async (req, res) => {
  console.log("Find One Order");
  try {
    const result = await Order.aggregate(findOnePipeline(req?.params?.id));
    res.json(result?.[0]);
  } catch (error) {
    console.error(error?.message);
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
