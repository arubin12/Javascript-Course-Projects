// //functions

// // function greet(){
// //     console.log('Hello there!');
// // }
// // greet();

// // function expression

// const speak = function(){
//     console.log('Good day');
// };

// speak();

// // Function definitions are hoisted to the top of the file (can declare them at the bottom and call them above)
// // Function expressions are not

// //example

// hoisting();


// function hoisting(){
//     console.log('this is an example of hoisting');
// }


// // throws error for function expression
// /*
// broken();
// //cant access 'broken' before initialization
// const broken = function(){
//     console.log('This is not hoisted');
// };
// */

// //argument parameters

// const param = function(name){
//     console.log(`good day ${name}`);
// };
// param('mario');

// //can assign default parameters

// const defaultParam = function(name = 'alex', time = 'morning'){
//     console.log(`Good ${time} ${name}`);
// };

// //uses default values
// defaultParam();
// //used input parameters
// defaultParam('levi', 'night');


// //return values
// // const calcArea = function(radius){
// //     return 3.14*(radius**2);
// // };



// //arrow functions

// // const calcArea = (radius) => {
// //     return 3.14 * radius**2;
// // }

// //with 1 parameter you can omit parentheses

// // const calcArea = radius => {
// //     return 3.14 * radius**2;
// // }

// // with 1 line returns you can simplify even further

// const calcArea = radius =>  3.14 * radius**2;
// console.log(calcArea(5));

// const greet = () => 'hello, world';
// console.log(greet());

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };
// console.log(bill([10,15,30], 0.2));


// //functions vs methods

// //a method is a function 

// // function can be called anywhere, method must be called on an object/data type


// //callback functions (passing in functions as parameters)

// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     console.log(value);
// });


// let people = ['mario', 'luigi', 'ryu', 'shaun'];

// people.forEach(person => {
//     console.log(person);
// });

// const logPerson = (person, index) => {
//     console.log(`${index} - ${person}`);
// };
// people.forEach(logPerson);

//callback function in action

const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    html += `<li style = "color: purple">${person}</li>`;
});
console.log(html);

ul.innerHTML = html;
