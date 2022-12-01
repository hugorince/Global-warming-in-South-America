//FONCTIONS
/////////////////////////////////////////////////////////////////////

const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
//refresh()


function assignColor(c1, c2, c3, c4, c5, c6, temp, moy){
	if ((temp - moy) <= 0){
		document.getElementById(c1).style.zIndex=3;
		console.log("test position1")
		counter += 1
		console.log('counter = ', counter)
	 } else if ((temp - moy) > 0 && (temp - moy) < 2) {
		document.getElementById(c2).style.zIndex=3;
		console.log("test position2")
		counter += 1
		console.log('counter = ', counter)
	 } else if ((temp - moy) > 0 && (temp - moy) < 4) {
		document.getElementById(c3).style.zIndex=3;
		console.log("test position3")
		counter += 1
		console.log('counter = ', counter)
	 }else if ((temp - moy) > 0 && (temp - moy) < 7) {
		document.getElementById(c4).style.zIndex=3;
		console.log("test position4")
		counter += 1
		console.log('counter = ', counter)
	 }else if ((temp - moy) > 0 && (temp - moy) < 10) {
		document.getElementById(c5).style.zIndex=3;
		console.log("test position5")
		counter += 1
		console.log('counter = ', counter)
	 }else if ((temp - moy) > 10) {
		document.getElementById(c6).style.zIndex=3;
		console.log("test position6")
		counter += 1
		console.log('counter = ', counter)
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

const displayProgressBar = () =>{
if (counter === 1) {
document.getElementById('bar1').style.zIndex=3
}
if (counter === 2) {
document.getElementById('bar2').style.zIndex=3
}
if (counter === 3) {
document.getElementById('bar3').style.zIndex=3
}
if (counter === 4) {
document.getElementById('bar4').style.zIndex=3
}
if (counter === 5) {
document.getElementById('bar5').style.zIndex=3
}
if (counter === 6) {
document.getElementById('bar6').style.zIndex=3
}
if (counter === 7) {
document.getElementById('bar7').style.zIndex=3
}
if (counter === 8) {
document.getElementById('bar8').style.zIndex=3
}
if (counter === 9) {
document.getElementById('bar9').style.zIndex=3
}
if (counter === 10) {
document.getElementById('bar10').style.zIndex=3
}
if (counter === 11) {
document.getElementById('bar11').style.zIndex=3
}
if (counter === 12) {
document.getElementById('bar12').style.zIndex=3
document.getElementById('bar').style.display = 'none'
}
}

async function fetchCountry(countryName, apiToday, apiAqi, apiPast){
	
	let date = new Date()
	let hour = date.getHours()
	let month = date.getMonth() + 1
	let day = date.getDate()

	const createDate = (oneDate, num) =>{
		
		if (day < 10){
			oneDate = num + '-' + month + '-' + '0' + day + 'T-' + hour + ':00'
			}
			if (hour < 10){
				oneDate = num + '-' + month + '-' + day + 'T-' + hour + ':00'
				}
					if (hour < 10 && day < 10){
						oneDate = num + '-' + month + '-' + '0' + day + 'T-' + hour + ':00'
						}
						if (month < 10){
							oneDate = num + '-' + '0' + month + '-' + day + 'T-' + hour + ':00'
						}
							if (month < 10 && day < 10){
							oneDate = num + '-' + '0' + month + '-' + '0' + day + 'T-' + hour + ':00'
							}
								if (month < 10 && day <10 && hour <10 ){
									oneDate = num + '-' + '0' + month + '-' + '0' + day + 'T-' + hour + ':00'
								}	
		return oneDate
	}

let pastDate1961 = ''
pastDate1961 = createDate(pastDate1961, '1961')
let pastDate1962 = ''
pastDate1962 = createDate(pastDate1962, '1962')
let pastDate1963 = ''
pastDate1963 = createDate(pastDate1963, '1963')
let pastDate1964 = ''
pastDate1964 = createDate(pastDate1964, '1964')
let pastDate1965 = ''
pastDate1965 = createDate(pastDate1965, '1965')
let pastDate1966 = ''
pastDate1966 = createDate(pastDate1966, '1966')
let pastDate1967 = ''
pastDate1967 = createDate(pastDate1967, '1967')
let pastDate1968 = ''
pastDate1968 = createDate(pastDate1968, '1968')
let pastDate1969 = ''
pastDate1969 = createDate(pastDate1969, '1969')

	let pastDate1970 = '1970-' + month + '-' + day + 'T' + hour + ':00'
		if (day < 10){
			pastDate1970 = '1970-' + month + '-' + '0' + day + 'T' + hour + ':00'
			}
			if (hour < 10){
				pastDate1970 = '1970-' + month + '-' + day + 'T' + hour + ':00'
				}
				if (hour < 10 && day < 10){
					pastDate1970 = '1970-' + month + '-' + '0' + day + 'T' + hour + ':00'
					}
	console.log(pastDate1961)

	async function fetchApiToday(){
		const response = await fetch(apiToday)
		const temp = await response.json()
		return temp
	}
	async function fetchApiAqi(){
		const response = await fetch(apiAqi, ninjaKey)
		const data = await response.json()
		return data
	}
	async function fetchApiPast(){
		const response = await fetch(apiPast)
		const past = await response.json()
		return past
	}

	fetchApiToday().then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				let actualTemp = tempa[i]
				console.log(countryName, actualTemp)
				fetchApiAqi().then(data => {	
					fetchApiPast().then(past => {
						let compare = past.hourly.time
						
						for (let i = 0 ; i < compare.length; i++){
							if (compare[i] === pastDate1961) {
							country1961 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1961', country1961)
						}
							else if (compare[i] === pastDate1962){
							country1962 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1962', country1962)
						}
							else if (compare[i] === pastDate1963) {
							country1963 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1963', country1963)
						}
							else if (compare[i] === pastDate1964) {
							country1964 = past.hourly.temperature_2m[i + 12]
							console.log(countryName, '1964', country1964)
						}
							else if (compare[i] === pastDate1965) {
							country1965 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1965', country1965)
						}
						else if (compare[i] === pastDate1966) {
							country1966 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1966', country1966)
						}
						else if (compare[i] === pastDate1967) {
							country1967 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1967', country1967)
						}
						else if (compare[i] === pastDate1968) {
							country1968 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1968', country1968)
						}
						else if (compare[i] === pastDate1969) {
							country1969 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1969', country1969)
						}
						else if (compare[i] === pastDate1970) {
							country1970 = past.hourly.temperature_2m[i + 12]
							console.log(countryName,'1970', country1970)
						}}
					
						let moyenne = Math.round(((country1961 + country1962 + country1963 + country1964 + country1965 + country1966 + country1967 + country1968 + country1969 + country1970)*10)/10) / 10
						console.log('la moyenne est : ', moyenne)
					
							if (countryName == "paraguay"){ 
								assignColor("pJP", "pJ", "pOP", "pO", "pRP", "pR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Paraguay est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Asuncion est de " + '<b>' + data.overall_aqi + '</b>'
							}
							
							if (countryName == "guyana"){ 
								assignColor("gJP", "gJ", "gOP", "gO", "gRP", "gR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Guyane est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Georgetown est de " + '<b>' + data.overall_aqi + '</b>'
							}

							if (countryName == "brazil"){ 
								assignColor("bJP", "bJ", "bOP", "bO", "bRP", "bR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Brésil est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Brasilia est de " + '<b>' + data.overall_aqi + '</b>'
							}

							if (countryName == "argentina"){ 
								assignColor("aJP", "aJ", "aOP", "aO", "aRP", "aR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Argentine est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Buenos Aires est de " + '<b>' + data.overall_aqi + '</b>'
							}
						
							if (countryName == "bolivia"){ 
								assignColor("boJP", "boJ", "gOP", "gO", "gRP", "gR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Bolivie est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Sucre est de " + '<b>' + data.overall_aqi + '</b>'
							}

							if (countryName == "chile"){ 
								assignColor("cJP", "cJ", "cOP", "cO", "cRP", "cR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Chili est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Santiago est de " + '<b>' + data.overall_aqi + '</b>'
							}

							if (countryName == "colombia"){ 
								assignColor("coJP", "coJ", "coOP", "coO", "coRP", "coR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Colombie est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Bogota est de " + '<b>' + data.overall_aqi + '</b>' 
							}

							if (countryName == "ecuador"){ 
								assignColor("eJP", "eJ", "eOP", "eO", "eRP", "eR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Équateur est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Quito est de " + '<b>' + data.overall_aqi + '</b>'
							}
						
							if (countryName == "peru"){ 
								assignColor("peJP", "peJ", "peOP", "peO", "peRP", "peR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Pérou est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Lima est de " + '<b>' + data.overall_aqi + '</b>'
							}

							if (countryName == "suriname"){ 
								assignColor("sJP", "sJ", "sOP", "sO", "sRP", "sR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Suriname est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Paramaribo est de " + '<b>' + data.overall_aqi + '</b>' 
							}
							
							if (countryName == "uruguay"){ 
								assignColor("uJP", "uJ", "uOP", "uO", "uRP", "uR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle en Uruguay est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Montevideo est de " + '<b>' + data.overall_aqi + '</b>' 
							}

							if (countryName == "venezuela"){ 
								assignColor("vJP", "vJ", "vOP", "vO", "vRP", "vR", actualTemp, moyenne)
								document.getElementById(countryName).innerHTML = "La température actuelle au Venezuela est de " + '<b>' + actualTemp + '</b>' + "°"+ '<br>'  + "la  moyenne de temperature dans les 60's était de " + '<b>' + moyenne +'</b>' + "°" + '<br>' + "L'indice de qualité de l'air à Caracas est de " + '<b>' + data.overall_aqi + '</b>'
							}
							
							if (countryName == 'frenchGuiana'){
								document.getElementById(countryName).innerHTML = '. ' + 'No data available' + ' .'
							}
							
							displayProgressBar()		 
							stopDisplay(countryName)
							}
)})}}})}

//VARIABLES
/////////////////////////////////////////////////////////////////////

let counter = 0
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
async function fonctionGlobale(){
	fetchCountry('venezuela', apiVenezuelaToday, apiCaracasAqi, apiVenezuelaPast)
	fetchCountry('peru', apiPeruToday, apiLimaAqi, apiPeruPast)
	fetchCountry('uruguay', apiUruguayToday, apiMontevideoAqi, apiUruguayPast)
	fetchCountry('brazil', apiBrazilToday, apiBrasiliaAqi, apiBrazilPast)
	fetchCountry('suriname', apiSurinameToday, apiParamariboAqi, apiSurinamePast)
	fetchCountry('bolivia', apiBoliviaToday, apiSucreAqi, apiBoliviaPast)
	fetchCountry('paraguay', apiParaguayToday, apiAsuncionAqi, apiParaguayPast)
	fetchCountry('chile', apiChileToday, apiSantiagoAqi, apiChilePast)
	fetchCountry('argentina', apiArgentinaToday, apiBuenosairesAqi, apiArgentinaPast)
	fetchCountry('colombia', apiColombiaToday, apiBogotaAqi, apiColombiaPast)
	fetchCountry('guyana', apiGuyanaToday, apiGeorgetownAqi, apiGuyanaPast)
	fetchCountry('ecuador', apiEcuadorToday, apiQuitoAqi, apiEcuadorPast)
	fetchCountry('frenchGuiana', apiEcuadorToday, apiQuitoAqi, apiEcuadorPast)
}
fonctionGlobale()

// fetch(apiVenezuelaPast)
// .then(response => response.json())
// .then(res => console.log(res))
// fetch(apiVenezuelaToday)
// .then(response => response.json())
// .then(res => console.log(res))

// fetch(apiQuitoAqi, ninjaKey)
// .then(res => res.json())
// .then(res => console.log(res))



const funFacts = "L’endroit le plus profond de la mer n’a été visité que par trois personnes.🤿  Quel est le comble pour un écolo ? Se mettre au vert... 🌳  DANEMARK : L’urine de festivaliers réutilisée pour cultiver de l’orge et brasser de la bière. 🍺 Le pastis est écolo, car il préserve la couche d'eau jaune. 🌍  CHINE : Il crée une brique en aspirant les particules d’air pollué de Pékin. 🧱 TURQUIE : Produire son électricité grâce à des coques de pistaches, c’est possible !  🥜  En 2013, une ville au Pérou installe un panneau publicitaire géant qui produit de l’eau potable. 💦 Un américain utilise environ 600 litres d’eau potable par jour. Tandis qu’un européen en utilise 200 et un africain doit survivre avec moins de 30 litres par jour.💧 Environ 10 000 litres d’eau sont nécessaires pour confectionner un seul jean.👖"
document.getElementById("scroll-text").innerHTML = funFacts

