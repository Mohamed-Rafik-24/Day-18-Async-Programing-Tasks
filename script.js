var restCountryAPI = "https://restcountries.com/v3.1/all"; //restCountry API


var fet = fetch(restCountryAPI)                               //fetching restCountry API
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {                                     //mapping rest country API
      var spread = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createcountry(spread);
      
    
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {          //function for bootsrap card
     
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body car" >
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



function block(lat,lng,name){                                                        //function for getting weather report
          
  var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fa4973b1fa1ca717811b9566c55321ec`   //weather API
   
  console.log(name)
 fetch(weatherAPI)
 .then((response) => response.json())
 .then((data)=> {
                                                                                    //creating alert box showing weather report
     alert(`                                                                             
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())

