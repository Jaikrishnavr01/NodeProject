const Building = require('./building')
const building1 = new Building('house') 
console.log(building1.getName());
building1.setName('villa')
console.log(building1.getName());

const building2 = new Building('house') 
console.log(building2.getName());