console.log('starting')

// asynchronous function
setTimeout(() => {
    console.log('3 seconds timer')
}, 3000);


// this 0 timer run after 'stopping'
// thats because there are 3 parts runs on the back:
// call stack; node API; call back queue
// when we call the setTimeout function, it's put in th Node API waiting for excute,
// after excuted, it will be put in the call back queue, to waiting the call back block finished all the call
// then the call back block will take the function waiting in the call back queue to excute them
setTimeout(() => {
    console.log('0 second timer')
}, 0);

console.log('stopping')