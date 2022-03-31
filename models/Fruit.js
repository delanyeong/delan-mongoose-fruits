const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    colour: { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;