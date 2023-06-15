function divide(a, b){
    if(b === 0){
        throw new Error(" cannot divide by zero")
    }
    else{
       return  a/b
    }
}

// divide(10,0)


// try and catch

try{
    let result = divide(10,0)
    console.log(result)
} catch(error){
    console.log(error.message)
}