const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonAPI = document.getElementById('buttonAPI');
const myRequest = new XMLHttpRequest();

buttonSubmit.addEventListener('click', findRecipe);


buttonAPI.addEventListener('click', makeRequest);


function findRecipe(data) {
    const searchString = searchBar.value.toLowerCase() + " " + "vegan";
    recipeList.innerHTML = searchString;
}

function makeRequest() {
    myRequest.open('GET',"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1&ignorePantry=true");
    myRequest.setRequestHeader("x-rapidapi-key", "a");
    myRequest.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");

    var data = JSON.parse(ourRequest.responseText);

    myRequest.onload = function() {
        if (myRequest.status != 200) {
            console.log('An error occurred');
        } else {
            console.log(myRequest.responseText);
        }
    }

    myRequest.send()
};


function printToHTML(data);