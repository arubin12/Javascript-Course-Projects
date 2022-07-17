const form = document.querySelector('form');
const cardText = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    
    //destructuring the data
    const {cityDets, weather} = data;

    //update card on the website
    cardText.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    </div>
    `;

    //removing the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    
};


const updateCity = async (city) => {
    //get the city details and the weather using the city key
    const cityDets = await getCity(city);    
    const weather = await getConditions(cityDets.Key);

    return {cityDets: cityDets, weather: weather};
};

form.addEventListener('submit', event =>{
    //prevent page refresh
    event.preventDefault();

    //get the submitted value and reset the form
    const city = form.city.value.trim();
    form.reset();

    //update city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    
});

