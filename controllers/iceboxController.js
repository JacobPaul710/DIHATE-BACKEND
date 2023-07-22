const Meal = require('../models/Meal');

get_icebox = async (req,res) => {
    try{
        const userID = req.body.id
        const test = res.json(await Meal.find({user: userID }));
    }
    catch (err) {
        console.log(err);
    }
}

new_meal = async (req, res) => {
    try {
        const user = req.body.id;
        console.log({ user })
        const { mealName, servings, date } = req.body;
        await Meal.create({ mealName, servings, date, user }) 
        res.send('Created');
    }
    catch (error) {
        console.log(error);
    }
}

delete_meal = async (req, res) => {
    try {
        const { id } = req.params
        await Meal.findByIdAndDelete(id)
        res.send('Deleted');
    } catch (error) {
        console.log(error);
    }
}

edit_meal = async (req, res) => {
    try {
        const { id } = req.params
        const { mealName, servings, date } = req.body;
        await Meal.findByIdAndUpdate(id, { mealName, servings, date })
        res.send('Updated')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { get_icebox, new_meal, delete_meal, edit_meal }
