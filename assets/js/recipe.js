
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
    let calPerPortion = nutrients[0].amount/data.servings;
    let recipeOutput = `
        <div class="row recipe-render">    
            <div class="col-sm-12 col-md-6 recipe-card">
                <div class="card card-recipe">
                    <div class="image-wrapper">
                        <img src="${data.image}" class="card-img-top img-fluid img-responsive rounded" alt="${data.title}">
                    </div>
                    <div class="card-header">
                        <div class="title-wrapper text-center">
                                <h4 class="card-title section-title">${data.title}</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="md-v-line"></div>
                                <div class="stars-outer">
                                    <div class="stars-inner" style="width:${rating}%"></div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><i class="far fa-clock"></i> - ${data.readyInMinutes} minutes
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><i class="fas fa-thumbs-up"></i> - ${data.aggregateLikes} likes
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><i class="fas fa-cookie-bite"></i> - ${calPerPortion.toFixed(1)} kcal per portion
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><i class="fas fa-weight"></i> WW SmartPoints - ${data.weightWatcherSmartPoints} points
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><i class="fas fa-users"></i> - ${data.servings} portion(s)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
    
    // How to create list groups with icons - Code found on https://mdbootstrap.com/snippets/jquery/mdbootstrap/949128#html-tab-view    
        let macros = 

        `   <div class="col-sm-12 col-md-6">
                <div class="d-none d-md-block">
                    <div class="card text-center ">
                        <div class="card-header">
                            <div class="title-wrapper text-center">
                                <h4 class="section-title"> Recommendation of the day: </h4>
                            </div>
                        </div>
                        <div class="card-body" id="randomRecipeWrapper"></div>
                    </div>
                </div>
                <div class="card text-center nutritional-info">
                    <div class="card-header">
                        <div class="title-wrapper text-center">
                            <h4 class="section-title"> Nutritional Information </h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="md-v-line"></div> - Fat: ${round(nutrients[1].amount/data.servings,1)} grams per portion
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div> - Carbs: ${round(nutrients[3].amount/data.servings,1)} grams per portion
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div> - Protein: ${round(nutrients[8].amount/data.servings,1)} grams per portion
                            </li>
                            <li class="list-group-item">
                                <div class="md-v-line"></div><button type="button" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#table-collapse">Full List of Nutrients</button><br><i class="fas fa-arrow-circle-down fa-2x"></i>
                            </li>
                        </ul>
                    </div>  
                </div>
                <table class="table table-sm table-hover collapse" id="table-collapse">
                    <thead class="table-light">
                        <tr>
                            <th>
                                Nutrients
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                % of Daily Needs*
                            </th>
                        </tr>
                    </thead>
                    <tbody>`
    nutrients.forEach(function (nutrient) {
        if (nutrient.amount.toFixed(3) == 0) {
            macros += ""
        } else {
            macros +=

            `<tr>
                <td>
                    ${nutrient.title}
                </td>
                <td>
                    ${round(nutrient.amount/data.servings,2)} ${nutrient.unit}
                </td>
                <td>
                    ${round(nutrient.percentOfDailyNeeds/data.servings,2)}%
                </td>
            </tr>`
            }
    });

    macros = macros + 
            `       </tbody>
                </table>
            </div>
        </div>        
    </div>`


// Finds the method for the recipe
    let instructionSteps = data.analyzedInstructions[0].steps;
    let instructionOutput = 
   
    `   
    <div class="col-sm-12 col-md-8 order-md-1 method-list"> 
        <h4 class="section-title"> Method: </h4>
        <ol class="step-list">`

    instructionSteps.forEach(function(step) {
       
        instructionOutput +=

        `<li class="list-item">
             ${step.step}
        </li>`
    })

    instructionOutput = instructionOutput + 

    `
            </ol>
        </div>
    </div>`

    // Accesses the ingredients property of the object
    let ingredients = data.extendedIngredients
    let ingredientOutput = `
    <div class="row method-ingredients">
        <div class="col-sm-12 col-md-4 order-md-12 ingredient-list">
            <h4 class="section-title"> Ingredients:</h4>
            <ul class="ingredient-detail">`
    // Loops through the ingredients and prints it to the page
    ingredients.forEach(function (ingredient) {
        
        if (ingredient.measures.us.amount.toFixed(1) < 1) {

            ingredient.amount = decimalToFraction(ingredient.measures.us.amount).display;
            
        } else {
            ingredient.amount = Math.round(ingredient.amount);
        }

        ingredientOutput +=

        `<li class="list-item">${ingredient.amount} ${ingredient.measures.us.unitShort} ${ingredient.name}</li>`
    });
    // Re-defines the variable and adds the closing HTML tag
    ingredientOutput = ingredientOutput +
    
    `       </ul>
        </div>`
    // Directs the variable to the html element
    var requestedRecipe = recipeOutput + macros + ingredientOutput + instructionOutput; // Swapping column orders for different screen sizes [How to Reorder Columns with Bootstrap 4 Order Classes] - Code found on: https://bootstrapcreative.com/bootstrap-push-pull-column-ordering-tutorial/
    localStorage.setItem('requestedRecipe', requestedRecipe);
    window.location.href = "recipe.html";
}


// How to round integers with decimal precision - [Rounding Decimals in JavaScript] code found on: https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


// How to transform integers with decimal points into fractions - code found on: https://gist.github.com/redteam-snippets/3934258
function gcd(a, b) {
	return (b) ? gcd(b, a % b) : a;
}
var decimalToFraction = function (_decimal) {
    if (_decimal == parseInt(_decimal)) {
        return {
            top: parseInt(_decimal),
            bottom: 1,
            display: parseInt(_decimal) + '/' + 1
        };
    }
    else {
        var top = _decimal.toString().includes(".") ? _decimal.toString().replace(/\d+[.]/, '') : 0;
        var bottom = Math.pow(10, top.toString().replace('-','').length);
        if (_decimal >= 1) {
            top = +top + (Math.floor(_decimal) * bottom);
        }
        else if (_decimal <= -1) {
            top = +top + (Math.ceil(_decimal) * bottom);
        }

        var x = Math.abs(gcd(top, bottom));
        return {
            top: (top / x),
            bottom: (bottom / x),
            display: (top / x) + '/' + (bottom / x)
        };
    }
};


function getRandomRecipe() {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegan", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "fe8f971646msh9a61d136e93d8afp1bee14jsn2077cab49339",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	    }
    
    })
        .then((response) => response.json())
        .then((data) => renderRandom(data))
        .catch((err) => alert(err));
};

function renderRandom(data) {
    
    data = data.recipes[0];
    let randomRecipe = 

        `   
        <div class="img-wrapper random-recipe">
            <img src="${data.image}" class="card-img-top img-thumbnail" alt="${data.title}">
        </div>
        <h5 class="card-title">${data.title}</h5>
        <div class="text-center">
            <ul class="icon-list">
                <li><i class="far fa-clock"></i><strong> ${data.readyInMinutes} minutes</strong></li>
                <li><i class="fas fa-thumbs-up"></i><strong> ${data.aggregateLikes} likes</strong></li>
                <li><i class="fas fa-users"></i><strong> ${data.servings} portion(s)</strong></li>
            </ul>
        </div>
        <div class="text-center">
            <button href="recipe.html" target="_blank" class="btn btn-secondary" onclick="requestRecipe(${data.id})">Try me!</button>
        </div>`

    localStorage.setItem('randomRecipe', randomRecipe);
}

function fetchRandom() {
    let randomRecipeWrapper = document.getElementById('randomRecipeWrapper')
    let randomWrapper = document.getElementById('randomRecipe-sm');
    randomWrapper.innerHTML = randomRecipeWrapper.innerHTML + `</div>`

    document.getElementById('random-header').style.display = "none"
}