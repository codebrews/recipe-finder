const express = require('express');
const fs = require('fs');
const axios = require('axios').default;

const router = express.Router();

const key = fs.readFileSync('private/key.txt', 'utf-8');
const requestURL = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${key}&minProtein=50&maxCalories=800&number=10`

let recipes;

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(requestURL)
  .then((response) => {
    recipes = response.data;
  });
  res.render('index', { title: 'food', data: recipes });
});

module.exports = router;
