const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex"
const buttonApi = document.getElementById('buttonApi');
const recipeList = document.getElementById('recipeList');
buttonApi.addEventListener('click', requestAPI);


function requestAPI() {

    var searchString = document.getElementById('searchBar').value;

    fetch(`${url}?limitLicense=true&offset=0&number=10&diet=vegan&includeIngredients=${searchString}&ranking=2&maxCalories=1500&maxFat=100&maxProtein=100&maxCarbs=100&fillIngredients=false&instructionsRequired=false&addRecipeInformation=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "13b8334a45mshc2f5b45765f960cp1ea18ajsnb4cf78ea6aab",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then((data) => renderResponse(data))
        .catch(err => {
            alert(err);
        });
}


function renderResponse(data) {
    let output = `<h2 class="title text-center">Results</h2>`;
    data = data.results;
    data.forEach(function(recipe) {
        output +=
            
            `<div class="col">
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text text-center">${recipe.summary}</p>
                        <div class="text-center">
                            <ul>
                                <li> Calories: ${recipe.calories}</li>
                                <li> Servings: ${recipe.servings} portion(s)</li>
                                <li> Time: ${recipe.readyInMinutes} minutes</li>
                            </ul>
                        </div>
                        </p>
                        <div class="text-center">
                            <a href="#" class="btn btn-danger" onclick="requestRecipe(${recipe.id})">Check it out</a>
                        </div>
                    </div>
                </div>
            </div>`
    });
    recipeList.innerHTML = output;
};

function requestRecipe(recipeId) {
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "x",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => alert(err));
};