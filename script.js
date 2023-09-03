
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '491cd2ebf2msh5de2b4775320646p127935jsn5796660cb760',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}
document.querySelector(".weather").style.display = "none";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function checkWeather(city) {
	document.querySelector(".city").innerHTML = city;
	const response = await fetch(url + city, options);
	if (response.status == 400) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}
	else {
		const result = await response.json();
		console.log(result);
		document.querySelector(".temp").innerHTML = result.temp + "°C";
		document.querySelector(".humidity").innerHTML = result.humidity + "%";
		document.querySelector(".wind_speed").innerHTML = result.wind_speed + "Km/Hour";
		document.querySelector(".weather").style.display = "Block";
	}


}
searchbtn.addEventListener("click", () => {
	checkWeather(searchbox.value);
})


