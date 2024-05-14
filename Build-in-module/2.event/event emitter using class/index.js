const pizzaShop = require('./PizzaShop')
const drinkShop = require('./DrinkOffer')

const shop1 = new pizzaShop()
const Drink = new drinkShop()

shop1.on('order',(size, toppings) => {
    console.log(`ordered a pizza with ${size} and ${toppings}`);
    Drink.offer(size)
})

shop1.displayOrder()
shop1.order('small', 'cheese')