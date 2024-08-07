const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    date: Date,
    products: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
    user: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", Order);
