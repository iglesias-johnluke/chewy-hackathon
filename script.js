
const SIZE = "size", HYPOALLERGENIC = "hypoallergenic",
        SHEDS = "sheds", OWNER_HOURS_HOME = "hours home",
        YARD = "yard", MEDICAL_CONDITIONS = "medical conditions",
        LOUD = "is loud", GETS_ALONG = "gets along with other",
        SMALL_CHILDREN = "good around small children", YES="yes", NO="no"

/* dictionary mapping dog breeds as keys to values of dictionaries involving traits*/
const breedTraitsData = {
    "bulldog":{SIZE:"medium", HYPOALLERGENIC:YES, SHEDS:YES, OWNER_HOURS_HOME:4,
            YARD:YES, MEDICAL_CONDITIONS: YES, LOUD:YES, GETS_ALONG:YES, SMALL_CHILDREN:YES}
}

const pointsData = {"bulldog":0}

/*add a dog breed to breedTraitsData, initializes breed in breedPoints data */
function addBreed(breedName, size, isHypoallergenic, sheds, ownerHoursHome, needsYard,
                    hasMedicalConditions, isLoud, getsAlong, goodWithChildren){
    
    pointsData[breedName] = 0

    breedTraitsData[breedName] = {"size":size, "hypoallergenic":isHypoallergenic, "sheds":sheds, 
        "hours home":ownerHoursHome,"yard":needsYard, "medical conditions": hasMedicalConditions, 
        "is loud":isLoud, "gets along with other":getsAlong, 
        "good around small children":goodWithChildren}
}

addBreed("shitzu", "small", "yes", "no", 5, "no", "yes", "no", "yes", "yes")
addBreed("basset hound", "large", NO, YES, 6, YES, YES, YES, YES, YES)
console.log(breedTraitsData, pointsData)