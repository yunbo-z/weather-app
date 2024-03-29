// setTimeout(() => {
//     console.log('2s')
// }, 2000)

// const names = ['Andrew', 'HA', 'HOHO']
// const shotName = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000);

// }
// geocode('Philadelphia', (ndata) => {
//     console.log(ndata)
// })


// challenge
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (a, b, callback) => {
    setTimeout(() => {
        const ssum = a+b
        callback(ssum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

//note: In a synchronous programming model, one line runs after the next, regardless how long each line takes to execute.
//asynchronous function: like setTimeout