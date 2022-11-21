const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
refresh()

const fonctionGlobale = () => {

	let date = new Date()
	let hour = date.getHours()
	console.log(hour)

	//Debut de la partie à copier
	//Nom du Pays : Nigeria
	fetch('https://api.open-meteo.com/v1/gfs?latitude=10.00&longitude=8.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('nigeria').innerHTML = "Nigeria's temperature " + tempa[i]
				}
		}
		})
		//Fin de la partie à copier

		//Nom du Pays : Uruguay
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-33.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
				for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('uruguay').innerHTML = "Uruguay's temperature " + tempa[i]
				
			}
		}
		})
		//Fin de la partie à copier

			//Nom du Pays : Brazil
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-55.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('brazil').innerHTML = "Brazil's temperature " + tempa[i]
				
			}
		}
		})
		//Fin de la partie à copier

				//Nom du Pays : French Guyana
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-53.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
				for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('frenchGuyana').innerHTML = "French Guyana's temperature " + tempa[i]
				
			}
		}
		})
		//Fin de la partie à copier

				//Nom du Pays : Suriname
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
				for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('suriname').innerHTML = "Suriname's temperature " + tempa[i]
				
			}
		}
		})
		//Fin de la partie à copier
	}
	fonctionGlobale()



	//fetch('https://api.open-meteo.com/v1/gfs?latitude=39.74&longitude=-104.98&hourly=temperature_2m&forecast_days=1')
	//.then(response => response.json())
	//.then(response => console.log(response.hourly.temperature_2m))


