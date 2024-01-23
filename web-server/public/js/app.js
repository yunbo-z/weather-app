// fetch('http://localhost:3000/weather?address=paris').then(async (response) =>   {
//     console.log(response)

//     console.log((await response.json()).location)
// })

// querySelector method returns the first element(like: <form>, <input>) that matches a CSS selector
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location-message')
const forecastMessage = document.querySelector('#forecast-message')



// thr function run when the event occurs
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()//prevent the event happened after event occurs
    const location = search.value
    locationMessage.textContent = 'Loading...'
    forecastMessage.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationMessage.textContent = data.error
            } else {
                locationMessage.textContent = 'location: '+ data.location
                forecastMessage.textContent = 'forecast: ' + data.forecast
                console.log('location: '+ data.location)
                console.log('forecast: ' + data.forecast)
            }
        })
    })
})