
function getResult() {
    var searchResult = document.getElementById('search-bar').value;
    var result = document.getElementById('result').value;
    
    if (searchResult.length < 3) {
        result.textContent = "Error"
    } else {
        result.textContent(searchResult)
    }
};