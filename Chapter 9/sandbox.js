const scores = [10,30,15,25,50,40,5];

// const filtered = scores.filter(score =>{
//     return score > 20;
// });
// console.log(filtered);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

const filteredUsers = users.filter( user => user.premium === true);
console.log(filteredUsers);

const prices = [20,10,30,25,15,40,80,5];


const salePrices = prices.map(price => {
    return price/2;
});
console.log(salePrices);


const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

const saleProducts = products.map(item => {
    if(item.price >= 30){
        return {name: item.name, price: item.price/2};
    }
    return item;
});

console.log(saleProducts);


//reduce method

const result = scores.reduce((acc, curr) => {
    if(curr >= 50){
        acc++;
    }
    return acc;
}, 0);
console.log(result);