const curl = "https://api.weatherapi.com/v1/current.json?key=";
const apiKey = "33b389966b354f83abc41715231510";
const city = "Surabaya";
async function getLoc(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.getElementById("time").innerHTML = `${data.location.localtime}`;
        document.getElementById("location").innerHTML = `${data.location.name}, ${data.location.country}`;
        document.getElementById("icon").src = `https:${data.current.condition.icon}`;
        document.getElementById("text").innerHTML = `${data.current.condition.text}`;
        document.getElementById("temp").innerHTML = `${data.current.temp_c} °C`;
        document.getElementById("feelsLike").innerHTML = `Feels like ${data.current.feelslike_c} °C`;
    } catch (error) {
        console.error(error);
    }
}

getLoc(`${curl}${apiKey}&q=${city}`);
