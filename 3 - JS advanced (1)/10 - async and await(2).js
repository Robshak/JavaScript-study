'use strict';

function getPosition(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const coords = pos.coords;
                resolve({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
            },
            (err) => {
                reject(err);
            });
    })
}

async function getCity(){
    try{
        const {latitude, longitude} = await getPosition();
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
        if(!res.ok){
            throw new Error(res.status);
        }
        const data = await res.json();
        const city = data.city;
        console.log(city);
    } catch(e){
        console.log(e);
    }
}

getCity();