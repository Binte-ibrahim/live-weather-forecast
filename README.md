# 🌤️ Live Weather Dashboard

A clean and responsive weather dashboard built with HTML, CSS, and JavaScript.  
Search for any city and view its current weather information using live data from the Open-Meteo API.

---

## 🌐 Live Demo

🔗 **Live Website:**  


🔗 **GitHub Repository:**  
https://github.com/Binte-ibrahim/live-weather-forecast.git

---

## 📸 Screenshots

### ☀️ Weather Dashboard

![Weather Dashboard](success.png)

### ❌ Error Handling

![Error State](error.png)

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- ☁️ Display current weather condition
- 💧 Display humidity
- 🌬️ Display wind speed
- 🌤️ Dynamic weather icons
- 🔄 Loading indicator while fetching data
- ❌ Error handling for invalid city names
- ⌨️ Search using the Enter key
- 📱 Responsive design
- 🌐 Live weather data
- ⚡ Fast and simple interface

---

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Application logic and DOM manipulation
- **Fetch API** — Communication with the weather API
- **Open-Meteo API** — Weather and geolocation data

---

## 🌐 API / Data Source

This project uses the **Open-Meteo API** to retrieve weather information.

### Geocoding API

The Geocoding API is used to find the location of a searched city.

It provides:

- City name
- Country
- Latitude
- Longitude

### Weather API

The Weather API uses the city's latitude and longitude to retrieve current weather information.

The dashboard uses:

- Temperature
- Relative humidity
- Wind speed
- Weather code

---

## ⚙️ How It Works

The application follows this process:

```text
User enters a city
        ↓
JavaScript receives the city name
        ↓
Geocoding API searches for the city
        ↓
Latitude and longitude are obtained
        ↓
Weather API is requested
        ↓
Current weather data is received
        ↓
JavaScript processes the response
        ↓
Weather information is displayed
📂 Project Structure
weather-dashboard/
│
├── index.html
├── style.css
├── script.js
├── success.png
├── error.png
└── README.md
File Description
File	Description
index.html	Creates the structure of the dashboard
style.css	Handles styling and responsive design
script.js	Handles API requests and application logic
success.png	Screenshot of a successful search
error.png	Screenshot of the error state
README.md	Project documentation
🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the Repository
git clone YOUR-GITHUB-REPOSITORY-LINK
2. Open the Project Folder
cd weather-dashboard
3. Run the Project

Open:

index.html

in your web browser.

You can also use VS Code Live Server to run the project.

💻 Usage
Open the Weather Dashboard.
Enter the name of a city.
Click the Search button.
Wait for the weather data to load.
View the current weather information.
Example

Search for:

Karachi

The dashboard will display information such as:

Karachi, Pakistan

31°C
Partly Cloudy

Humidity: 60%
Wind Speed: 15 km/h

Weather values change depending on the current API data.

🔄 Loading State

When weather data is being retrieved, the application displays a loading message:

🔄 Getting weather data...

The search button temporarily changes to:

Searching...

After the request is completed, the button returns to:

Search
❌ Error Handling

The application handles invalid city names and API/network errors.

Invalid City

If the user enters an invalid city such as:

xyzabc12345

the application displays:

City not found. Please enter a valid city name.
API / Network Error

If the weather service cannot be reached, the application displays an appropriate error message instead of breaking the interface.

📱 Responsive Design

The dashboard is designed to work across different screen sizes.

Supported Devices
💻 Desktop
💻 Laptop
📱 Mobile
📲 Tablet

The layout automatically adjusts to provide a comfortable viewing experience on smaller screens.

🎨 Design

The interface focuses on:

Clean layout
Simple navigation
Readable typography
Clear weather information
Responsive components
Minimal and user-friendly design
🧠 What I Learned

While building this project, I practiced:

HTML5 structure
CSS styling
Responsive web design
JavaScript DOM manipulation
Event listeners
JavaScript functions
async/await
fetch()
REST API integration
JSON data handling
Error handling
Loading states
Dynamic content updates
Git and GitHub
GitHub Pages deployment
🔮 Future Improvements

Possible improvements for future versions include:

🌡️ Celsius/Fahrenheit toggle
📅 Multi-day weather forecast
📍 Automatic location detection
⭐ Favorite cities
🌙 Dark mode
🕒 Local time for searched cities
🌧️ More detailed weather information
📊 Weather charts
🌅 Sunrise and sunset information
🎨 Weather-based background animations
🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

Fork the repository.
Create a new branch.
git checkout -b feature/new-feature
Make your changes.
Commit your changes.
git commit -m "Add new feature"
Push the branch.
git push origin feature/new-feature
Open a Pull Request.
📄 License

This project is open source and available under the MIT License.

You can use, modify, and improve the project for personal and learning purposes.

👩‍💻 Author

Syeda Noor ul Huda

GitHub:
YOUR-GITHUB-PROFILE-LINK

⭐ Acknowledgements
Open-Meteo — Weather and geocoding data
MDN Web Docs — Web development documentation
<p align="center"> Made with ❤️ using HTML, CSS & JavaScript </p> ```
