
// Declaring constants
const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex"

let wLocation = window.location;

if (wLocation.toString().includes('index.html')) {
    const buttonApi = document.getElementById('buttonApi');
    const searchBar = document.getElementById('searchBar');
    const searchNav = document.getElementById('searchNav');
    
    // Declaring event listeners
    buttonApi.addEventListener('click', function() {
        requestAPI(searchBar)
    });
}

const buttonRes = document.getElementById('buttonRes');
const recipeQuery = document.getElementById('recipe-form');
const ingredientQuery = document.getElementById('ingredient-form');
const allergens = document.getElementById('allergens');
const form = document.forms[1];

// Declaring event listeners
//buttonRes.addEventListener('click',requestRefined);
buttonRes.addEventListener('click',handleSubmit);


// Sliders
var maxCalories = document.getElementById('maxCalories');
var maxProtein = document.getElementById('maxProteinOutput');
var maxFat = document.getElementById('maxFatOutput');
var maxCarbs = document.getElementById('maxCarbsOutput');
maxSliders = [maxProtein, maxFat, maxCarbs];




function requestAPI(search) {
    // Gets the search query and passes as a parameter to the Request
    
    var searchString = search.value;
    
    fetch(`${url}?limitLicense=true&offset=0&number=12&diet=vegan&includeIngredients=${searchString}&ranking=2&maxCalories=1500&maxFat=100&maxProtein=100&maxCarbs=100&fillIngredients=false&instructionsRequired=false&addRecipeInformation=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "13b8334a45mshc2f5b45765f960cp1ea18ajsnb4cf78ea6aab",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        // Transform the response into a json object
        .then((response) => response.json())
        .then((data) => renderResponse(data))
        .catch((err) => errorHandling(err));
}

function requestRefined(asString) {

     fetch(`${url}?limitLicense=true&offset=0&number=12&${asString}&ranking=2&maxCalories=${maxCalories.value}&maxFat=${maxFat.value}&maxProtein=${maxProtein.value}&maxCarbs=${maxCarbs.value}&addRecipeInformation=true`, {
	"method": "GET",
	 "headers": {
            "x-rapidapi-key": "13b8334a45mshc2f5b45765f960cp1ea18ajsnb4cf78ea6aab",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        // Transform the response into a json object
        .then((response) => response.json())
        .then((data) => renderResponse(data))
        .catch(err => errorHandling(err));
}

function sliderOutput(sliders){
    sliders.forEach(function(slider) {
        val = slider.value
        slider.nextSibling.nextSibling.value = val;
    })
}



// Renders the JSON object in the HTML placeholder element
function renderResponse(data) {
    // Accesses the array
    data = data.results;
    // Error handling
    if (data.length === 0) {
        if (resultModal) {
            resultModal.toggle()
        } else {
        var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
        resultModal.toggle()
        }
        // How to early break of a function - code found in: [https://stackoverflow.com/questions/3330193/early-exit-from-function];
        return;
    } else {
        let output = `
        <h2 class="title text-center">Results</h2><br>
        <div class="row">`
            // Loops through the array of recipes and renders them separately 
            data.forEach(function (recipe) {
                // Rounds the rating to fill the stars uniformly
                rating = Math.round(recipe.spoonacularScore/10) * 10; 
                // Creates HTML element
                output +=
                    `
                    <div class="col-sm-12 col-md-3">
                        <div class="card card-render">
                            <img src="${recipe.image}" class="card-img-top img-thumbnail" alt="${recipe.title}">
                            <h4 class="card-header text-center section-title">${recipe.title}</h4>
                            <div class="card-body">
                                <div class="text-center">
                                    <div class="stars-outer">
                                        <div class="stars-inner" style="width:${rating}%"></div>
                                    </div>
                                    <ul class="mt-3">
                                        <ul class="icon-list">
                                            <li><i class="fas fa-users"></i><strong> ${recipe.servings} portion(s)</strong></li>
                                            <li><i class="far fa-clock"></i><strong> ${recipe.readyInMinutes} minutes</strong></li>
                                            <li><i class="fas fa-cookie-bite"></i><strong> ${recipe.calories} kcal</strong></li>
                                        </ul>
                                        <div class="mt-3">
                                            <li><strong>Protein: ${recipe.protein}</strong></li>
                                            <li><strong>Fat: ${recipe.fat}</strong></li>
                                            <li><strong>Carbs: ${recipe.carbs}</strong></li>
                                        </div>
                                    </ul>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-secondary" onclick="requestRecipe(${recipe.id})">Cook me!</button>
                                </div>
                            </div>
                        </div>
                    </div>`
        });
    // Renders the above template into the target div element
    var recipeResult = output;
    }
    localStorage.setItem('recipeResult', recipeResult)
    window.location.href = "result.html";
};


// Handler functions

function handleSubmit(event,cb) {
    event.preventDefault();
    const formData = new FormData(event.path[2]);
    const data = [...formData.entries()];
    const asString = new URLSearchParams(formData).toString();
    console.log(asString);
    
}

function errorHandling(err) {
    alert(err);
}
