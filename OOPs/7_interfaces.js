// interface Greet{
//     name: string;
//     age: number
// }
var product1 = {
    name: "Mobile",
    price: 1000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
console.log(calculateTotalPrice(product1));
