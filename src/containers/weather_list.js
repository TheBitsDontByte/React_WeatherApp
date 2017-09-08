import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {


    renderWeather(cityWeather) {
        const name = cityWeather.city.name;
        const {lon, lat} = cityWeather.city.coord;
        let temps = [];
        let pressures = [];
        let humidities = [];

        cityWeather.list.map(data => {
            temps.push(data.main.temp);
            pressures.push(data.main.pressure);
            humidities.push(data.main.humidity);
        });

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="green" units="K" /></td>                
                <td><Chart data={humidities} color="yellow" units="%" /></td>
                <td><Chart data={pressures} color="blue" units="hPa" /></td>
            </tr >
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Machi</th>
                        <th>Temperature (K)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hPa)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );

    }
}

function mapStateToProps({ weather }) {
    //good, but there is a new way
    //return {weather: state.weather};
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);