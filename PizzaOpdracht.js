var pizzaSmall=prompt('Hoeveel small pizzas wil je hebben?')
var pizzaMedium=prompt('Hoeveel medium pizzas wil je hebben?')
var pizzaLarge=prompt('Hoeveel large pizzas wil je hebben?')

const pizzaSmallPrijs=3.50
const pizzaMediumPrijs=5.00
const pizzaLargePrijs=7.50

var pizzaSmallTotal= (pizzaSmallPrijs*pizzaSmall)
var pizzaMediumTotal= (pizzaMediumPrijs*pizzaMedium)
var pizzaLargeTotal= (pizzaLargePrijs*pizzaLarge)

document.write("Uw totaalbedrag is " + (Number(pizzaSmallTotal)+Number(pizzaMediumTotal)+Number(pizzaLargeTotal)))