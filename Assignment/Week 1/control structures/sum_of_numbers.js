function sum(n){
    sum =0
    for(let i=0; i<n; i++){
        if(n>0){
            if(i % 3 ===0 || i % 5 ===0){
                sum +=i
            }
        }
    }
    return sum
}

console.log(sum(15))