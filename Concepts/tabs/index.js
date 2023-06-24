const button =document.querySelectorAll(".mainMenu")
const subButton = document.querySelectorAll(".subMenu")

button.forEach((button)=>{
    button.addEventListener("click", ()=>{
        for(let i=0; i<subButton.length; i++){
            subButton[i].classList.remove("hide")
        }
    })
})