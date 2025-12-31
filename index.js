var menu1 = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister1 = 100;
var nextOrderId1 = 1;
var orderQueue1 = [];
function addNewPizza1(pizzaObj1) {
    menu1.push(pizzaObj1);
    console.log("Added new pizza: ".concat(pizzaObj1.name, " for ").concat(pizzaObj1.price));
}
/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder1(pizzaName1) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName1; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName1, " does not exist in the menu."));
        return null;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    console.log("Placed order ".concat(newOrder.id, " for ").concat(selectedPizza.name));
    return newOrder;
}
/**
 * Marks an order as completed and returns the order object (or null if not found).
 */
function completeOrder1(orderId) {
    var order = orderQueue1.find(function (o) { return o.id === orderId; });
    if (!order) {
        console.log("Order ".concat(orderId, " not found."));
        return null;
    }
    order.status = "completed";
    console.log("Order ".concat(orderId, " completed (").concat(order.pizza, ")"));
    return order;
}
// --- Example usage so running `node index.js` produces visible console output ---
console.log('Initial cash:', cashInRegister);
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu: ", menu);
console.log('Cash in register:', cashInRegister);
console.log('Order queue:', orderQueue1);
