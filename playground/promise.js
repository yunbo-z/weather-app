//in promise can only pass one state, either resolve or reject
//promise object can be "pending(working), fulfilled, rejected"
const doWorkPromise = new Promise((resolve, reject) => {
    reject('no!')
})

doWorkPromise
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('Error! ', error)
    })