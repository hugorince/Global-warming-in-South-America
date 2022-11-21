// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };



const refresh = () => {
	setTimeout('theFunction()', 10000)
}

const theFunction = () => {

	fetch('https://api.open-meteo.com/v1/gfs?latitude=10.00&longitude=8.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		let date = new Date()
		let hour = date.getHours()
		console.log(hour)
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('temp').innerHTML = "Denver's temperature " + tempa[i]
				refresh()
			}
		}
		})
	}
	theFunction()

	//.catch(err => console.error(err));

	fetch('https://api.open-meteo.com/v1/gfs?latitude=39.74&longitude=-104.98&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(response => console.log(response.hourly.temperature_2m))

//testDeMohamed