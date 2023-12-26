const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=48781b670b72b9bbaa54a51f7be4f331&query=48.8566,2.3522&units=m'

request({ url:url, json: true }, (error,response) => {
    console.log('In ' + response.body.location.name + ', the weather is ' + response.body.current.weather_descriptions +', it\'s currently ' + response.body.current.temperature + ' degree.')
})

//geocoode
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWIwMCIsImEiOiJjbHFtc3Y5aG0xcGl1MmtyeXhjem9wZ3ZmIn0.46R4e0SOkD-qFjQVU_NVeQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const laititude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(laititude, longitude)
})