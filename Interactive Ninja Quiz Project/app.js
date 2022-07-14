const correctAnswers = ['B', 'A', 'D', 'D'];

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
   

    answers.forEach((answer, i) =>{
        if(answer === correctAnswers[i]){
            score+= 25;
        }
    });
   
    const result = document.querySelector('.d-none');
    result.classList.remove('d-none');
    scrollTo(0,0);

    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if(output < score) {
            output++;
        } else {
            clearInterval(timer);
        }
    }, 10);

});