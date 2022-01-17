

var dogName = localStorage.getItem("current profile")
var profileHeader = document.querySelector('.dogtag h1')
var profileImage = document.querySelector('.dogtag img')

profileHeader.textContent = dogName
profileImage.src = '../images/'.concat(dogName).concat('.png')
