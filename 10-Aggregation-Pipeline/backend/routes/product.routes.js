const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  console.log("Find All Products");
  try {
    const result = await Product.find();
    res.json({ rows: result });
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.get("/:id", async (req, res) => {
  console.log("Find All Products");
  try {
    const result = await Product.findById(req?.params?.id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

router.post("/", async (req, res) => {
  console.log("Create Product Body", req.body);
  const newUser = new Product(req.body);
  try {
    await newUser.save({});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ err: error });
  }
});

router.delete("/:id", async (req, res) => {
  console.log("Delete Products" + req?.params?.id);
  try {
    await Product.findByIdAndDelete(req?.params?.id);
    res.status(204).json({});
  } catch (error) {
    res.status(404).json({ err: error });
  }
});

module.exports = router;
