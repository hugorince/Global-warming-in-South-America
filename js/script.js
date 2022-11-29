//FONCTIONS
/////////////////////////////////////////////////////////////////////

//FONCTION POUR REFRESH AUTOMATIQUEMENT
const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
//refresh()

//FONCTION DE FETCH PAR COUNTRY

function assignColor(c1, c2, c3, c4, c5, c6, temp, moy){
	if ((temp - moy) <= 0){
		document.getElementById(c1).style.zIndex=3;
		console.log("test position1")
	 } else if ((temp - moy) > 0 && (temp - moy) < 2) {
		document.getElementById(c2).style.zIndex=3;
		console.log("test position2")
	 } else if ((temp - moy) > 0 && (temp - moy) < 4) {
		document.getElementById(c3).style.zIndex=3;
		console.log("test position3")
	 }else if ((temp - moy) > 0 && (temp - moy) < 7) {
		document.getElementById(c4).style.zIndex=3;
		console.log("test position4")
	 }else if ((temp - moy) > 0 && (temp - moy) < 10) {
		document.getElementById(c5).style.zIndex=3;
		console.log("test position5")
	 }else if ((temp - moy) > 10) {
		document.getElementById(c6).style.zIndex=3;
		console.log("test position6", (temp - moy));

	 }
	}

function displayInfo(name) {
	const textInfo = document.getElementById(name)
	textInfo.style.display = "block"
}

function stopDisplay(name) {
	const textInfo = document.getElementById(name)
	textInfo.style.display = "none"
}

const fetchCountry = (countryName, apiToday, apiAqi, apiPast) => {
	
	//VARIABLES FOR TODAY
	let date = new Date()
	let hour = date.getHours()
	let month = date.getMonth() + 1
	let day = date.getDate()
	

	//DATE VARIABLE FOR 1961
	let pastDate1961 = '1961-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1961 = '1961-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}
	
	//DATE VARIABLE FOR 1962
	let pastDate1962 = '1962-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1962 = '1962-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1963
	let pastDate1963 = '1963-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1963 = '1963-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1964
	let pastDate1964 = '1964-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1964 = '1964-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1965
	let pastDate1965 = '1965-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1965 = '1965-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1966
	let pastDate1966 = '1966-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1966 = '1966-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1967
	let pastDate1967 = '1967-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1967 = '1967-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1968
	let pastDate1968 = '1968-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1968 = '1968-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1969
	let pastDate1969 = '1969-' + month + '-' + day + 'T-' + hour + ':00'
	if (hour < 10){
	pastDate1969 = '1969-' + month + '-' + day + 'T-' + '0' + hour + ':00'
	}

	//DATE VARIABLE FOR 1970
	let pastDate1970 = '1970-' + month + '-' + day + 'T' + hour + ':00'
	if (hour < 10){
	pastDate1970 = '1970-' + month + '-' + day + 'T' + '0' + hour + ':00'
	}
	console.log(pastDate1961)


	
	fetch(apiToday)
  	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				fetch(apiAqi, ninjaKey)
				.then(res => res.json())
			   	.then(data => {	
					fetch(apiPast)
        			.then(res => res.json())
        			.then(past => {
						let compare = past.hourly.time
						let country1961 = 0
						let country1962 = 0 
						let country1963 = 0 
						let country1964 = 0
						let country1965 = 0
						let country1966 = 0
						let country1967 = 0
						let country1968 = 0
						let country1969 = 0
						let country1970 = 0
						for (let i = 0 ; i < compare.length; i++){
							
							if (compare[i] === pastDate1961) {
							country1961 = past.hourly.temperature_2m[i]
							console.log(countryName,'1961', country1961)
						}
							
							else if (compare[i] === pastDate1962){
							country1962 = past.hourly.temperature_2m[i]
							console.log(countryName,'1962', country1962)
						}
							
							else if (compare[i] === pastDate1963) {
							country1963 = past.hourly.temperature_2m[i]
							console.log(countryName,'1963', country1963)
						}
							
							else if (compare[i] === pastDate1964) {
							country1964 = past.hourly.temperature_2m[i]
							console.log(countryName, '1964', country1964)
						}
							
							else if (compare[i] === pastDate1965) {
							country1965 = past.hourly.temperature_2m[i]
							console.log(countryName,'1965', country1965)
						}

						else if (compare[i] === pastDate1966) {
							country1966 = past.hourly.temperature_2m[i]
							console.log(countryName,'1966', country1966)
						}

						else if (compare[i] === pastDate1967) {
							country1967 = past.hourly.temperature_2m[i]
							console.log(countryName,'1967', country1967)
						}

						else if (compare[i] === pastDate1968) {
							country1968 = past.hourly.temperature_2m[i]
							console.log(countryName,'1968', country1968)
						}

						else if (compare[i] === pastDate1969) {
							country1969 = past.hourly.temperature_2m[i]
							console.log(countryName,'1969', country1969)
						}

						else if (compare[i] === pastDate1970) {
							country1970 = past.hourly.temperature_2m[i]
							console.log(countryName,'1970', country1970)
						}
					}

							let moyenne = Math.round(((country1961 + country1962 + country1963 + country1964 + country1965 + country1966 + country1967 + country1968 + country1969 + country1970)*10)/10) / 10
							console.log('la moyenne est : ', moyenne)
						
///////////////////////////////CHANGE EFFECT OF FUNCTION HERE

							displayInfo(countryName)
							
							document.getElementById(countryName).innerHTML = countryName +  " 's temperature : " + actualTemp + "    and its Capital's AQI : " + data.overall_aqi + "    moyenne de temperature dans les 60's : " + moyenne
							if (countryName == "paraguay"){ 
							assignColor("pJP", "pJ", "pOP", "pO", "pRP", "pR", actualTemp, moyenne)};
							
							if (countryName == "guyana"){ 
							assignColor("gJP", "gJ", "gOP", "gO", "gRP", "gR", actualTemp, moyenne)};

							if (countryName == "brazil"){ 
								assignColor("bJP", "bJ", "bOP", "bO", "bRP", "bR", actualTemp, moyenne)};

							if (countryName == "argentina"){ 
							assignColor("aJP", "aJ", "aOP", "aO", "aRP", "aR", actualTemp, moyenne)};
						
							if (countryName == "bolivia"){ 
								assignColor("boJP", "boJ", "gOP", "gO", "gRP", "gR", actualTemp, moyenne)};

							if (countryName == "Chile"){ 
								assignColor("cJP", "cJ", "cOP", "cO", "cRP", "cR", actualTemp, moyenne)};

							if (countryName == "colombia"){ 
								assignColor("coJP", "coJ", "coOP", "coO", "coRP", "coR", actualTemp, moyenne)};

							if (countryName == "ecuador"){ 
								assignColor("eJP", "eJ", "eOP", "eO", "eRP", "eR", actualTemp, moyenne)};
						
							if (countryName == "peru"){ 
								assignColor("peJP", "peJ", "peOP", "peO", "peRP", "peR", actualTemp, moyenne)};

							if (countryName == "suriname"){ 
								assignColor("sJP", "sJ", "sOP", "sO", "sRP", "sR", actualTemp, moyenne)};
							
							if (countryName == "uruguay"){ 
								assignColor("uJP", "uJ", "uOP", "uO", "uRP", "uR", actualTemp, moyenne)};

							if (countryName == "venezuela"){ 
								assignColor("vJP", "vJ", "vOP", "vO", "vRP", "vR", actualTemp, moyenne)};
							
							if (countryName == 'frenchGuiana'){
								document.getElementById(countryName).innerHTML = 'No data available'
							}
							
							 
							document.getElementById(countryName).style.display = "none"
						

///////////////////////////////////////////////////////////

								}
						)})}}})}

	
//VARIABLES
/////////////////////////////////////////////////////////////////////

// API KEY FOR NINJAS-API
const ninjaKey = {
    method: 'GET',
    headers: { 'x-api-key': 'FFVKtwe/9HYWh/MfaP4JWA==52LJqTQgTjvxt5Wq' }
  }

// TODAY API VARIABLES
const apiVenezuelaToday = 'https://api.open-meteo.com/v1/gfs?latitude=8.00&longitude=-66.00&hourly=temperature_2m&forecast_days=1'

const apiPeruToday = 'https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-75.25&hourly=temperature_2m&forecast_days=1'

const apiUruguayToday = 'https://api.open-meteo.com/v1/gfs?latitude=-33.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1'

const apiBrazilToday = 'https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-55.00&hourly=temperature_2m&forecast_days=1'

const apiSurinameToday = 'https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1'

const apiBoliviaToday = 'https://api.open-meteo.com/v1/gfs?latitude=-17.00&longitude=-65.00&hourly=temperature_2m&forecast_days=1'

const apiParaguayToday = 'https://api.open-meteo.com/v1/gfs?latitude=-23.33&longitude=-58.00&hourly=temperature_2m&forecast_days=1'

const apiChileToday = 'https://api.open-meteo.com/v1/gfs?latitude=-30.00&longitude=-71.00&hourly=temperature_2m&forecast_days=1'

const apiArgentinaToday = 'https://api.open-meteo.com/v1/gfs?latitude=-34.00&longitude=-64.00&hourly=temperature_2m&forecast_days=1'

const apiColombiaToday = 'https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-73.25&hourly=temperature_2m&forecast_days=1'

const apiGuyanaToday = 'https://api.open-meteo.com/v1/gfs?latitude=5.00&longitude=-59.00&hourly=temperature_2m&forecast_days=1'

const apiEcuadorToday = 'https://api.open-meteo.com/v1/gfs?latitude=-1.25&longitude=-78.25&hourly=temperature_2m&forecast_days=1'




// 60's API VARIABLES

const apiVenezuelaPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=8.00&longitude=-66.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiPeruPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-75.25&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiUruguayPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-33.00&longitude=-56.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiBrazilPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-10.00&longitude=-55.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiSurinamePast = 'https://archive-api.open-meteo.com/v1/era5?latitude=4.00&longitude=-56.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiBoliviaPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-17.00&longitude=-65.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiParaguayPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-23.33&longitude=-58.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiChilePast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-30.00&longitude=-71.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiArgentinaPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-34.00&longitude=-64.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiColombiaPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=4.00&longitude=-73.25&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiGuyanaPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=5.00&longitude=-59.00&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'

const apiEcuadorPast = 'https://archive-api.open-meteo.com/v1/era5?latitude=-1.25&longitude=-78.25&start_date=1960-12-31&end_date=1970-12-31&hourly=temperature_2m'



// AIR QUALITY API LINKS
const apiCaracasAqi = 'https://api.api-ninjas.com/v1/airquality?city=caracas'

const apiLimaAqi = 'https://api.api-ninjas.com/v1/airquality?city=lima'

const apiMontevideoAqi = 'https://api.api-ninjas.com/v1/airquality?city=montevideo'

const apiBrasiliaAqi = 'https://api.api-ninjas.com/v1/airquality?city=brasilia'

const apiParamariboAqi = 'https://api.api-ninjas.com/v1/airquality?city=paramaribo'

const apiSucreAqi = 'https://api.api-ninjas.com/v1/airquality?city=sucre'

const apiAsuncionAqi = 'https://api.api-ninjas.com/v1/airquality?city=asuncion'

const apiSantiagoAqi = 'https://api.api-ninjas.com/v1/airquality?city=santiago'

const apiBuenosairesAqi = 'https://api.api-ninjas.com/v1/airquality?city=buenosaires'

const apiBogotaAqi = 'https://api.api-ninjas.com/v1/airquality?city=bogota'

const apiGeorgetownAqi = 'https://api.api-ninjas.com/v1/airquality?city=georgetown'

const apiQuitoAqi = 'https://api.api-ninjas.com/v1/airquality?city=quito'





// FONCTION PRINCIPALE



const fonctionGlobale = () => {

	//COUNTRY : Venezuela
	fetchCountry('venezuela', apiVenezuelaToday, apiCaracasAqi, apiVenezuelaPast)

	//COUNTRY : Peru
	fetchCountry('peru', apiPeruToday, apiLimaAqi, apiPeruPast)
    
	//COUNTRY : Uruguay
	fetchCountry('uruguay', apiUruguayToday, apiMontevideoAqi, apiUruguayPast)
    
	//Nom du Pays : Brazil
	fetchCountry('brazil', apiBrazilToday, apiBrasiliaAqi, apiBrazilPast)
    
	//Nom du Pays : Suriname
	fetchCountry('suriname', apiSurinameToday, apiParamariboAqi, apiSurinamePast)

	//Nom du Pays : Bolivia
	fetchCountry('bolivia', apiBoliviaToday, apiSucreAqi, apiBoliviaPast)
    
	//Nom du Pays : Paraguay
	fetchCountry('paraguay', apiParaguayToday, apiAsuncionAqi, apiParaguayPast)

	//Nom du Pays : Chile
	fetchCountry('chile', apiChileToday, apiSantiagoAqi, apiChilePast)
    
	//Nom du Pays : Argentina
	fetchCountry('argentina', apiArgentinaToday, apiBuenosairesAqi, apiArgentinaPast)

	//Nom du Pays : Colombia
	fetchCountry('colombia', apiColombiaToday, apiBogotaAqi, apiColombiaPast)
		
	///Nom du Pays : Guyana
	fetchCountry('guyana', apiGuyanaToday, apiGeorgetownAqi, apiGuyanaPast)
		
    //Nom du Pays : Ecuador
	fetchCountry('ecuador', apiEcuadorToday, apiQuitoAqi, apiEcuadorPast)

	//Nom du Pays : French Guiana
	fetchCountry('frenchGuiana', apiEcuadorToday, apiQuitoAqi, apiEcuadorPast)


	}
  fonctionGlobale()


