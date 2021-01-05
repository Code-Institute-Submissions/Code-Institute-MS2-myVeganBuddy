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
    let output = `<h2 class="title">Results</h2>`;
    data = data.results;
    data.forEach(function(recipe) {
        output +=
        `<ul class="list-group">
            <li class="list-group-item">ID: ${recipe.id}</li>
            <li class="list-group-item">Name: ${recipe.title}</li>
            <li class="list-group-item">Picture: <img class="img-thumbnail" src="${recipe.image}"</img></li>
        <ul>`;

    })

    document.getElementById('recipeList').innerHTML = output;
};
