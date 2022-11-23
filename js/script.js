const refresh = () => {
	setTimeout('fonctionGlobale()', 10000)
}
refresh()

const fonctionGlobale = () => {

	let date = new Date()
	let hour = date.getHours()
	console.log("heure : ", hour)

	//Nom du Pays : Venezuela
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=8.00&longitude=-66.00&hourly=temperature_2m&forecast_days=1')
  .then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
			
      document.getElementById('Venezuela').innerHTML = tempa[i];
	 
	 				 if (tempa[i]<(-10)){
						document.getElementById('Venezuela').style.color='rgb(33, 15, 148)';
					 } else if (tempa[i]<= 0) {
						document.getElementById('Venezuela').style.color='rgb(132, 213, 253)';
					 } else if (tempa[i]<= 10) {
						document.getElementById('Venezuela').style.color='rgb(237, 253, 132)';
					 }else if (tempa[i]<= 20) {
						document.getElementById('Venezuela').style.color='rgb(247, 156, 65)';
					 }else if (tempa[i]<= 29) {
						document.getElementById('Venezuela').style.color='rgb(233, 30, 23)';
					 }else if (tempa[i]>= 30) {
						document.getElementById('Venezuela').style.color='rgb(146, 3, 3)';
					 }
	 			}
		}
		})
    
	//Nom du Pays : Peru
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-75.25&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('peru').innerHTML = "Peru's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('peru').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('peru').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('peru').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('peru').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('peru').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('peru').style.color='rgb(146, 3, 3)';
				 }
				}
		}
		})
    
	//Nom du Pays : Uruguay
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-33.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('uruguay').innerHTML = "Uruguay's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('uruguay').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('uruguay').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('uruguay').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('uruguay').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('uruguay').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('uruguay').style.color='rgb(146, 3, 3)';
				 }		
			}
		}
		})
    
	//Nom du Pays : Brazil
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-10.00&longitude=-55.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('brazil').innerHTML = "Brazil's temperature " + tempa[i]	
				
				if (tempa[i]<(-10)){
					document.getElementById('brazil').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('brazil').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('brazil').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('brazil').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('brazil').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('brazil').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : French Guyana
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-53.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
				for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('frenchGuyana').innerHTML = "French Guyana's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('frenchGuyana').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('frenchGuyana').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('frenchGuyana').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('frenchGuyana').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('frenchGuyana').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('frenchGuyana').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : Suriname
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-56.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
				for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('suriname').innerHTML = "Suriname's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('suriname').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('suriname').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('suriname').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('suriname').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('suriname').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('suriname').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : Bolivia
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-17.00&longitude=-65.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('bolivia').innerHTML = "Bolivia's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('bolivia').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('bolivia').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('bolivia').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('bolivia').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('bolivia').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('bolivia').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : Paraguay
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-23.33&longitude=-58.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('paraguay').innerHTML = "Paraguay's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('paraguay').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('paraguay').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('paraguay').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('paraguay').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('paraguay').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('paraguay').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : Chile
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-30.00&longitude=-71.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('chile').innerHTML = "Chile's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('chile').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('chile').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('chile').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('chile').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('chile').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('chile').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
    
	//Nom du Pays : Argentina
  
	fetch('https://api.open-meteo.com/v1/gfs?latitude=-34.00&longitude=-64.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('argentina').innerHTML = "Argentina's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('argentina').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('argentina').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('argentina').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('argentina').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('argentina').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('argentina').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})

		//Nom du Pays : Colombia
       
	fetch('https://api.open-meteo.com/v1/gfs?latitude=4.00&longitude=-73.25&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('Colombia').innerHTML = "Colombia 's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('Colombia').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('Colombia').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('Colombia').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('Colombia').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('Colombia').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('Colombia').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
		
		///Nom du Pays : Guyana

	fetch('https://api.open-meteo.com/v1/gfs?latitude=5.00&longitude=-59.00&hourly=temperature_2m&forecast_days=1')
	.then(response => response.json())
	.then(temp => {
		let tempa = temp.hourly.temperature_2m
		for (let i = 0 ; i < tempa.length; i++){
			if (i === hour){
				document.getElementById('Guyana').innerHTML = "Guyana 's temperature " + tempa[i]
				
				if (tempa[i]<(-10)){
					document.getElementById('Guyana').style.color='rgb(33, 15, 148)';
				 } else if (tempa[i]<= 0) {
					document.getElementById('Guyana').style.color='rgb(132, 213, 253)';
				 } else if (tempa[i]<= 10) {
					document.getElementById('Guyana').style.color='rgb(237, 253, 132)';
				 }else if (tempa[i]<= 20) {
					document.getElementById('Guyana').style.color='rgb(247, 156, 65)';
				 }else if (tempa[i]<= 29) {
					document.getElementById('Guyana').style.color='rgb(233, 30, 23)';
				 }else if (tempa[i]>= 30) {
					document.getElementById('Guyana').style.color='rgb(146, 3, 3)';
				 }
			}
		}
		})
		
    //Nom du Pays : Ecuador
    
		fetch('https://api.open-meteo.com/v1/gfs?latitude=-1.25&longitude=-78.25&hourly=temperature_2m&forecast_days=1')
		.then(response => response.json())
		.then(temp => {
			tempa = temp.hourly.temperature_2m
			for (let i = 0 ; i < tempa.length; i++){
				if (i === hour){
					document.getElementById('Ecuador').innerHTML = "Ecuador 's temperature " + tempa[i]
					
					if (tempa[i]<(-10)){
						document.getElementById('Ecuador').style.color='rgb(33, 15, 148)';
					 } else if (tempa[i]<= 0) {
						document.getElementById('Ecuador').style.color='rgb(132, 213, 253)';
					 } else if (tempa[i]<= 10) {
						document.getElementById('Ecuador').style.color='rgb(237, 253, 132)';
					 }else if (tempa[i]<= 20) {
						document.getElementById('Ecuador').style.color='rgb(247, 156, 65)';
					 }else if (tempa[i]<= 29) {
						document.getElementById('Ecuador').style.color='rgb(233, 30, 23)';
					 }else if (tempa[i]>= 30) {
						document.getElementById('Ecuador').style.color='rgb(146, 3, 3)';
					 }
				}
			}
			})
	}
	fonctionGlobale()

	function changeColor(A){

		if(A<10){
			A.style.color=rgb(55, 101, 185);
		}else{A.style.color=rgb(22, 37, 143);}
		  }
