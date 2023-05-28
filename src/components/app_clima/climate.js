export  default async function getClimate(City){
    let APIkey = 'd1c7bddbe4f6d27023cf6e3bbd39e90e';

   await fetch( "http://api.openweathermap.org/data/2.5/forecast?q="+City+"&appid="+APIkey+"&unit=metric")
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            return data;
        })
        .catch(function() {
            // catch any errors
        });
}