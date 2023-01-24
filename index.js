homeScore = 0
guestScore = 0

document.getElementById("home-box").textContent = homeScore 
document.getElementById("guest-box").textContent = guestScore 



function add1home() {
    document.getElementById("home-box").textContent = homeScore+= 1
    
}


function add2home() { 
    document.getElementById("home-box").textContent = homeScore+= 2
    
}

function add3home() {
    document.getElementById("home-box").textContent = homeScore+= 3
}

function add1guest() {
    document.getElementById("guest-box").textContent = guestScore+= 1
}

function add2guest() {
    document.getElementById("guest-box").textContent = guestScore+= 2
}

function add3guest() {
    document.getElementById("guest-box").textContent = guestScore+= 3
}