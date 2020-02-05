const { model, Schema } = require("mongoose");
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    colony: {
      type: String,
      enum: ['Del Valle', 'La Roma', 'SantaFe']
    },
    price: {
      default: '50-250',
      enum: ['50-250','260-450','+500'],
      type: String
    },
    spicy: {
      type: String,
      default: 'nope',
      enum: ['superhot','hot', 'medium', 'nope']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = model("User", userSchema);