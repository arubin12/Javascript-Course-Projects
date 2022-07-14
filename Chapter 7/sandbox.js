const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const username = form.username.value;
    const pattern = /^[a-zA-Z]{6,12}/;

    if(pattern.test(username)){
        feedback.textContent = 'that username is valid';
    } else {
        feedback.textContent = 'that username is invalid';
    }
});



//live feedback gamers

form.username.addEventListener('keyup', e => {

   // console.log(e.target.value, form.username.value);
    const pattern = /^[a-zA-Z]{6,12}/;
    
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'failure');
    }
});