const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = 'http://api.weatherstack.com/current?access_key=48781b670b72b9bbaa54a51f7be4f331&query=48.8566,2.3522&units=m'

// request({ url:url, json: true }, (error,response) => {
//     if (error) {
//         console.log('Unable to connect to weather server!')
//     }else if (response.body.error) {
//         console.log('Unable to find location!')
//     }
//     else{
//         console.log('In ' + response.body.location.name + ', the weather is ' + response.body.current.weather_descriptions +', it\'s currently ' + response.body.current.temperature + ' degree.')
//     }
// })

// // geocoode
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWIwMCIsImEiOiJjbHFtc3Y5aG0xcGl1MmtyeXhjem9wZ3ZmIn0.46R4e0SOkD-qFjQVU_NVeQ&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to GeoCode server!')
//     } else if (response.body.features.length ===0) {
//         console.log('Unable to find location!')
//     }
//     else {
//         const laititude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(laititude, longitude)
//     }
// })


//The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
const address = process.argv[2]
if (!address) {
    console.log('please provide an address!')
} else {
    //callback chaining
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)//'return' will stop the execution
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

