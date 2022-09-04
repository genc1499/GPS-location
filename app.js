const geoB = document.querySelector('form');



const showCords=(lat,long)=>{
    const latitude = document.getElementById('lat');
    const longitude = document.getElementById('long');
    latitude.innerHTML=`Latitude: ${lat}`
    longitude.innerHTML=`Longitude: ${long}`
}

const gotLocation = (pos) =>{
    const crd = pos.coords;
    console.log(pos);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
   
    let latitude=crd.latitude;
    let longitude=crd.longitude

    showCords(latitude,longitude)
  }

 const gotError=(err) =>{
    console.log(`ERROR(${err.code}): ${err.message}`);
  }

geoB.addEventListener('submit',(e)=>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(gotLocation, gotError)
})