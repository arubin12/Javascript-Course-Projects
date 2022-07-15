const form = document.querySelector('form');
const cardText = document.querySelector('.details');
const card = document.querySelector('.card');


const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    //update details
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
};


const updateCity = async (city) => {
    const cityDets = await getCity(city);    
    const weather = await getConditions(cityDets.Key);

    return {cityDets, weather};
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

