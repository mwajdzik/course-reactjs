import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {

    renderWeather(cityData) {
        let name = cityData.city.name;
        let temps = cityData.list.map(w => w.main.temp);
        let humidities = cityData.list.map(w => w.main.humidity);
        let pressures = cityData.list.map(w => w.main.pressure);
        let {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temps} color='orange' units='K'/>
                </td>
                <td>
                    <Chart data={pressures} color='blue' units='hPa'/>
                </td>
                <td>
                    <Chart data={humidities} color='brown' units='%'/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hoover'>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);