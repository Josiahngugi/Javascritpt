var paragraph = document.querySelector(".paragraph")
var button = document.querySelector(".button")
var revertButton = document.querySelector(".revertButton")
var originalText =paragraph.textContent




button.addEventListener("click", ()=>{
    paragraph.textContent =" Changed Content !"
    button.style.backgroundColor ="red"
})

revertButton.addEventListener("click",()=>{
    paragraph.textContent =originalText
    revertButton.style.backgroundColor ="green"
})