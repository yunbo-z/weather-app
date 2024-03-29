const request = require('postman-request')
// Goal: Create a reusable function for getting the forecast
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=9eb4e1f84f7d869cd4856f58c2b67b1f&query=' + latitude + ',' + longitude + '&units=m'

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to the weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find the location', undefined)
    } else {
      callback(undefined, 'In ' + body.location.name + ', the weather is ' + body.current.weather_descriptions +', it\'s currently ' + body.current.temperature + ' degree.')
    }
  })
}

module.exports = forecast
