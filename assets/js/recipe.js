


// Passes the ID property as a parameter to request the particular recipe and renders to the HTML placeholder element
function requestRecipe(recipeId) {

    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information?includeNutrition=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "13b8334a45mshc2f5b45765f960cp1ea18ajsnb4cf78ea6aab",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
     
    .then((response) => response.json())
        // passes the JSON object as a parameter of a rendering function
        .then((data) => renderRecipe(data))
        .catch((err) => alert(err));
};


function renderRecipe(data) {
    // access the nutrients property of the object
    let nutrients = data.nutrition.nutrients;
    // Creates variable with HTML elements to render on the page
    let recipeOutput = `
        <div class="row">    
            <div class="col-12 text-center">
                <div class="card flex-row flex-wrap">
                    <div class="card-header border-0 image-wrapper">
                        <img src="${data.image}" class="card-img-top img-thumbnail" alt="${data.title}">
                    </div>
                    <div class="card-block px-2 text-center">
                        <h2 class="card-title recipe-title">${data.title}</h2>
                        <p><strong>Summary:</strong>${data.summary}</p><br>
                    </div>
                        <div class="section-title text-center>
                            <h3 class="text-center"> Macros: </h3><br>
                        </div>
                        <ul class="recipe-detail">
                            <li>Calories: ${nutrients[0].amount} kcal</li>
                            <li>Fat: ${nutrients[1].amount} grams</li>
                            <li>Carbs: ${nutrients[3].amount} grams</li>
                            <li>Protein: ${nutrients[8].amount} grams</li>
                        </ul>
                    </div>
                </div
            </div>
        </div>`

    // Accesses the ingredients property of the object
    let ingredients = data.extendedIngredients
    let ingredientOutput = `
    <h2> Ingredients:</h2>
    <ul class=ingredient-detail>`
    // Loops through the ingredients and prints it to the page
    ingredients.forEach(function (ingredient) {
        ingredientOutput +=
           
        `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`

    });
    // Re-defines the variable and adds the closing HTML tag
    ingredientOutput = ingredientOutput + `</ul>`
    // Directs the variable to the html element
    let instructions = data.instructions;
    let instructionOutput = 
    
        `<div> 
            <h3> Instructions: </h3>
            <p>${instructions}</p>
        </div>`

    recipeRender.innerHTML = recipeOutput + ingredientOutput + instructionOutput;
}
