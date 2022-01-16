var sizeSelection, allergicSelection, shedsSelection, yardSelection, healthSelection,
loudSelection, getsAlongSelection, childrenSelection, protectiveSelection


/* dictionary mapping dog breeds as keys to values of dictionaries involving traits*/
const breedTraitsData = {
    "bulldog":{
        "size":"medium", "hypoallergenic":"no", "sheds":"yes", "protective":"yes",
        "yard":"yes", "medical conditions": "yes", "loud okay":"yes", "gets along with other":"yes",
        "good around small children":"yes"
        }
}

const pointsData = {"bulldog":0}

/*add a dog breed to breedTraitsData, initializes breed in breedPoints data */
function addBreed(breedName, size, isHypoallergenic, sheds, isProtective, needsYard,
                    hasMedicalConditions, isLoud, getsAlong, goodWithChildren){
    
    pointsData[breedName] = 0

    breedTraitsData[breedName] = {"size":size, "hypoallergenic":isHypoallergenic, "sheds":sheds, 
        "protective":isProtective,"yard":needsYard, "medical conditions": hasMedicalConditions, 
        "loud okay":isLoud, "gets along with other":getsAlong, 
        "good around small children":goodWithChildren}
}

/*limits only 1 checkbox to be checked for all preferences */
function singleCheck(){
    function groupSingleCheck(checkbox) {/*limits only 1 box checked per group */
        let checkboxes = document.getElementsByName(checkbox.getAttribute('name'));
        checkboxes.forEach((item) => {
            if (item !== checkbox) { item.checked = false; }
        });
    }
    allCheckboxes = document.querySelectorAll('input[type=checkbox]')
    allCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {groupSingleCheck(checkbox);})
        }

    );
}

/*handles when pet size, hypoallergenic, etc. boxes are left unchecked */
function handleUncheckedBoxes(){
    if( (sizeSelection = document.querySelector('input[name="size"]:checked')) != null){
        sizeSelection = sizeSelection.value
    }if( (allergicSelection = document.querySelector('input[name="hypoallergenic"]:checked')) != null){
        allergicSelection = allergicSelection.value
    }if( (shedsSelection = document.querySelector('input[name="sheds"]:checked')) != null){
        shedsSelection = shedsSelection.value
    }if( (yardSelection = document.querySelector('input[name="yard"]:checked')) != null){
        yardSelection = yardSelection.value
    }if( (healthSelection = document.querySelector('input[name="medical conditions"]:checked')) != null){
        healthSelection = healthSelection.value
    }if( (loudSelection = document.querySelector('input[name="loud okay"]:checked')) != null){
        loudSelection = loudSelection.value
    }if( (getsAlongSelection = document.querySelector('input[name="gets along with other"]:checked')) != null){
        getsAlongSelection = getsAlongSelection.value
    }if( (childrenSelection = document.querySelector('input[name="good around small children"]:checked')) != null){
        childrenSelection = childrenSelection.value
    }if( (protectiveSelection = document.querySelector('input[name="protective"]:checked')) != null){
        protectiveSelection = protectiveSelection.value
    }

}

/*returns array of 3 dog breeds with most points (descending order) 
according to user preferences*/
function getDogResultsArray(){
    dogsArray = []
    handleUncheckedBoxes()

    const userPreferences = {"size":sizeSelection, "hypoallergenic": allergicSelection, 
                        "sheds":shedsSelection, "protective":protectiveSelection,"yard":yardSelection, 
                        "medical conditions": healthSelection, "loud okay":loudSelection, 
                        "gets along with other":getsAlongSelection, 
                        "good around small children":childrenSelection}  

    /*loop thru all breed key value pairs, if breed trait matches user preference, 
    increment dogpoints */
    for(var breedName in breedTraitsData){
        currBreedTraitsMap = breedTraitsData[breedName]
        for(var trait in currBreedTraitsMap){
            if(userPreferences[trait] != null && userPreferences[trait] === currBreedTraitsMap[trait] ){
                pointsData[breedName]++
            }
        }
    }
    /*sortedPointsData is sorted mapping of index to array (breedName, points)*/
    const sortedPointsObject = Object.entries(pointsData).sort((a, b) => (a[1] > b[1] ? -1 : 1)).slice(0, 3)
    for(var keyIndex in sortedPointsObject){/*push top dogBreed names to dogsArray */
        dogsArray.push(sortedPointsObject[keyIndex][0])
    }
    console.log("top dogs", dogsArray)

    return dogsArray
}

addBreed("shih tzu", "small", "yes", "no", "yes", "no", "yes", "no", "yes", "yes")
addBreed("basset hound", "large", "no", "yes", "no", "yes", "yes", "yes", "yes", "yes")
addBreed("bichon frise", "small", "no", "no", "no", "yes", "no", "no", "yes", "yes")
addBreed("doberman pinscher", "large", "no", "yes", "yes", "yes", "yes", "no", "yes", "yes")
addBreed("chihuahua", "small", "no", "yes", "yes", "no", "no", "yes", "no", "no")
addBreed("standard schnauzer", "medium", "yes", "no", "yes", "yes", "no", "no", "no", "yes")
addBreed("beagle", "medium", "no", "yes", "yes", "no", "yes", "yes", "yes", "yes")
addBreed("golden retriever", "large", "no", "yes", "yes", "yes", "yes", "no", "yes", "yes")
addBreed("miniature poodle", "medium", "yes", "no", "yes", "no", "yes", "yes", "yes", "yes")
singleCheck()

const findDogButton = document.querySelector('#findDogButton')
findDogButton.addEventListener('click', getDogResultsArray)
