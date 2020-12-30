const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
let recipes = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    });

console.log(searchString);