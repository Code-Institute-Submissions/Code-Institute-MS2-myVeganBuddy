const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const buttonSubmit = document.getElementById('buttonSubmit');

buttonSubmit.addEventListener('click', findRecipe);

function findRecipe(data) {
    const searchString = searchBar.value.toLowerCase() + " " + "vegan";
    recipeList.innerHTML = searchString;
}

