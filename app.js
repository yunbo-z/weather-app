const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=48781b670b72b9bbaa54a51f7be4f331&query=48.8566,2.3522'

request({ url:url }, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})