


   


const myapi={
    ipaddress:'https://geo.ipify.org/api/v2/country,city?',
  
    mykey:'at_eyWpXARshqkifrWRqrJxhJGPXHK46',
   
};







const ip1=document.getElementById("ip");
const location1=document.getElementById("location1");
const isp1=document.getElementById("isp");
const timezone1=document.getElementById("timezone");
const countries=document.getElementById("country");


const form=document.getElementById("form");
const input=document.getElementById("input_form");
const submitButton=document.getElementById("Submit1");







const  mymap = L.map('map').setView([51.505, -0.09], 13);






const myIcon=L.icon({
    iconUrl:'meri motto.png',
    iconSize:[25,35],
    iconAnchor: [25, 25]
})

    const popup=L.popup()
    .setLatLng([51.505,-0.11])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(mymap);

const marker = L.marker([51.505, -0.09],{icon:myIcon}).addTo(mymap)
const circle=L.circle([51.508,-0.11],
{
    color:'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius:500

});
circle.addTo(mymap);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXNodS0xMjQ0IiwiYSI6ImNrdWgwbHAwODBleG4ycG5tZHR1Z2xvemsifQ.ykpv5iZGO6yv41c9oqxPuA',
}).addTo(mymap);







  const findlatitudeandlongitude=(coordinates)=>
  {
      const {coords: { latitude, longitude}}=coordinates
      console.log(coordinates.coords,latitude)
      mymap.setView([latitude,longitude],13)
      marker.setLatLng([latitude,longitude])
   
      popup .setContent('<p>This is a nice popup.</p>')
  }
  const updateMap = (data) => 
  {
      
       lat1=data.location.lat,
       lng1=data.location.lng,
  
      mymap.setView([lat1, lng1], 13)
      marker.setLatLng([lat1, lng1])
      circle.setLatLng([lat1,lng1])
      //popup .setContent(`<p>Hello world!<br />This is a ${data.location.city}.</p>`)
  
  }
  const findLocation=(data) =>{
  
      ip1.innerText = `${data.ip}`;
      isp1.innerText = `${data.isp}`;
      timezone1.innerText = 'UTC' + `${data.location.timezone}`;
  
      location1.innerText = `${data.location.country},${data.location.city},${data.location.postalCode}`;
    }

  //this geolocation function gets the location of the user 


 /* const initialRender = () => 
{

  
    // if geolocation is su
    //pported, then you'll be prompted to allow or decline location access  
   if(navigator.geolocation) {
        // if success it will callback the functioon and pass location data to it
        navigator.geolocation.getCurrentPosition(findlatitudeandlongitude);
     
        // clicks the button to update banner's informations

       submitButton.Click();
    } else {
        console.log('Could not access Geolocation!')
    }
}
*/

const getdata=async(ip1)=>
{
    const url=myapi.ipaddress+'apiKey='+myapi.mykey+'&ipAddress='+ip1;
   // const URL = API_URL + 'apiKey=' + API_KEY + '&ipAddress=' + IP;
    console.log(url);
    console.log("ashu");
    try {
        const res = await fetch(url);
        const data1 = await res.json();
 
        render(data1)
    
      
    } catch(err) {
        console.log(err)

    }



   // console.log(  
}

getdata(input.value);
 



const render=(data)=>{
    findLocation(data);
    updateMap(data);
 
       
        
    
}



form.addEventListener('click',e=>{
    e.preventDefault();
    getipaddressdata(input.value)
    input.value=''
})

const getipaddressdata=async(ip1)=>
{
    const url=myapi.ipaddress+'apiKey='+myapi.mykey+'&ipAddress='+ip1;
   // const URL = API_URL + 'apiKey=' + API_KEY + '&ipAddress=' + IP;
    console.log(url);
    console.log("ashu");
    try {
        const res = await fetch(url);
        const data1 = await res.json();
 
        render(data1)
        //findlatitudeandlongitude (data1);
       // updateMap(data1);
        
      ///console.log(url);
    } catch(err) {
        console.log(err)

    }



   // console.log(  
}


//console.log(url);
initialRender();



