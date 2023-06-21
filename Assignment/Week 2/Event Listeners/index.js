const button1Color = document.querySelector(".button1")
const button2Color = document.querySelector(".button2")
var computedStyle = window.getComputedStyle(button1Color)
var computedStyle2 = window.getComputedStyle(button2Color)
const backgroundColor1 =computedStyle.backgroundColor
const backgroundColor2 =computedStyle2.backgroundColor

window.addEventListener("click", function(){
    // document.querySelector("body").style.backgroundColor = 'white';
})


button1Color.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = backgroundColor1
})

button2Color.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = backgroundColor2
})

