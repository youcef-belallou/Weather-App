import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';

const API_Key = `2c02b27a7c6ad36875ac6291cdb636ef`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false,
            humidity: undefined,
            wind: undefined,
            timezone: undefined,
        };
        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog",
        };
    };

    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    get_WeatherIcon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                this.setState({icon: this.weatherIcon.Thunderstorm});
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({icon: this.weatherIcon.Drizzle});
                break;
            case rangeId >= 500 && rangeId <= 531:
                this.setState({icon: this.weatherIcon.Rain});
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({icon: this.weatherIcon.Snow});
                break;
            case rangeId >= 701 && rangeId <= 781:
                this.setState({icon: this.weatherIcon.Atmosphere});
                break;
            case rangeId === 800:
                this.setState({icon: this.weatherIcon.Clear});
                break;
            case rangeId >= 801 && rangeId <= 804:
                this.setState({icon: this.weatherIcon.Clouds});
                break;
            default:
                this.setState({icon: this.weatherIcon.Clouds});
        }
    }

    getWeather = async (e) => {

        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
            const response = await api_call.json();
            const lat = response.coord.lat;
            const lon = response.coord.lon;
            const api_call_time = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_Key}`);
            const response1 = await api_call_time.json();
            console.log(response);
            console.log(response1);
            this.setState({
                city: `${response.name},${response.sys.country}`,
                celsius: this.calCelsius(response.main.temp),
                temp_max: this.calCelsius(response.main.temp_max),
                temp_min: this.calCelsius(response.main.temp_min),
                description: response.weather[0].description,
                humidity: response.main.humidity,
                wind: response.wind.speed,
                error: false,
                timezone: response1.timezone,
            })

            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
        }
    };

    render() {
        return (
            <div className="App">
                <Form loadweather={this.getWeather} error={this.state.error}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    timezone={this.state.timezone}
                />
            </div>
        );
    };
}

export default App;
