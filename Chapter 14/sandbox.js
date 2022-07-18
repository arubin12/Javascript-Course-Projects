//store data in local storage
localStorage.setItem('name', 'alex');
localStorage.setItem('age', 50);

//get data
const data = localStorage.getItem('name');
console.log(data);

//setting data
localStorage.setItem('name', 'josh');
localStorage.name = 'harold';
localStorage.removeItem('name');

//stringifying and parsing data

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'wash dishes', author: 'alex'}
];

console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const storedItems = JSON.parse(localStorage.todos);
console.log(storedItems);