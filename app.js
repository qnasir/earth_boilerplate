//body


var bodyvar = document.body
//four buttons
var consumptionVar = document.getElementById("consumption")
console.log(consumptionVar);

var climateVar = document.getElementById("climate")
console.log(climateVar);

var resourcesVar = document.getElementById("resources")
console.log(resourcesVar);

var peopleVar = document.getElementById("people")
console.log(peopleVar);

//save text
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

// variable Declaration Done ----------------

consumptionVar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

//frame
frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers"

//buttons
consumptionVar.style.background="green"
}

consumptionVar.c

climateVar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

//frame
frame.src= "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"

//buttons
climateVar.style.background="blue"

}

resourcesVar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

//frame
frame.src= "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

//buttons
resourcesVar.style.background="orange"
}

peopleVar.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"

//frame
frame.src= "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need"

//buttons
peopleVar.style.background="brown"
}