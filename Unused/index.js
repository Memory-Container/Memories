function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
let Active = [0, 5]
async function show(X, Y = 0) {
    if (X == Active[Y]) {
        return;
    }
    let button = document.getElementsByClassName("Grid-E")
    //Navigation Class Setup
    button[Active[Y]].className = "Grid-E"
    button[X].className = "Grid-E glow"
    //Set Pos 1 and 4
    if (X == 0 || X == 4) {
        document.getElementById(11).style.opacity = "0"
    } else {
        document.getElementById(11).style.opacity = "1"
    }
    scroll(0)
    fadeOut(Active[Y])
    fadeIn(X)
    if (X != Active[Y]) {
        Active[Y] = X
    }
}
let settingsON = false
function settings() {
    let setting = document.getElementsByClassName("MBody")
}
function scroll(X = 0) {
    let Y = document.documentElement.scrollTop, Count = 0
    let interval = setInterval(function() {
        if (Y >= X) 
        {
           Count++
           if  (Count > 10) {
            clearInterval(interval);
           }
           console.log(Count)
           Y = (Y+X)/2
           document.documentElement.scrollTop = Y
        } 
        else 
        {
           clearInterval(interval);
        }
    }, 50);
}
function fadeOut(element) {
    let x = document.getElementById(element),
        opacity = Number(x.style.opacity)
    let interval = setInterval(function() {
            if (opacity > -0.2) 
            {
               opacity -= 0.15
               x.style.opacity = String(opacity)
            } 
            else 
            {
               x.style.opacity = '0'
               x.style.display = 'none'; // Hide the element
               clearInterval(interval); // Stop the interval when opacity reaches 0
            }
        }, 50);
}
function fadeIn(element) {
    let x = document.getElementById(element),
        opacity = Number(x.style.opacity)
    let interval = setInterval(function() {
            if (opacity < 1.2) 
            {
                x.style.display = '';
                console.log(opacity)
                opacity += 0.15
                x.style.opacity = String(opacity)
            } 
            else 
            {
                x.style.display = '';
                x.style.opacity = 1
                clearInterval(interval); // Stop the interval when opacity reaches 1
            }
        }, 50);
}
let navStateON = true, navBottom = false, navSettingsON = false;
let nav = document.getElementsByClassName("Grid")
let navStateTxt = document.getElementById("displayNav")
let navPosTxt = document.getElementById("navPos")
function displaySettings() {
    navSettingsON = !navSettingsON
    if (!navSettingsON) {
        fadeIn(238)
    } else {
        fadeOut(238)
    }
}
function displayNav() {
    navStateON = !navStateON
    //console.log(navStateON)
    if (!navStateON) {
        //console.log("OFF")
        fadeOut(19)
        navStateTxt.textContent = "OFF"
    } else {
        //console.log("ON")
        fadeIn(19)
        navStateTxt.textContent = "ON"
    }
}
function navPos() {
    navBottom = !navBottom
    if (navBottom) {
        document.getElementById(19).style.width = "98.5%"
        nav[0].style.position = "fixed"
        nav[0].style.top = "92%"
        navPosTxt.textContent = "BOTTOM"
    } else {
        document.getElementById(19).style.width = "99.5%"
        nav[0].style.position = "relative"
        nav[0].style.top = "2%"
        navPosTxt.textContent = "TOP"
    }
}