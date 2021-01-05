const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch"



const buttonApi = document.getElementById('buttonApi');


buttonApi.addEventListener('click',requestAPI);



function requestAPI () {
    
    var searchString = document.getElementById('searchBar').value;

    fetch(`${url}?diet=vegan&includeIngredients=${searchString}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a",
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
        `<div class="card" style="width: 18rem;">
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Check it out</a>
                </div>
        </div>`
       
    })

    document.getElementById('recipeList').innerHTML = output;
};

