API_KEY =`596eea6f94863edd4149a9d1979fd809`;
const loadTemperature =city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaytemperature(data))

}
const displaytemperature=data=>{
     const temperature = document.getElementById('temperature');
       temperature.innerText= data.main.temp;
    // setInnerTextById=('temperature',data.main.temp);
    // setInnerTextById=('condition',data.weather[0].main);
    console.log(data.weather[0].main);
  
}
const setInnerTextById=(id,text)=>{
    const temperature=document.getElementById(id)
    temperature.innerText= text;
}

document.getElementById('btn-search').addEventListener('click',function(){
const searchField=document.getElementById('serachField');
const city = searchField.value ;
//set city
 document.getElementById('city').innerText = city;
 loadTemperature(city);
})


loadTemperature('dhaka');