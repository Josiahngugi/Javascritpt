
const API_Key ="d9f5399c4ab74bc48a4101954232406"


async function  getWeatherData(city){
    const API =`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=no`
    try{
        const res =  await fetch(API)
        const data = await res.json()
        return data
    }catch(err){
        console.log(err.message)
        return null
    }

}

function displayData(data){
    const div =document.getElementById("display")
    if(data){
        const{temp_c, condition } = data.current
        document.getElementById("display").innerHTML=`<h1>location: ${data.location.name}</h1> <P>Temperature:${temp_c}</p> <p>cloud: ${condition.text} <img src=${condition.icon} ></p></h1>`
    }else if(data.cod ==='400'){
        document.getElementById("display").innerHTML=`<p>city not found</p>`
    }
    else{
        document.getElementById("display").innerHTML=`an error has occured`
    }
    
}

function init(){
    const city =document.getElementById("inputText").value
    getWeatherData(city)
    .then((data)=>{displayData(data)})
    .catch((error)=>{console.log('error', error)})
}


document.getElementById("submit").addEventListener("click", init)