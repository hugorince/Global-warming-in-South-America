// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };

fetch('https://api.open-meteo.com/v1/forecast?latitude=46.00&longitude=2.00&hourly=temperature_2m')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


