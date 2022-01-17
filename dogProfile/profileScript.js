
var dogName = localStorage.getItem("current profile")
var profileHeader = document.querySelector('.dogtag h1')
var profileImage = document.querySelector('.dogtag img')

profileHeader.textContent = dogName
profileImage.src = '../images/'.concat(dogName).concat('.png')


document.getElementById("size").innerHTML = "size";
document.getElementById("shedding").innerHTML = "shedding";
document.getElementById("heathIssues").innerHTML = "heathIssues";
document.getElementById("loud").innerHTML = "size";
document.getElementById("hypoallergenic").innerHTML = "size";
document.getElementById("yard").innerHTML = "size";
document.getElementById("goodKids").innerHTML = "size";
document.getElementById("goodOthers").innerHTML = "size";
document.getElementById("protective").innerHTML = "size";


