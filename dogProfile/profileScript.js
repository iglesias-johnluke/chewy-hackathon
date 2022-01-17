

var dogName = localStorage.getItem("current profile")
var profileHeader = document.querySelector('.dogtag h1')
var profileImage = document.querySelector('.dogtag img')

profileHeader.textContent = dogName
profileImage.src = '../images/'.concat(dogName).concat('.png')

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


dogName = localStorage.getItem("current profile")
dogTraitsObject = localStorage.getObj(dogName)
console.log("dogTraitsObject type",typeof dogTraitsObject)


var allBubbles = document.querySelectorAll('.ch')
allBubbles.forEach((bubble) => {
    if(bubble.id === "size"){
        bubble.innerHTML = dogTraitsObject[bubble.id]
    }if(bubble.id === "sheds"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "sheds"
        }else{
            bubble.innerHTML = "no shedding"
        }
    }if(bubble.id === "medical conditions"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "medical predispositions"
        }else{
            bubble.innerHTML = "no medical predisposition"
        }         
    }if(bubble.id === "loud okay"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "loud"
        }else{
            bubble.innerHTML = "not loud"
        }
    }if(bubble.id === "hypoallergenic"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "hypoallergenic"
        }else{
            bubble.innerHTML = "not hypoallergenic"
        }
    }if(bubble.id === "yard"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "prefers yard space"
        }else{
            bubble.innerHTML = "doesn't need yard"
        }
    }if(bubble.id === "good around small children"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "good around small children"
        }else{
            bubble.innerHTML = "not good around small children"
        }
    }if(bubble.id === "gets along with other"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "gets along with others"
        }else{
            bubble.innerHTML = "not very sociable"
        }

    }if(bubble.id === "protective"){
        if(dogTraitsObject[bubble.id] === "yes"){
            bubble.innerHTML = "protective"
        }else{
            bubble.innerHTML = "not protective"
        }

    }

})