const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
refresh()

const fonctionGlobale = () => {

	let date = new Date()
	let hour = date.getHours()
	console.log(hour)
	
	//Debut de la partie à copier
	//Nom du Pays : Peru
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-75.25&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('peru').innerHTML = "Peru's temperature " + tempa[i]
			}
		}
		})
		//Fin de la partie à copier

		//Debut de la partie à copier
	//Nom du Pays : Bolivia
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-17.00&longitude=-65.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('bolivia').innerHTML = "Bolivia's temperature " + tempa[i]
			}
		}
		})
		//Fin de la partie à copier

		//Debut de la partie à copier
	//Nom du Pays : Paraguay
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-23.33&longitude=-58.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('paraguay').innerHTML = "Paraguay's temperature " + tempa[i]
			}
		}
		})
		//Fin de la partie à copier

		//Debut de la partie à copier
	//Nom du Pays : Chile
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-30.00&longitude=-71.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('chile').innerHTML = "Chile's temperature " + tempa[i]
			}
		}
		})
		//Fin de la partie à copier

		//Debut de la partie à copier
	//Nom du Pays : Argentina
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-34.00&longitude=-64.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('argentina').innerHTML = "Argentina's temperature " + tempa[i]
			}
		}
		})
		//Fin de la partie à copier

	}
	fonctionGlobale()



	//fetch('https://api.open-meteo.com/v1/gfs?latitude=39.74&longitude=-104.98&hourly=temperature_2m&forecast_days=1')
	//.then(response => response.json())
	//.then(response => console.log(response.hourly.temperature_2m))


