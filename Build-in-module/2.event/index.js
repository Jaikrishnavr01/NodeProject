const EventEmitter = require('node:events')

const events =  new EventEmitter()

events.on('order-pizza', (size, toppings) => {
console.log(`pizza is ordered with a size ${size} and with toppings ${toppings}`)
})

events.on('order-pizza', (Size) => {
    if(Size === "large" ){
        console.log('free drink');
    }
    else{
        console.log('no free drink');
    }
})

events.emit('order-pizza', 'small', 'cheese')


