let RotateImg = document.getElementById("Rotate")
let BufferImg = document.getElementById("Buffer")
//RotateImg.src = "11A6/11A6.jpg"
BufferImg.src = RotateImg.src
let Interval = 5000 //In milisecond
let Index = 0;
let SRC = [
    "11A6/11A6.jpg",
    "10A6/10A6-9-5.jpg",
    "DALAT/NGAY1/PET-1.png",
    "DALAT/NGAY3/FLOW-2.png",
    "KYYEU/CAYDAN2.jpg",
    "10A6/10A6-KC.jpg",
    "KYYEU/TAPTHE.jpg",
    "12A6/12A6-MISC-2.jpg",
    "KYYEU/DUVADAN.jpg",
    "10A6/10A6-KG.jpg",
    "KYYEU/DUCVANHAN.jpg",
    "DALAT/NGAY1/null.png",
    "11A6/11A6-KCT.jpg",
    "DALAT/NGAY1/PARK-1.png",
    "KYYEU/10NAM.jpg"
]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function GradientShift(Phase) {
    
}
async function SpecialFade(Element, OtherElement) {
    Element.style.display = ""
    Element.style.opacity = 1
    await sleep(100)
    OtherElement.style.opacity = 0
}
function Fade(Element, OtherElement) {
    let opacity = Number(Element.style.opacity)
    let interval = setInterval(function() {
        if (Number(opacity) < 1.2) 
        {
            opacity += 0.07
            Element.style.display = ""
            Element.style.opacity = String(opacity)
            OtherElement.style.opacity = String(1 - opacity)
        } 
        else 
        {
            Element.style.opacity = 1
            OtherElement.style.opacity = 0
            OtherElement.style.display = "none"
            clearInterval(interval)
        }
    }, 20);
}
async function Rotate() {
    Index++
    if (Index >= SRC.length - 1) {
        Index = 0
    }
    if (Index % 2 == 1) {
        BufferImg.src = SRC[Index]
        await SpecialFade(BufferImg, RotateImg)
    } else {
        RotateImg.src = SRC[Index]
        await SpecialFade(RotateImg, BufferImg)
    }
}
setInterval(()=> {
    Rotate()
}, Interval)