const EventEmitter = require('node:events')
class pizzaShop extends EventEmitter {
    constructor(){
        super()
        this.orderNo = 0
    }
    order(size, toppings) {
        this.orderNo++
        this.emit('order', size , toppings) 
    }
    displayOrder() {
        console.log(`currently displaying: ${this.orderNo}`)
    }
}

module.exports = pizzaShop