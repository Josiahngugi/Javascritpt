
// function call (){
//     const request = fetch('https://couse-api.com/react-store-products').then((response)=>{
//         console.log(response)
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err.message)
//     }).finally(()=>{
//         console.log("will always run")
//     })
// }

// call()

// creating promise and how to consume it

// let lottery = new Promise((resolve, reject)=>{
//     console.log("Lottery happening now")
//     setTimeout(()=>{
//         if(Math.random() > 0.5){
//             resolve("you won")
//         }else{
//             reject("try next time")
//         }
//     }, 5000)
// })

// lottery.then((response)=>{
//     console.log(response)
//     return response
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("will always run")
// })


// const fetchAPI = async function(){
//     const res = await fetch('https://cat-fact.herokuapp.com/facts')
//     const data = await res.json()
//     console.log(data);
// }
// fetchAPI()
// console.log("FIRST");

const fetchAPI = async function(){
    try{
        const res = await fetch('htps://cat-fact.herokuapp.com/facts')
        if(!res.ok){
            throw new Error("custom error")
        }
        const data = await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
        throw new Error("custom error")
    }
}
fetchAPI().then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})

console.log("first")
