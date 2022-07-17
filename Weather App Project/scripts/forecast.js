//This contains two functions that use the Accuweather CitySearch and CurrentConditions APIs to obtain a code for an input city, then
//uses this code to get the current weather conditions in that city.

const key = 'rrdzBdzlZrK1qDkDriADCtTcQXmAxW8F';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

   return data[0];
    
};


const getConditions = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

// getCity('new york').then(cityKey => getConditions(cityKey))
//     .then(data => console.log(data))
//     .catch(err => console.log('error thrown: ', err));

