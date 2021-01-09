
// Declaring constants
const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex"
const buttonApi = document.getElementById('buttonApi');
const recipeList = document.getElementById('recipeList');
const recipeRender = document.getElementById('recipeRender');

// Declaring event listeners
buttonApi.addEventListener('click', requestAPI);



function requestAPI() {
    // Gets the search query and passes as a parameter to the Request
    var searchString = document.getElementById('searchBar').value;

    fetch(`${url}?limitLicense=true&offset=0&number=10&diet=vegan&includeIngredients=${searchString}&ranking=2&maxCalories=1500&maxFat=100&maxProtein=100&maxCarbs=100&fillIngredients=false&instructionsRequired=false&addRecipeInformation=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        // Transform the response into a json object
        .then((response) => response.json())
        .then((data) => renderResponse(data))
        .catch(err => alert(err));
}

// Renders the JSON object in the HTML placeholder element
function renderResponse(data) {
    let output = `
    <h2 class="title text-center">Results</h2><br>
    <div class="row">`
    // Accesses the array
    data = data.results;
    // Loops through the array of recipes and renders them separately 
    data.forEach(function(recipe) {
        output +=
                `
                <div class="col-sm-12 col-md-3">
                    <div class="card">
                        <img src="${recipe.image}" class="card-img-top img-thumbnail" alt="${recipe.title}">
                        <h5 class="card-header text-center">${recipe.title}</h5>
                        <div class="card-body">
                            <p class="card-text text-center">${recipe.summary}</p>
                            <div class="text-center">
                                <ul>
                                    <li> Calories: ${recipe.calories}</li>
                                    <li> Servings: ${recipe.servings} portion(s)</li>
                                    <li> Time: ${recipe.readyInMinutes} minutes</li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <a href="#" class="btn btn-danger" onclick="requestRecipe(${recipe.id})">Check it out</a>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    // Renders the above template into the target div element
    recipeList.innerHTML = output;
};


// Passes the ID property as a parameter to request the particular recipe and renders to the HTML placeholder element
function requestRecipe(recipeId) {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information?includeNutrition=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        // passes the JSON object as a parameter of a rendering function
        .then((data) => renderRecipe(data))
        .catch((err) => alert(err));
};


function renderRecipe(data){
    // access the nutrients property of the object
    let nutrients = data.nutrition.nutrients; 
    // Creates variable with HTML elements to render on the page
    let recipeOutput =  `
    <div class="row">    
        <div class="col-12 text-center">
            <img src="${data.image}" class="img-thumbnail" alt="${data.title}">
            <h2>${data.title}</h2>
        </div>
        <p><strong>Summary:</strong>${data.summary}</p><br>
        <h3 class="text-center"> Macros: </h3><br>
        <ul class="recipe-detail">
            <li>Calories: ${nutrients[0].amount} kcal</li>
            <li>Fat: ${nutrients[1].amount} grams</li>
            <li>Carbs: ${nutrients[3].amount} grams</li>
            <li>Protein: ${nutrients[8].amount} grams</li>
        </ul>
    </div>`
    // Accesses the ingredients property of the object
    let ingredients = data.extendedIngredients
    let ingredientOutput = `
    <h2> Ingredients:</h2>
    <ul class=ingredient-detail>`
    // Loops through the ingredients and prints it to the page
    ingredients.forEach(function(ingredient) {
        ingredientOutput +=
            `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`
         
    });
    // Re-defeines the variable and adds the closing HTML tag
    ingredientOutput = ingredientOutput + `</ul>`
    // Directs the variable to the html element
   recipeList.innerHTML = recipeOutput + ingredientOutput;
}