const recipeList = document.getElementById('recipeList');
const searchBar = document.getElementById('searchBar');
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonAPI = document.getElementById('buttonAPI');
const myRequest = new XMLHttpRequest();

const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"

var queryString = {
    "number": "5",
    "ranking": "1",
    "ignorePantry": "false",
    "ingredients": searchIngredients()
};

buttonSubmit.addEventListener('click', searchIngredients);


buttonAPI.addEventListener('click', makeRequest(printToHTML));


function searchIngredients() {
    var searchString = searchBar.value.toLowerCase() + " " + "vegan";
    return searchString;
};

function printToHTML(data) {
    recipeList.innerHTML = data[0].title;
};

function makeRequest(cb) {
    myRequest.open('GET', url + queryString);
    myRequest.setRequestHeader("x-rapidapi-key", "a");
    myRequest.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");


    myRequest.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
           cb(JSON.parse(myRequest.responseText));
        } else {
            console.log(myRequest.responseText);
        }
    }


    myRequest.send()
};


