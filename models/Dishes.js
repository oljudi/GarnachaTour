const { model, Schema } = require("mongoose");


const dishSchema = new Schema(
  {
    name: String,
    img: String,
    description: String,
    ingredients: Array,
    spicyLevel: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Dish", dishSchema);