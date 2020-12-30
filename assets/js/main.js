const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const buttonSubmit = document.getElementById('buttonSubmit');

buttonSubmit.addEventListener('click', myFunction);

function myFunction(data) {
    const searchString = searchBar.value;
    console.log(searchString);
}


