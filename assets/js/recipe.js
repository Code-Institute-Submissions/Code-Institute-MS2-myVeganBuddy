

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
    rating = Math.round(data.spoonacularScore/10) * 10;
    // Creates variable with HTML elements to render on the page
        
    let recipeOutput = `
        <div class="row recipe-render">    
            <div class="col-12">
                <div class="image-wrapper">
                    <img src="${data.image}" class="img-fluid img-responsive rounded" alt="${data.title}">
                </div>
                <div class="title-wrapper text-center mt-5">
                    <h3 class="card-title recipe-title">${data.title}</h3>
                </div>
                <div class="icons-wrapper">
                    <div class="stars-outer">
                        <div class="stars-inner" style="width:${rating}%"></div>
                    </div>
                </div>
                <div class="recipe-info">
                    <ul class="list-group">
                        <li class="list-item"><i class="far fa-clock"></i> - ${data.readyInMinutes} minutes</li>
                        <li class="list-item"><i class="fas fa-thumbs-up"> - ${data.aggregateLikes}</i></li>
                        <li class="list-item"> WW SmartPoints - ${data.weightWatcherSmartPoints}</li> 
                    </ul>
                </div>
            </div>
        </div>`
    let macros = 
        `<div class="row">
            <div class="col-12">
                <div class="section-title text-center">
                    <h4 class> Macros: </h4><br>
                </div>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>
                                Nutrients
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Percentage of Daily Needs*
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Calories
                            </td>
                            <td>
                                ${nutrients[0].amount} kcal
                            </td>
                            <td>
                                ${nutrients[0].percentOfDailyNeeds}%
                            </td>
                        </tr>
                        <tr class="table-active">
                            <td>
                                Fat
                            </td>
                            <td>
                                ${nutrients[1].amount} grams
                            </td>
                            <td>
                                ${nutrients[1].percentOfDailyNeeds}%
                            </td>
                        </tr>
                        <tr class="table-success">
                            <td>
                                Carbs
                            </td>
                            <td>
                                ${nutrients[3].amount} grams
                            </td>
                            <td>
                                ${nutrients[3].percentOfDailyNeeds}%
                            </td>
                        </tr>
                        <tr class="table-warning">
                            <td>
                                Protein
                            </td>
                            <td>
                                ${nutrients[8].amount} grams
                            </td>
                            <td>
                                ${nutrients[8].percentOfDailyNeeds}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`

// Finds the method for the recipe
    let instructionSteps = data.analyzedInstructions[0].steps;
    let instructionOutput = 
   
    `   
    <div class="row">
    <div class="col-md-8 method-list"> 
        <h3 class="section-title"> Method: </h3>
        <ol>`

    instructionSteps.forEach(function(step) {
       
        instructionOutput +=

        `<li class="list-item">
            ${step.step}
        </li>`
    })

    instructionOutput = instructionOutput + 

    `
         </ol>
    </div>`

    // Accesses the ingredients property of the object
    let ingredients = data.extendedIngredients
    let ingredientOutput = `
    <div class="col-md-4 ingredient-list">
        <h2> Ingredients:</h2>
        <ul class=ingredient-detail>`
    // Loops through the ingredients and prints it to the page
    ingredients.forEach(function (ingredient) {
        ingredientOutput +=
           
        `<li class="list-item">${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`

    });
    // Re-defines the variable and adds the closing HTML tag
    ingredientOutput = ingredientOutput +
    
    `       </ul>
        </div>
    </div>`
    // Directs the variable to the html element
    var requestedRecipe = recipeOutput + instructionOutput + ingredientOutput + macros;
    localStorage.setItem('requestedRecipe', requestedRecipe);
    window.location.href = "recipe.html";
}

