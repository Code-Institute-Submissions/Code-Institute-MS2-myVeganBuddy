
const buttonRes = document.getElementsByClassName('buttonApi')[0];

buttonRes.addEventListener('click',requestRefined);

function requestRefined() {
    recipeQuery = document.getElementById('recipe-form').value;
    ingredientQuery = document.getElementById('ingredient-form').value;
    allergens = document.getElementById('allergens').value;
    
     fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=true&offset=0&number=10&query=${recipeQuery}&diet=vegan&includeIngredients=${ingredientQuery}&intolerances=${allergens}&ranking=2&maxCalories=${maxCalories.value}&maxFat=${maxFat.value}&maxProtein=${maxProtein.value}&maxCarbs=${maxCarbs.value}&addRecipeInformation=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "13b8334a45mshc2f5b45765f960cp1ea18ajsnb4cf78ea6aab",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	    }
    })
        // Transform the response into a json object
        .then((response) => response.json())
        .then((data) => renderResponse(data))
        .catch(err => console.log(err));
}

function updateTextInput(node, val) {
    node.nextSibling.nextSibling.value = val
}

