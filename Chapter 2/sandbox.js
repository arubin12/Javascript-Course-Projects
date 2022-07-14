// is for one line comments
/* for multi line
comments
*/
//same as java

//getting characters
let firstName = 'Brandon';
let lastName = 'Sanderson';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(fullName[3]);

console.log(fullName.toUpperCase()); 

//common string methods
let email = 'alex.rubin2002@gmail.com'

let result = email.lastIndexOf('l');
//expected result is 19
console.log(result)

let slice = email.slice(0,3);
//slice(start pos, end pos). This is not inclusive at the end (0, 3 will get characters 0 1 and 2)


console.log(slice);


//template strings
const title = 'Best books of 2019';
const author = 'Mario';
const likes = 30;
//concat way
let concatString = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(concatString);
//template string way
let templateString = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(templateString)

//can use to create html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html)


//ARRAYS

let ninjas = ['ryu', 'chun-li', 'sean'];
//join creates a string that is the elements of the array separated by the passed in character
let join = ninjas.join(', ');
console.log(join);


//global scope by default
//can overwrite variables within codeblocks, scope is only in the code block and will return to normal once code block ends
//works with both let and const

let age = 30;

if(true){
    let age = 50;
    console.log('inside code block', age);
}

console.log('outside code block', age);



