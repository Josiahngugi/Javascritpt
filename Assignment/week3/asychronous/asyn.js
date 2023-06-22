 
function asynFunct(num1, num2, callback){
    setTimeout(()=>{
        const sum = num1 + num2
        callback(sum)
    },5000)

}

asynFunct(3,5,function(result){
    console.log(" sum is " + result)
})