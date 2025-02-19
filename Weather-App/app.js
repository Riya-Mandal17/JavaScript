const apikey =" 7de4094e603c5ace80ada1e1717d0e9d";
const apiUrl="https://api.weatherapi.com/v1/current.json?key=0c60485014dc4bbaa73171235242308&q=";

const searchinput = document.querySelector(" input");
const  btn = document.querySelector("button");
// const input = document.querySelector("text");
const pic = document.querySelector(".img");
const temp= document.querySelector("h1");
const loc = document.querySelector("h2");
const humi = document.querySelector(".hum");
const windb = document.querySelector(".wind");


async function checkweather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    loc.innerHTML= data.location.name;
    temp.innerHTML= Math.round(data.current.temp_c) + "°c";
    humi.innerHTML = data.current.humidity +"%";
    windb.innerHTML = data.current.wind_kph +"km/hrs";

    if(data.current.condition.text=="Overcast"){
        pic.src = "images/clouds.png";
    }
    else if(data.current.condition.text=="Sunny"){
        pic.src = "images/clear.png";
    }
    else if(data.current.condition.text=="Rainy"){
        pic.src = "images/rain.png";
    }
    else if(data.current.condition.text=="Dizzle"){
        pic.src = "images/drizzle.png";
    }
    else if(data.current.condition.text=="Mist"){
        pic.src = "images/mist.png";
    }
}
   
btn.addEventListener("click",()=>{
    if(!searchinput.value ){
        searchinput.classList.add("abc");
       }
       else{
        searchinput.classList.remove("abc");
        checkweather(searchinput.value);
       }
})
