// fetch('http://localhost:3000/weather?address=paris').then(async (response) =>   {
//     console.log(response)

//     console.log((await response.json()).location)
// })

// querySelector method returns the first element(like: <form>, <input>) that matches a CSS selector
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// thr function run when the event occurs
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()//prevent reload the whole page after event occurs
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log('location: '+ data.location)
                console.log('forecast: ' + data.forecast)
            }
        })
    })
})