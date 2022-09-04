const geoB = document.querySelector('form');

const gotLocation = (pos) =>{
    const crd = pos.coords;
    console.log(pos);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

 const gotError=(err) =>{
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

geoB.addEventListener('submit',(e)=>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(gotLocation, gotError)
})