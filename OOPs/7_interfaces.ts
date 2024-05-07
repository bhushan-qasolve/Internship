// interface Greet{
//     name: string;
//     age: number
// }

// const greets: Greet={
//     name:"Bhushan",
//     age:23
    
// }

// console.log(greets);

interface Products{
    name:string;
    price:number;
    quantity:number
}

const product1:Products={
    name:"Mobile",
    price:1000,
    quantity:5

}

const calculateTotalPrice = (product:Products) =>{
    const {price,quantity} = product;
    return price*quantity

}

console.log(calculateTotalPrice(product1));
