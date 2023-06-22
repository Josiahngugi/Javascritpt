// const choices = ["rock", "paper", "scissor"]
var firstPersonScore =0

var buttonChoices = document.querySelectorAll("button")

function generatedChoice(){
    const randomnumber = Math.round((Math.random() * 2) ) 
    return buttonChoices[randomnumber].id
}

    
    for(let i =0; i<buttonChoices.length; i++){
    buttonChoices[i].addEventListener("click", ()=>{
       userChoice = buttonChoices[i].id 
       computerChoice = generatedChoice()
       
     if(computerChoice ==="rock" && userChoice ==="scissor" ||
                computerChoice ==="scissor" && userChoice==="paper"||
                computerChoice ==="paper" && userChoice ==="rock"
                ){
                    firstPersonScore +=5
                    result ="win"
                    
                }
     else{
        firstPersonScore +=0
        result ="lose"
     }
     console.log(firstPersonScore) 
     document.getElementById("score").innerHTML = result
     document.getElementById("totalscore").innerHTML = firstPersonScore
        
    })
    
    }



console.log(firstPersonScore)


