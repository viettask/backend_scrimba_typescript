type Pizza = {
    id: number,
    name: string;
    price: number;
};

/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */
let cashInRegister: number = 100
let nextOrderId: number = 1
let nextPizzaId: number = 1

let menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]



/**
 * Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}
let orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++
    menu.push(pizzaObj)
    console.log(`Added new pizza: ${pizzaObj.name} for ${pizzaObj.price}`)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

/**
 * Challenge: add explicit return types to the rest of our functions
 */

function placeOrder(pizzaName: string): Order | undefined {
    let selectedPizza: Pizza | undefined = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu.`)
        return undefined
    }
    cashInRegister += selectedPizza.price
    let newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    console.log(`Placed order ${newOrder.id} for ${selectedPizza.name}`)
    return newOrder
}

/**
 * Marks an order as completed and returns the order object (or null if not found).
 */
function completeOrder(orderId: number): Order | undefined {
    const order: Order | undefined = orderQueue.find(o => o.id === orderId)
    if (!order) {
        console.log(`Order ${orderId} was not found in the orderQueue.`)
        return
    }
    order.status = "completed"
    console.log(`Order ${orderId} completed (${order.pizza})`)
    return order
}

export function getPizzaDetail(identifier: string | number) : Pizza | undefined{
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */

    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

// --- Example usage so running `node index.js` produces visible console output ---
console.log('Initial cash:', cashInRegister)
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 })
placeOrder("Chicken Bacon Ranch")
completeOrder(1)
console.log("Menu: ", menu)
console.log('Cash in register:', cashInRegister)
console.log('Order queue:', orderQueue)

