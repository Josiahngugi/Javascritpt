var list =document.querySelectorAll(".main")
var subList = document.querySelectorAll(".sub")

for(let i =0; i< list.length; i++){
    list[i].addEventListener("click", ()=>{
        subList[i].classList.remove("hidden")
    })

    subList[i].addEventListener("click",()=>{
        subList[i].classList.add("hidden")
    })

}

