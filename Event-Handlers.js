//See the order of Tab in Navigation
let Current_Tab = 5,
    Current_Slide = [0,1,1,1,1,1,1,1,1],
    Available_Slide = [0,1,2,5,3,10,10,2,1],
    AnimationInProgress = false,
    NavigationState = false,
    Navigation = document.getElementsByClassName("Navigation-Bar")[0],
    NavButton = document.getElementsByClassName("Navigation-Switch")[0],
    AvailableSlideCounter = document.getElementById("AvailableSlide"),
    SlideCounter = document.getElementById("SlideCounter")
function NavigationSwitch() {
    NavigationState = !NavigationState
    if (NavigationState) {
        Navigation.style.width = "23%"
        NavButton.style.left = "23.5%"
        Navigation.style.left = "-0px"
    } else {
        Navigation.style.width = "0%"
        Navigation.style.left = "-10px"
        NavButton.style.left = "0.5%"
    }
}
let Blink = document.getElementById("Blink"),
    Input = document.querySelector("input"),
    input = document.getElementById("Input"),
    Logs = document.getElementsByClassName("Logs")[0],
    RunningLogs = false;
function Bottom(Element) {
    Element.scrollTop = Element.scrollHeight
}
Mousetrap(Input).bind("enter",async function() {
    let ClearSubset = ["clear", "c", "clr"], HelpSubset = ["help", "code"]
    let Character = ["F","A","C","D","×"]
    if (Current_Tab === 8) {
        let UserInput = input.value.toLowerCase()
        if (UserInput === "") {
            return;
        }
        if (UserInput === "cornflower meadow") {
            if (RunningLogs) {
                input.value = input.value
                return;
            } else {
                input.value = ""
            }
            Logs.innerHTML += "World Import Successfully<br>"
            RunningLogs = true
            Bottom(Logs)
            await sleep(1000)
            RunningLogs = false
            Logs.innerHTML += "Welcome to Cornflower Meadow...!<br>"
        } 
        else if (HelpSubset.includes(UserInput)) {
            Logs.innerHTML += `
            Code available (Mã có sẵn)<br>
            - cornflower meadow<br>
            - help<br>
            - code<br>
            `
            input.value = ""
        } else if (ClearSubset.includes(UserInput)) {
            Logs.innerHTML = ""
            input.value = ""
        }
        else {
            Logs.innerHTML += `Error Code #${Character[Math.floor(Math.random()*5)]}${Math.floor(Math.random()*8999 + 1000)}${Character[Math.floor(Math.random()*5)]}: Invalid world key<br>`;
        }
        Bottom(Logs)
    }
}, "keydown")
async function SwitchTab(ID) {
    let Current = document.getElementById(Current_Tab),
        New = document.getElementById(ID)
    if (AnimationInProgress || Current_Tab === ID) {
        return;
    }
    AnimationInProgress = true
    Fade(New, Current)
    await sleep(100)
    AvailableSlideCounter.textContent = Available_Slide[ID]
    SlideCounter.textContent = Current_Slide[ID]
    if (ID === 7) {
        if (Current_Slide[7] != 2) {
            document.getElementById("html").style.filter = "hue-rotate(45deg)"
        } else {
            document.getElementById("html").style.filter = "hue-rotate(0deg)"
        }
    } else if (ID === 8) {
        document.getElementById("html").style.filter = "hue-rotate(80deg)"
    } else {
        document.getElementById("html").style.filter = "hue-rotate(0deg)"
    }
    Current_Tab = ID
    AnimationInProgress = false
}
async function SwitchSlide(ID, Mode) {
    let Current = document.getElementById(String(ID*10+Current_Slide[ID]))
    let Next = document.getElementById(String(ID*10+Current_Slide[ID]+1))
    let Previous = document.getElementById(String(ID*10+Current_Slide[ID]-1))
    console.log(Current_Slide[ID] < Available_Slide[ID])
    if (Mode === "+" && Current_Slide[ID] < Available_Slide[ID]) {
        Current.style.left = "-150%"
        Next.style.left = "50%"
        Current_Slide[ID]++
        if (Current_Tab == 7 && Current_Slide[7] == 2) {
            document.getElementById("html").style.filter = "hue-rotate(0deg)"
        }
    }
    if (Mode === "-" && Current_Slide[ID] > 1) {
        Current.style.left = "150%"
        Previous.style.left = '50%'
        if (Current_Tab == 7 && Current_Slide[7] == 2) {
            document.getElementById("html").style.filter = "hue-rotate(45deg)"
        }
        Current_Slide[ID]--
    }
    SlideCounter.textContent = Current_Slide[ID]
}
setInterval(()=>{ Blink.style.opacity = Blink.style.opacity == 0 ? 1 : 0}, 500)