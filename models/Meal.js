const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema(
    {
        mealName: {
            type: String,
            required: [true, "Please enter the name of your meal."]
        },
        servings: {
            type: Number,
            required: [true, "Please the number of servings being frozen."]
        },
        date: {
            type: Number,
            required: [true, "Please enter the date this meal was cooked."]
        },
        user: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
})

    const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;