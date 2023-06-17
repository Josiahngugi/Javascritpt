async function getDate(){
    let result = await fetch ("https://api.example.com")
    let Json = await result.json()
    console.log(Json)
}

promises