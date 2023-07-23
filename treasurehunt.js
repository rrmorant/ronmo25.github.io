var carLocation = Math.floor(Math.random() * 9)
var policeLocation = Math.floor(Math.random() * 9)

const treasure = (location) => {
    if(location === carLocation) {
        document.getElementById(location).innerHTML = "🚗"
        alert("You Win!")
    } else if(location === policeLocation) {
        document.getElementById(location).innerHTML = "🚔" 
        alert("Gameover!")
    } else {
        document.getElementById(location).innerHTML = "🚛"
        alert("Keep searching")
    
    }
    }