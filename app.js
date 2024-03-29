const api = '5b481750d927247e72523845237f3514';
const cityName = document.querySelector('.city');
const tempDegree = document.querySelector('.temperature');
const icon = document.querySelector('.icon');
const desc = document.querySelector('.city-temperature__description');

window.addEventListener('load', () => {
	let long;
	let lat;
	//getting current position of User
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

			fetch(base)
				.then(response => {
					return response.json();
				})
				.then(data => {
					const name = data.name;
					const { temp } = data.main;
					const { description } = data.weather[0];
					const icon1 = data.weather[0].icon;
					const iconURL = `http://openweathermap.org/img/wn/${icon1}@2x.png`;

					cityName.textContent = `${name}`;
					tempDegree.textContent = `${temp.toFixed()} °C`;
					icon.innerHTML = `<img src="${iconURL}" style= 'height:7rem'/>`;
					desc.textContent = `${description}`;
				});
		});
	}
});
