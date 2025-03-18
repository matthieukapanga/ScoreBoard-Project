let home= 0
let away = 0
let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")


function onePt(){
   home += 1
   homeScore.innerText = home
   console.log(home)
}
function twoPt(){
    home += 2
    homeScore.innerText = home
    console.log(home)
}
function threePt(){
    home += 3
    homeScore.innerText = home
    console.log(home)
}

function onePts(){
   away += 1
   awayScore.innerText = away
   console.log(away)
}
function twoPts(){
    away += 2
     awayScore.innerText = away
   console.log(away)
}
function threePts(){
    away += 3
     awayScore.innerText = away
   console.log(away)
}