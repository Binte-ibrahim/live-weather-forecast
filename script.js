const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");

const errorMessage = document.getElementById("errorMessage");
const loadingMessage = document.getElementById("loadingMessage");

const forecastContainer =
    document.getElementById("forecastContainer");


searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter a city name.");
        return;
    }

    getWeather(city);
});


cityInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        const city = cityInput.value.trim();

        if (city === "") {
            showError("Please enter a city name.");
            return;
        }

        getWeather(city);
    }
});


async function getWeather(city) {

    try {

        errorMessage.textContent = "";

        weatherCard.style.display = "none";

        if (forecastContainer) {
            forecastContainer.innerHTML = "";
        }

        loadingMessage.style.display = "block";

        searchBtn.disabled = true;
        searchBtn.textContent = "Searching...";


        const locationURL =
            "https://geocoding-api.open-meteo.com/v1/search" +
            `?name=${encodeURIComponent(city)}` +
            "&count=10" +
            "&language=en" +
            "&format=json";


        const locationResponse =
            await fetch(locationURL);


        if (!locationResponse.ok) {

            throw new Error(
                "Unable to connect to location service."
            );

        }


        const locationData =
            await locationResponse.json();


        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            throw new Error("CITY_NOT_FOUND");

        }


        const searchedCity =
            city.toLowerCase().trim();


        let location =
            locationData.results.find(
                result =>
                    result.name.toLowerCase() === searchedCity
            );


        if (!location) {

            location =
                locationData.results[0];

        }


        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


        const weatherURL =
            "https://api.open-meteo.com/v1/forecast" +
            `?latitude=${latitude}` +
            `&longitude=${longitude}` +
            "&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m" +
            "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
            "&temperature_unit=celsius" +
            "&wind_speed_unit=kmh" +
            "&timezone=auto" +
            "&past_days=1" +
            "&forecast_days=2";


        const weatherResponse =
            await fetch(weatherURL);


        if (!weatherResponse.ok) {

            throw new Error(
                "Unable to connect to weather service."
            );

        }


        const weatherData =
            await weatherResponse.json();


        if (!weatherData.current) {

            throw new Error(
                "Current weather data is unavailable."
            );

        }


        if (!weatherData.daily) {

            throw new Error(
                "Forecast data is unavailable."
            );

        }


        const current =
            weatherData.current;


        const currentTemperature =
            current.temperature_2m;


        const currentHumidity =
            current.relative_humidity_2m;


        const currentWind =
            current.wind_speed_10m;


        const currentWeatherCode =
            current.weather_code;



        cityName.textContent =
            `${location.name}, ${location.country}`;



        temperature.textContent =
            Math.round(currentTemperature);


        humidity.textContent =
            `${Math.round(currentHumidity)}%`;



        windSpeed.textContent =
            `${Math.round(currentWind)} km/h`;


        const currentWeatherInfo =
            getWeatherCondition(
                currentWeatherCode
            );


        condition.textContent =
            currentWeatherInfo.condition;


        weatherIcon.textContent =
            currentWeatherInfo.icon;


        displayThreeDayForecast(
            weatherData.daily
        );



        weatherCard.style.display = "block";

    }


    catch (error) {

        console.error(
            "Weather Error:",
            error
        );


        if (error.message === "CITY_NOT_FOUND") {

            showError(
                "City not found. Please enter a valid city name."
            );

        }

        else {

            showError(
                "Unable to get weather data. Please try again."
            );

        }

    }


    finally {

        loadingMessage.style.display = "none";

        searchBtn.disabled = false;

        searchBtn.textContent = "Search";

    }
}


function displayThreeDayForecast(daily) {

    if (!forecastContainer) {
        console.error(
            "forecastContainer was not found in HTML."
        );
        return;
    }


    forecastContainer.innerHTML = "";


    for (let i = 0; i < 3; i++) {

        const date =
            daily.time[i];


        const maxTemperature =
            Math.round(
                daily.temperature_2m_max[i]
            );


        const minTemperature =
            Math.round(
                daily.temperature_2m_min[i]
            );


        const weatherCode =
            daily.weather_code[i];


        const weatherInfo =
            getWeatherCondition(
                weatherCode
            );


        let dayName;


        if (i === 0) {

            dayName = "Yesterday";

        }

        else if (i === 1) {

            dayName = "Today";

        }

        else {

            dayName = "Tomorrow";

        }


        const forecastCard =
            document.createElement("div");


        forecastCard.className =
            "forecast-card";


        forecastCard.innerHTML = `

            <h3>
                ${dayName}
            </h3>

            <p class="forecast-date">
                ${formatDate(date)}
            </p>

            <div class="forecast-icon">
                ${weatherInfo.icon}
            </div>

            <p class="forecast-condition">
                ${weatherInfo.condition}
            </p>

            <div class="forecast-temperature">

                <span class="max-temp">
                    ${maxTemperature}°C
                </span>

                <span class="min-temp">
                    ${minTemperature}°C
                </span>

            </div>

        `;


        // Add card
        forecastContainer.appendChild(
            forecastCard
        );

    }
}


function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-US",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


function getWeatherCondition(code) {

    // Clear sky
    if (code === 0) {

        return {
            condition: "Clear Sky",
            icon: "☀️"
        };

    }

    if (code === 1 || code === 2) {

        return {
            condition: "Partly Cloudy",
            icon: "🌤️"
        };

    }

    if (code === 3) {

        return {
            condition: "Cloudy",
            icon: "☁️"
        };

    }

    if (code === 45 || code === 48) {

        return {
            condition: "Fog",
            icon: "🌫️"
        };

    }

    if (
        code >= 51 &&
        code <= 57
    ) {

        return {
            condition: "Drizzle",
            icon: "🌦️"
        };

    }

    if (
        code >= 61 &&
        code <= 67
    ) {

        return {
            condition: "Rain",
            icon: "🌧️"
        };

    }

    if (
        code >= 71 &&
        code <= 77
    ) {

        return {
            condition: "Snow",
            icon: "❄️"
        };

    }

    if (
        code >= 80 &&
        code <= 82
    ) {

        return {
            condition: "Rain Showers",
            icon: "🌦️"
        };

    }

    if (
        code >= 95 &&
        code <= 99
    ) {

        return {
            condition: "Thunderstorm",
            icon: "⛈️"
        };

    }

    return {
        condition: "Unknown",
        icon: "🌤️"
    };

}

function showError(message) {

    errorMessage.textContent =
        message;

    weatherCard.style.display =
        "none";

}