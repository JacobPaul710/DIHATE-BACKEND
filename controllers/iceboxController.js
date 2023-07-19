const Meal = require('../models/Meal');

get_icebox = async (req,res) => {
    // console.log(req.cookies)
    // console.log(req.body.id, "@@@@@@")
    // res.send('hello world')
    try{
        const userID = req.body.id
        const test = res.json(await Meal.find({user: userID }));
        // console.log(test);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { get_icebox }


// const meals =[{
//     id: 1,
//     servings: 5,
//     mealName: 'spaghetti',
//     date: '01/22/1990'
// },
// {
//     id: 2,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 3,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 4,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 5,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 6,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 7,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 8,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// {
//     id: 9,
//     servings: 7,
//     mealName: 'lasagna',
//     date: '2/11/2000'
// },
// ]