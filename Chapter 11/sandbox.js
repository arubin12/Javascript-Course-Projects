// const now = new Date();
// console.log(now);
// //years months days times

// console.log('get full year', now.getFullYear(), now.getHours());

// //months are zero indexed from 0 = jan, 1 = feb, etc

// //days are the same, sunday = 0, monday = 1, etc

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const hour = now.getHours();

    console.log(`${hour}:${minute}:${second}`);

    const html = `<span>${hour}:</span><span>${minute}:</span><span>${second}</span>`;

    clock.innerHTML = html;
}

setInterval(tick, 1000);