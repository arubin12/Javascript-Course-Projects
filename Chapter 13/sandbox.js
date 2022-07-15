// //http requests

// //requests data from another server
// //usually using api endpoints
 

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', event => {
            
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4){
//               reject(`error, could not fetch data from ${resource}`);
//             }
//         });
//         request.open('GET', resource);  
//         request.send(); 
//     });  
// };

// getTodos('jsons/luigi.json').then(data => {
//     console.log('data 1 recieved', data);
//     return getTodos('jsons/mario.json');
// }).then(data =>{
//     console.log('data 2 received', data);
//     return getTodos('jsons/shaun.json');
// }).then(data =>{
//     console.log('data 3 received', data);
// }).catch(err => {
//     console.log('error recieved', err);
// });
// getTodos((error, data) => {
//     console.log(`Error: ${error}, Data: ${data}`);
// });

//promises
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         //reject('error');
//     });
// }

// getSomething().then(data => {
//     console.log('promise resolved');
// }, data => {
//     console.log('promise rejected');
// });

// getSomething().then(data => {
//     console.log('promise resolved');
// }).catch(data =>{
//     console.log('caught error');
// })

//fetch api

const getTodos = async () => {
    const response = await fetch('jsons/luigi.json ');
    const data = await response.json();
    return data;
}

const test = getTodos()
    .then(data => console.log(data))
    .catch(err => console.log('error message: ', err));
// fetch('jsons/luigi.json').then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err, 'error');
// });