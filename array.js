const products = [
    { prodName: "Marks FCMP", rating: 5, price: 930, discount: 3 },
    { prodName: "Aarong FCMP", rating: 4.5, price: 870, discount: 5 },
    { prodName: "Dano FCMP", rating: 4.7, price: 910, discount: 7 },
    { prodName: "Pran FCMP", rating: 4.3, price: 890, discount: 6 },
    { prodName: "AMA FCMP", rating: 4.5, price: 830, discount: 8 },
];

const ratings = products.filter(e => e.rating >= 4.5);
const prices = products.filter(e => e.price <= 900);
// const discount = products.map ((e, i) => e.price - e.price * e.discount / 100);
// discount.sort((a, b) => a > b);
// console.log(discount);

console.log(ratings);
console.log(prices);
// console.log(discount);

const discount = products.map (e => e.price - e.price * e.discount / 100);
let il = 0;
discount.forEach((e, i) => {
    if (e < discount[il]) {
        il = i;
    }
});

console.log(products[products.map (e => e.price - e.price * e.discount / 100).reduce((mi, cv, ci, discount) => {return cv < discount[mi] ? ci : mi}, 0)]); 
// console.log(index);
// console.log(products[il]);


// function lowestPrice(e, i) {

// }
// let lP = []
// discount.forEach((e, i) => 
// {
//     lP.join(products[i].price - e);
// });

// console.log(lP);
// //     console.log(products[i].price - e)); 
// // console.log(discount);