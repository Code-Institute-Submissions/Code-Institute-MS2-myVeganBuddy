const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonAPI = document.getElementById('buttonAPI');
const myRequest = new XMLHttpRequest();


buttonSubmit.addEventListener('click', findRecipe);


buttonAPI.addEventListener('click', makeRequest(printToHTML));


function findRecipe(data) {
    const searchString = searchBar.value.toLowerCase() + " " + "vegan";
    recipeList.innerHTML = searchString;
}

function printToHTML(data) {
    recipeList.innerHTML = data[0].image;
}

function makeRequest(cb) {
    myRequest.open('GET',"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1&ignorePantry=true");
    myRequest.setRequestHeader("x-rapidapi-key", "a");
    myRequest.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");


    myRequest.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
           cb(JSON.parse(myRequest.responseText));
        } else {
            console.log('An error occurred');
        }
    }


    myRequest.send()
};


