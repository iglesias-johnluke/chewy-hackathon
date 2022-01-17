


const allDogNames = ["shih tzu", "basset hound", "bichon frise",
"doberman pinscher", "chihuahua", "standard schnauzer", "beagle",
"golden retriever", "miniature poodle", "bulldog"]

var topBreedData = {}

/*initializes breedData from local storage */
function setBreedData(){
    Storage.prototype.getObj = function(key) {
        return JSON.parse(this.getItem(key))
    }
    for(var key in localStorage){
        if(allDogNames.includes(key) ){
            topBreedData[key] = localStorage.getObj(key)
        }
    }
}

function displaySuggestions(){
    var suggestionContainers = document.querySelectorAll(".dog-suggestion")
    var containerIndex = 0

    for(var breedName in topBreedData){
        var img = document.createElement("img");
        img.src = "../images/".concat(breedName).concat('.png')
    
        suggestionContainers[containerIndex].appendChild(img)
        containerIndex++
    }
}

setBreedData()
displaySuggestions()