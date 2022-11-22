const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
refresh()

const fonctionGlobale = () => {

	let date = new Date()
	let hour = date.getHours()
	console.log(hour)

	// Partie de MED
	//Debut de la partie à copier
	//Nom du Pays : Venezuela
	fetch('https://api.open-meteo.com/v1/gfs?latitude=8.00&longitude=-66.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('Venezuela').innerHTML = "Venezuela 's temperature " + tempa[i]
			}
		}
		}
		)
		//Fin de la premèere partie

		//Nom du Pays : Colombia
       
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-73.25&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('Colombia').innerHTML = "Colombia 's temperature " + tempa[i]
			}
		}
		}
		)
		

		///Nom du Pays : Guyana

	fetch('https://api.open-meteo.com/v1/gfs?latitude=5.00&longitude=-59.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('Guyana').innerHTML = "Guyana 's temperature " + tempa[i]
			}
		}
		}
		)
		//Nom du Pays : Ecuador
		fetch('https://api.open-meteo.com/v1/gfs?latitude=-1.25&longitude=-78.25&hourly=temperature_2m&forecast_days=1')
		.then(response => response.json())
		.then(temp => {
			tempa = temp.hourly.temperature_2m
			for (let i = 0 ; i < tempa.length; i++){
				if (i === hour){
					document.getElementById('Ecuador').innerHTML = "Ecuador 's temperature " + tempa[i]
				}
			}
			}
			)
			
		// Fin de la partie de MED
	}
	 fonctionGlobale()