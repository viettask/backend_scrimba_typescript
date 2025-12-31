type Pizza = {
    name: string;
    price: number;
};

let menu1 : {
    name: string,
    price:number
}[]= [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister1 :number = 100
let nextOrderId1: number= 1

type order = {
    id:number,
    pizza: string,
    status: string
}
let orderQueue1 : {
    id:number,
    pizza: string,
    status: string
}[]= []

function addNewPizza1(pizzaObj1:Pizza):void {
    menu1.push(pizzaObj1)
    console.log(`Added new pizza: ${pizzaObj1.name} for ${pizzaObj1.price}`)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder1(pizzaName1:string):order|null {
    let selectedPizza: {
    name: string,
    price:number
} | undefined = menu.find(pizzaObj => pizzaObj.name === pizzaName1)
    if (!selectedPizza ) {
        console.error(`${pizzaName1} does not exist in the menu.`)
        return null
    }
    cashInRegister += selectedPizza.price
    let newOrder:{
    id:number,
    pizza: string,
    status: string
    } = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    console.log(`Placed order ${newOrder.id} for ${selectedPizza.name}`)
    return newOrder
}

/**
 * Marks an order as completed and returns the order object (or null if not found).
 */
function completeOrder1(orderId:number):any {
    const order = orderQueue1.find(o => o.id === orderId)
    if (!order) {
        console.log(`Order ${orderId} not found.`)
        return null
    }
    order.status = "completed"
    console.log(`Order ${orderId} completed (${order.pizza})`)
    return order
}



// --- Example usage so running `node index.js` produces visible console output ---
console.log('Initial cash:', cashInRegister)
addNewPizza({name:"Chicken Bacon Ranch", price:12})
addNewPizza({name: "BBQ Chicken", price :12 })
addNewPizza({name:"Spicy Sausage", price:11})
placeOrder("Chicken Bacon Ranch")
completeOrder(1)
console.log("Menu: ", menu)
console.log('Cash in register:', cashInRegister)
console.log('Order queue:', orderQueue1)

