// const para = document.querySelector('p');

// console.log(para);

// const error = document.querySelector('.error');
// console.log(error);

// const divErr = document.querySelector('div.error');
// console.log(divErr);

// const lorem = document.querySelector('body > div > p:nth-child(2)');
// console.log(lorem);


// const paras = document.querySelectorAll('p');
// //const errors = document.querySelectorAll('.error');


// console.log(paras[1]);
// console.log(paras[2]);


//grab element by ID

// const title = document.getElementById('page-title');

// console.log(title);

// //get elements by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);


// const paras = document.getElementsByTagName('p');
// console.log(paras);

//changing text and html inside objects.


// const title = document.querySelector('h1');
// //title.setAttribute('style', 'margin: 50px');
// console.log(title.style); 
// console.log(title.style.color);

// paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     if(para.textContent.includes('error')) {
//         para.classList.add('error');
//     }
//     if(para.textContent.includes('success')){
//         para.classList.add('success');
//     }
// });

// const title = document.querySelector('h1');


// const article = document.querySelector('article');
// Array.from(article.children).forEach(child => {
//     console.log(child);
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// const ul = document.querySelector('ul');

// const button = document.querySelector('button');
// button.addEventListener('click', e => {
//     const li = document.createElement('li');
//     li.textContent = 'something new';
//     ul.prepend (li); 
// });

// // const items = document.querySelectorAll('li');
// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //         e.target.remove();
// //         console.log('event in li');
// //         e.stopPropagation();
// //     })
// // });

// ul.addEventListener('click', e => {
//     console.log(e.target);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// });

// const copy = document.querySelector('.copy-me');
// copy.addEventListener('copy', e =>{
//     console.log('copyright!');
// });

// const box = document.querySelector('.box');
// box.addEventListener('mousemove', e => {
//     //console.log(e.offsetX, e.offsetY);
//     box.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
// });

// document.addEventListener('wheel', e =>{
//     console.log(e.pageX, e.pageY);
// })

const button = document.querySelector('button');
const wrapper = document.querySelector('.popup-wrapper');
const exit = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    wrapper.style.display = 'block';
});

exit.addEventListener('click', () =>{
    wrapper.style.display = 'none';
});

wrapper.addEventListener('click', () =>{
    wrapper.style.display = 'none';
});