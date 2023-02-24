
import { queryFoods, fetchFood } from '../services/fdc-api.js';

const ingredientSearch = document.querySelector('#ingredient-lookup input[type=text]');
const submitButton = document.querySelector('#ingredient-lookup input[type=submit]');
const ingredientList = document.querySelector('#ingredient-list');

submitButton.addEventListener('click', () => {
    queryFoods(ingredientSearch.value).then(results => {
        ingredientList.innerHTML = JSON.stringify(results);
    });
});
